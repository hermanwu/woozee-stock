import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MarketDisplay } from '../markets/components/market-display/market-display.model';
import { MarketsService } from '../markets/services/markets.service';
import { FactType } from '../risks/models/fact-type.enum';
import { Risk } from '../risks/models/risk.model';
import { SubjectiveDataService } from '../risks/services/subjective-data.service';
import { RiskCatalystDialogInput } from './risk-catalyst-dialog-input.model';

@Component({
  selector: 'app-risk-catalyst-dialog',
  templateUrl: './risk-catalyst-dialog.component.html',
  styleUrls: ['./risk-catalyst-dialog.component.scss'],
})
export class RiskCatalystDialogComponent implements OnInit {
  markets?: MarketDisplay[];
  risks?: Risk[];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dialogData: RiskCatalystDialogInput,
    public riskService: SubjectiveDataService,
    marketsService: MarketsService
  ) {
    if (dialogData.factType === FactType.business) {
      this.markets = marketsService.getMarketsByTypes(
        dialogData?.stock?.business?.markets
      );

      for (let market of this.markets) {
        market.risks = riskService.getRisksByUuids(market.riskUuids);
      }
    }
  }

  ngOnInit(): void {}
}
