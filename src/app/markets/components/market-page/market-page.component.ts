import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserServices } from 'src/app/accounts/services/user.services';
import { Region } from 'src/app/shared/data/enum/region.enum';

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.scss'],
})
export class MarketPageComponent implements OnInit, OnDestroy {
  showTools = false;
  regions: Region[];
  rankingSub: Subscription;

  constructor(private userService: UserServices) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.rankingSub.unsubscribe();
  }

  sort() {}
}
