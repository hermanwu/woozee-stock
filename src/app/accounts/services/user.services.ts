import { Injectable, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { BehaviorSubject, EMPTY, Observable, Subject } from 'rxjs';
import {
  catchError,
  filter,
  map,
  startWith,
  take,
  takeUntil,
} from 'rxjs/operators';
import { users } from 'src/app/mock-data/mock-users.data';
import { cloneDeep } from 'src/app/shared/functions/clone-deep';
import { AuthService } from 'src/app/shared/services/auth.services';
import { StockData } from 'src/app/stock/services/stock-data.model';
import { UserInteractions } from 'src/interactions/interaction.services';

export interface UserData {
  email: string;
  name?: string;
  interactions?: UserInteractions[];
}

export const getTicker = (original: string) => {
  return original.split(':')[0]?.toLowerCase();
};
@Injectable({
  providedIn: 'root',
})
export class UserServices implements OnDestroy {
  users = users;
  user$: Observable<firebase.User | null>;
  private unsubscribe$ = new Subject<void>();
  userStockInteractions = [];
  userData: UserData = {
    email: '',
  };
  interactions$ = new BehaviorSubject<UserInteractions[]>([]);

  constructor(
    private authService: AuthService,
    private firestore: AngularFirestore
  ) {
    this.user$ = this.authService.getUser();
    this.user$
      .pipe(
        map((user) => (user ? user.email : null)),
        startWith(undefined),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((username) => {
        if (username) {
          const documentRef = firebase
            .firestore()
            .collection('users')
            .doc(username);

          documentRef
            .get()
            .then((doc) => {
              if (doc.exists) {
                this.interactions$.next(doc.data().interactions);
              } else {
                throw new Error('Document not found');
              }
            })
            .catch((error) => {
              console.log('Error getting document:', error);
              throw error;
            });
        }
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getUsername() {
    return this.user$.pipe(
      map((user) => (user ? user.email : null)),
      startWith(undefined),
      takeUntil(this.unsubscribe$)
    );
  }

  getUserInteractions() {
    return this.interactions$;
  }

  getRandomUser() {
    return this.users[Math.floor(Math.random() * this.users.length)];
  }

  getUserByUuid(uuid: string) {
    return this.users.find((user) => user.uuid === uuid);
  }

  getUserStockInteractions(): UserInteractions[] {
    console.log(this.userStockInteractions);
    return this.userStockInteractions;
  }

  getSavedNotes(): string[] {
    return;
  }

  updateStockRanks(stocks: StockData[], rankings: string[]): StockData[] {
    const updatedStocks = cloneDeep(stocks);

    const stockRankMap = {};

    for (let i = 0; i < rankings.length; i++) {
      stockRankMap[rankings[i].toLowerCase()] = i;
    }

    for (let stock of updatedStocks) {
      stock.rank = stockRankMap[stock.ticker.toLowerCase()];
    }

    return updatedStocks;
  }

  // const mockInteractions = userInteractions;

  // const interactions = {};

  // for (let interaction of mockInteractions) {
  //   const key =
  //     getTicker(interaction.targetUuid)?.toLowerCase() +
  //     ':' +
  //     interaction.type?.toLowerCase();
  //   interactions[key] = {
  //     listUuids: interaction.listUuids || [],
  //     targetUuid: key,
  //     vote: interaction.vote || 0,
  //     type: interaction.type,
  //   };
  // }
  // console.log(interactions);
  // Store user data into 'users' collection, user email as document ID and user data as document.
  updateVote(targetUuid, vote) {
    if (typeof vote !== 'number') {
      console.error('Invalid vote value. Expected a number.');
      return;
    }

    this.getUsername()
      .pipe(
        filter((username) => !!username),
        take(1),
        catchError((error) => {
          console.error('Error retrieving username:', error);
          return EMPTY;
        })
      )
      .subscribe((username) => {
        if (username) {
          let updatedInteractions;
          const userDocRef = this.firestore.collection('users').doc(username);
          userDocRef
            .get()
            .toPromise()
            .then((doc) => {
              const userData = doc.data() as {
                interactions: UserInteractions[];
              };
              const userInteractions = userData?.interactions || {};

              if (userInteractions.hasOwnProperty(targetUuid)) {
                // Update existing vote
                userInteractions[targetUuid].vote = vote;
              } else {
                // Add new entry
                userInteractions[targetUuid] = {
                  targetUuid: targetUuid,
                  vote: vote,
                  type: targetUuid.split(':')[1],
                };
              }

              updatedInteractions = userInteractions;
              return userDocRef.update({
                interactions: userInteractions,
              });
            })
            .then(() => {
              this.interactions$.next(updatedInteractions);

              console.log('Interactions updated successfully');
            })
            .catch((error) => {
              console.error('Error updating interactions:', error);
              // Handle the error and show an error message to the user
            });
        } else {
          console.error('User not authenticated');
          return EMPTY;
        }
      });
  }
}
