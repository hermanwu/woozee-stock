import { Injectable, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, ReplaySubject, Subject, throwError } from 'rxjs';
import { catchError, first, takeUntil } from 'rxjs/operators';
import { Tag } from '../../data/tag.model';

export interface StateGroup {
  label: string;
  items?: any[];
}

@Injectable({
  providedIn: 'root',
})
export class SearchService implements OnDestroy {
  stateGroups: StateGroup[] = [];
  stocksMap = {};
  metaData$: Observable<any>;
  metaDataObject: any;
  metaDataObjectLoaded$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  topStocks: any[] = [];
  topTags: any[] = [];

  private subscription$ = new Subject<void>();

  constructor(private firestore: AngularFirestore) {
    this.metaData$ = this.firestore
      .collection('search')
      .doc('searchData')
      .valueChanges()
      .pipe(
        first(),
        catchError((err) => {
          console.error('Error fetching search/stocks:', err);
          this.metaDataObjectLoaded$.next(false);
          this.metaDataObjectLoaded$.complete();
          return throwError(err);
        }),
        takeUntil(this.subscription$)
      );

    this.metaData$.subscribe(
      (data: {
        [key: string]: {
          name?: string;
          display_name: string;
          type: string;
          votes?: number;
          stocks?: string[];
        };
      }) => {
        this.metaDataObject = data;
        for (let [key, value] of Object.entries(data)) {
          if (key.endsWith('::tag') && value.votes !== undefined) {
            this.topTags.push({
              uuid: key.slice(0, -5),
              name: value.name,
              votes: value.votes,
              stocks: value.stocks,
            });
          } else if (value.type === 'stock') {
            this.stocksMap[key] = {
              ticker: key,
              displayName: value.display_name,
            };

            if (value.votes > 0) {
              this.topStocks.push({
                ticker: key,
                displayName: value.display_name,
                votes: value.votes,
              });
            }
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

  ngOnDestroy() {
    this.subscription$.next();
    this.subscription$.complete();
  }

  getTopStocks() {
    return this.topStocks;
  }

  getTopTags(): Tag[] {
    return this.topTags;
  }

  getSearchOptions(): StateGroup[] {
    return this.stateGroups;
  }

  getMetaDataObject(): any {
    return this.metaDataObject;
  }

  setSearchData(mergeObject) {
    this.firestore
      .collection('search')
      .doc('searchData')
      .set(mergeObject, { merge: true });
  }

  incrementVote(id: string, incrementValue: number, type?: string): void {}
}
