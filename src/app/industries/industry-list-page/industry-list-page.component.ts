import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserServices } from 'src/app/accounts/services/user.services';
import { IndustriesService } from 'src/app/markets/services/industries.service';
import { Industry } from 'src/app/stock/models/industry.model';

@Component({
  selector: 'app-industry-list-page',
  templateUrl: './industry-list-page.component.html',
  styleUrls: ['./industry-list-page.component.scss'],
})
export class IndustryListPageComponent implements OnInit {
  showTools = false;
  industries: Industry[];
  rankingSub: Subscription;

  constructor(
    private industriesService: IndustriesService,
    private userService: UserServices
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.rankingSub.unsubscribe();
  }

  sort() {}
}
