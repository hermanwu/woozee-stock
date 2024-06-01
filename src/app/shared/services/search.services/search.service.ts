import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, ReplaySubject, throwError } from 'rxjs';
import { catchError, first } from 'rxjs/operators';

export interface StateGroup {
  label: string;
  items?: any[];
}

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  stateGroups: StateGroup[] = [];
  stocksMap = {};
  metaData$: Observable<any>;
  metaDataObject: any;
  metaDataObjectLoaded$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor(private firestore: AngularFirestore) {
    this.metaData$ = this.firestore
      .collection('search')
      .doc('searchData')
      .valueChanges()
      .pipe(
        first(),
        catchError((err) => {
          console.error('Error fetching search/stocks:', err);
          // Depending on your error handling, you might want to stop the recursion here
          // and return an empty observable or rethrow the error
          this.metaDataObjectLoaded$.next(false);
          this.metaDataObjectLoaded$.complete();
          return throwError(err);
        })
      );

    this.metaData$.subscribe(
      (data: { [key: string]: { display_name: string; type: string } }) => {
        this.metaDataObject = data;
        // iterate attributes and values of the data object
        for (let [key, value] of Object.entries(data)) {
          // add the stock to the stocksMap
          if (value.type === 'stock') {
            this.stocksMap[key] = {
              ticker: key,
              displayName: value.display_name,
            };
          }
        }

        const sortedEntries = Object.entries(this.stocksMap).sort(
          ([keyA], [keyB]) => keyA.localeCompare(keyB)
        );
        this.stocksMap = Object.fromEntries(sortedEntries);

        this.stateGroups.unshift({
          label: 'Stocks and ETFs',
          items: Object.values(this.stocksMap),
        });

        this.metaDataObjectLoaded$.next(true);
        this.metaDataObjectLoaded$.complete();
      },
      (err) => {
        console.error('Error fetching search/stocks:', err);
        this.metaDataObjectLoaded$.next(false);
      }
    );
  }

  getSearchOptions(): StateGroup[] {
    return this.stateGroups;
  }

  getMetaDataObject(): any {
    return this.metaDataObject;
  }

  incrementVote(id: string, incrementValue: number, type?: string): void {}
}
