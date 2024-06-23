import { Injectable, OnDestroy } from '@angular/core';
import {
  AngularFirestore,
  DocumentSnapshot,
} from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { BehaviorSubject, EMPTY, Observable, Subject, from } from 'rxjs';
import {
  catchError,
  filter,
  map,
  shareReplay,
  startWith,
  switchMap,
  take,
  takeUntil,
} from 'rxjs/operators';
import { UserInteractions } from 'src/app/interactions/interaction.services';
import { Tag } from 'src/app/shared/data/tag.model';
import { AuthService } from 'src/app/shared/services/auth.services';
import { SearchService } from 'src/app/shared/services/search.services/search.service';

@Injectable({
  providedIn: 'root',
})
export class UserServices implements OnDestroy {
  private unsubscribe$ = new Subject<void>();
  private userUid: string;

  user$: Observable<firebase.User | null> = this.authService
    .getUser()
    .pipe(shareReplay(1));
  interactions$ = new BehaviorSubject<{ [x: string]: UserInteractions }>({});
  notes$ = new BehaviorSubject<any>({});
  tags$ = new BehaviorSubject<{
    [x: string]: Tag;
  }>({});
  predictions$ = new BehaviorSubject<{ [x: string]: string }>({});
  userData$: Observable<DocumentSnapshot<UserData> | null>;

