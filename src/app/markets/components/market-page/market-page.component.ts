import { Component, OnInit } from '@angular/core';
import { Industry } from 'src/app/stock/models/market.models';
import { IndustriesService } from '../../services/industries.service';

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.scss'],
})
export class IndustriesPageComponent implements OnInit {
  showTools = false;
  industries: Industry[];

  constructor(private industriesService: IndustriesService) {}

  ngOnInit(): void {
    this.industries = this.industriesService.getAllIndustries();
  }

  sort() {}
}
