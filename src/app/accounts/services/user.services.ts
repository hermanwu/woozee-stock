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

      let originalValue = 0;
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

export const getTicker = (original: string) => {
  return original.split(':')[0]?.toLowerCase();
};

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