  constructor(
    private authService: AuthService,
    private firestore: AngularFirestore,
    private searchServices: SearchService
  ) {
    this.user$ = this.authService
      .getUser()
      .pipe(startWith(undefined), takeUntil(this.unsubscribe$));

    this.userData$ = this.user$.pipe(
      filter((user): user is firebase.User => !!user),
      switchMap((user) => {
        const docRef = firebase.firestore().collection('users').doc(user.uid);
        return from(docRef.get()).pipe(
          filter(
            (docSnapshot): docSnapshot is DocumentSnapshot<UserData> =>
              docSnapshot.exists
          ), // Filter out non-existent docs
          catchError((error) => {
            console.error('Error getting document:', error);
            return EMPTY; // or throw error based on your error handling
          })
        );
      }),
      shareReplay(1)
    );

    this.userData$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((docSnapshot) => {
        const data = docSnapshot.data();
        this.interactions$.next(data?.interactions);
        this.notes$.next(processNotes(data?.notes));
        this.tags$.next(data?.tags || {});
        this.predictions$.next(data?.predictions || {});
      });

    this.user$
      .pipe(
        map((user) => (user ? user.uid : null)),
        startWith(undefined),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((uid) => {
        this.userUid = uid;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getUser() {
    return this.user$;
  }

  getUserUid() {
    return this.userUid;
  }

  getUserInteractions() {
    return this.interactions$;
  }

  getTags(): Observable<{
    [x: string]: Tag;
  }> {
    return this.tags$;
  }

  getUserNotes() {
    return this.notes$;
  }

  getUserData() {
    return this.userData$;
  }

  getPredications() {
    return this.predictions$;
  }

  async setUserData(mergeObject: Partial<UserData>): Promise<void> {
    const docSnapshot = await this.userData$
      .pipe(
        filter((doc): doc is DocumentSnapshot<UserData> => !!doc),
        take(1)
      )
      .toPromise(); // Convert observable to a promise

    if (docSnapshot) {
      await docSnapshot.ref.set(mergeObject, { merge: true });
      console.log('Document updated successfully.');
      // Fetch the updated document data
      const updatedDocSnapshot = await docSnapshot.ref.get();
      const updatedData = updatedDocSnapshot.data();

      // Emit the updated values to the observables
      this.interactions$.next(updatedData?.interactions);
      this.notes$.next(processNotes(updatedData?.notes));
      this.tags$.next(updatedData?.tags || {});
      this.predictions$.next(updatedData?.predictions || {});
    } else {
      // Handle the case where the document doesn't exist
      console.error('Document not found.');
    }
  }

  async deleteUserNotes(noteId: string): Promise<void> {
    try {
      const docSnapshot = await this.userData$
        .pipe(
          filter((doc): doc is DocumentSnapshot<UserData> => !!doc),
          take(1)
        )
        .toPromise();

      if (docSnapshot && noteId) {
        await docSnapshot.ref.update({
          [`notes.${noteId}`]: firebase.firestore.FieldValue.delete(),
        });
      }
    } catch (error) {
      console.error('Error deleting note:', error);
      throw error; // Re-throw the error to be caught by the caller
    }
  }

  async updateDisplayName(displayName: string): Promise<void> {
    return this.authService.updateDisplayName(displayName);
  }

  async updateVote(targetUuid: string, vote: number): Promise<void> {
    if (typeof vote !== 'number') {
      console.error('Invalid vote value. Expected a number.');
      return;
    }

    if (!this.userUid) {
      console.error('User not authenticated');
      return;
    }

    const userDocRef = this.firestore.collection('users').doc(this.userUid);

    try {
      const doc = await userDocRef.get().toPromise();
      const userData = doc.data() as { interactions: any };
      const userInteractions = userData?.interactions || {};

      if (userInteractions.hasOwnProperty(targetUuid)) {
        // Update existing vote
        const diff = vote - userInteractions[targetUuid].vote || 0;
        this.searchServices.incrementVote(targetUuid, diff);

        userInteractions[targetUuid].vote = vote;
      } else {
        // Add new entry

        userInteractions[targetUuid] = {
          targetUuid: targetUuid,
          vote: vote,
          type: targetUuid.split(':')[1],
        };
      }

      await userDocRef.update({ interactions: userInteractions });
      this.interactions$.next(userInteractions);
      console.log('Interactions updated successfully');
    } catch (error) {
      console.error('Error updating interactions:', error);
      // Handle the error and show an error message to the user
      throw error; // Rethrow the error to be handled by the caller
    }
  }

  async deleteTag(tag: Tag): Promise<void> {
    if (!this.userUid) {
      console.error('User not authenticated');
      return;
    }

    const userDocRef = this.firestore.doc(`users/${this.userUid}`).ref;
    const tagDocRef = this.firestore.doc(`tags/${tag.uuid}`).ref;

    try {
      await this.firestore.firestore.runTransaction(async (transaction) => {
        // Read user document
        const userDoc = await transaction.get(userDocRef);
        const interactions: Record<string, UserInteractions> = (
          userDoc.data() as any
        )?.interactions;
        const updatedInteractions = {};

        if (interactions) {
          for (const [key, value] of Object.entries(interactions)) {
            if (
              value.listUuids?.length > 0 &&
              value.listUuids.includes(tag.uuid)
            ) {
              updatedInteractions[key] = {
                listUuids: value.listUuids.filter((uuid) => uuid !== tag.uuid),
              };
            }
          }
        }

        // Read tag document
        const tagDoc = await transaction.get(tagDocRef);

        // Perform updates
        transaction.update(userDocRef, {
          [`tags.${tag.uuid}`]: firebase.firestore.FieldValue.delete(),
        });

        if (Object.keys(updatedInteractions).length > 0) {
          transaction.set(
            userDocRef,
            { interactions: updatedInteractions },
            { merge: true }
          );
        }

        if (tagDoc.exists) {
          transaction.update(tagDocRef, {
            [`interactions.${this.userUid}`]:
              firebase.firestore.FieldValue.delete(),
          });
        }
      });

      // Fetch the updated user document and update the local observable
      const updatedDoc = await userDocRef.get();
      const updatedTags = (updatedDoc.data() as any)?.tags as Record<
        string,
        Tag
      >;
      this.tags$.next(updatedTags);
      console.log('Tag deleted successfully from user document.');
    } catch (error) {
      console.error('Error deleting tag:', error);
      // Handle the error and show an error message to the user
      throw error; // Rethrow the error to be handled by the caller
    }
  }

  async updateTag(tag: Tag): Promise<void> {
    if (!this.userUid) {
      console.error('User not authenticated');
      return;
    }

    const userDocRef = this.firestore.collection('users').doc(this.userUid);
    const tagDocRef = this.firestore.collection('tags').doc(tag.uuid);

    try {
      // Update the user's tag data
      await userDocRef.set(
        {
          tags: {
            [tag.uuid]: tag,
          },
        },
        { merge: true }
      );

      // Fetch the updated user document
      const updatedDoc = await userDocRef.get().toPromise();
      const updatedTags = (updatedDoc.data() as any)?.tags as Record<
        string,
        Tag
      >;
      this.tags$.next(updatedTags);
      console.log('Tag updated successfully in user document.');

      // Prepare the merge object for the tag document
      const mergeObject = {
        name: tag.name, // Include the tag name
        interactions: {
          [this.userUid]: {
            votes: tag.votes,
            sentiment: tag.sentiment,
          },
        },
      };

      // Check if the tag document exists
      const tagDoc = await tagDocRef.get().toPromise();

      if (!tagDoc.exists) {
        // If the document doesn't exist, create it with initial data
        await tagDocRef.set({
          name: tag.name,
          // createdAt: this.firestore.FieldValue.serverTimestamp(),
          interactions: {
            [this.userUid]: {
              votes: tag.votes,
              sentiment: tag.sentiment || 'neutral',
            },
          },
        });

        console.log('New tag document created successfully.');
      } else {
        // If the document exists, update it
        await tagDocRef.set(mergeObject, { merge: true });
        console.log('Global Tag data updated successfully.');
      }
    } catch (error) {
      console.error('Error updating tag:', error);
      // Handle the error and show an error message to the user
      throw error; // Rethrow the error to be handled by the caller
    }
  }
}

export interface UserData {
  email: string;
  name?: string;
  interactions?: { [x: string]: UserInteractions };
  notes?: { [x: string]: { content: any } };
  tags?: {
    [x: string]: Tag;
  };
  predictions?: { [x: string]: string };
}

export function processNotes(notes) {
  if (!notes) {
    return;
  }

  const typeToNotesMap = {
    generalNotes: [],
    stock: {},
  };
  // sort notes.
  for (let [key, value] of Object.entries(notes) as [
    string,
    { content: string }
  ][]) {
    const metaData = key.split(':');
    if (metaData.length === 3) {
      let ticker = metaData[0];
      let type = metaData[1];
      let time = metaData[2];

      if (type === 'stock') {
        if (!typeToNotesMap[type].hasOwnProperty(ticker)) {
          typeToNotesMap[type][ticker] = [];
        }
        typeToNotesMap[type][ticker].push({
          attributeId: key,
          createdTimestamp: parseInt(time),
          content: value.content,
        });
      }
    } else {
      typeToNotesMap['generalNotes'].push({
        createdTimestamp: parseInt(key),
        content: value,
      });
    }
  }

  return typeToNotesMap;
}
