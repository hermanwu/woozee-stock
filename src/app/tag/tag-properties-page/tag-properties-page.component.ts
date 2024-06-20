import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription, filter, takeUntil } from 'rxjs';
import {
  InteractionServices,
  UserInteractions,
} from 'src/app/interactions/interaction.services';
import { SearchService } from 'src/app/shared/services/search.services/search.service';
import { UserServices } from '../../accounts/services/user.services';
import { Product } from '../../mock-data/product.mock';
import {
  Organization,
  Person,
} from '../../people/components/investor-display/investor-display.component';
import { Note } from '../../shared/data/note.interface';

@Component({
  selector: 'app-tag-properties-page',
  templateUrl: './tag-properties-page.component.html',
  styleUrls: ['./tag-properties-page.component.scss'],
})
export class TagPropertiesPageComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  routeSub: Subscription;
  tagUuid: string;
  tag: any;
  notes: Note[];
  organizations: Organization[];
  products: Product[];
  people: Person[];
  uuidToInteractionMap;
  stocks = [];
  stockInteractions = [];

  currentUser;

  displayItems: {
    tradableItem: any;
    userInteraction: UserInteractions;
  }[] = [];

  constructor(
    private route: ActivatedRoute,
    private interactionServices: InteractionServices,
    private userServices: UserServices,
    private searchServices: SearchService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.tagUuid = params['tagUuid'].toLowerCase();

      this.userServices
        .getTags()
        .pipe(
          filter((tags) => !!tags),
          takeUntil(this.unsubscribe$)
        )
        .subscribe((tags) => {
          this.tag = tags[this.tagUuid];

          this.userServices.interactions$
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((interactions) => {
              this.stockInteractions = [];
              for (const [key, interaction] of Object.entries(interactions)) {
                if (
                  interaction.listUuids &&
                  interaction.listUuids.includes(this.tagUuid)
                ) {
                  const [uuid, type] = key.split(':');

                  if (type === 'tradable') {
                    this.stockInteractions.push(interaction);
                  }
                }
              }

              this.stockInteractions.sort((a, b) => b?.vote - a?.vote);
            });
        });
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
