import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MarketDisplay } from '../../../markets/components/market-display/market-display.model';
import { IndustriesService } from '../../../markets/services/industries.service';
import { FactType } from '../../models/fact-type.enum';
import { Risk } from '../../models/risk.model';
import { riskService } from '../../services/subjective-data.service';
import { RiskCatalystDialogInput } from './risk-catalyst-dialog-input.model';

@Component({
  selector: 'app-risk-catalyst-dialog',
  templateUrl: './risk-catalyst-dialog.component.html',
  styleUrls: ['./risk-catalyst-dialog.component.scss'],
})
export class RiskCatalystDialogComponent implements OnInit {
  readonly factTypeEnum = FactType;
  readonly factType;
  markets?: MarketDisplay[];
  risks?: Risk[];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    dialogData: RiskCatalystDialogInput,
    private riskService: riskService,
    private marketsService: IndustriesService
  ) {
    this.factType = dialogData.factType;
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
