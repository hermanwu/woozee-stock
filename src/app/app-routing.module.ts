import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FomoStocksComponent } from './ideas/fomo-stocks/fomo-stocks.component';
import { RiskListPageComponent } from './risks/pages/risk-list-page/risk-list-page.component';
import { SlideDemoComponent } from './shared/components/slide/slide-demo/slide-demo.component';
import { ForeverOwnStocksPanelComponent } from './stock/forever-own-stocks-panel/forever-own-stocks-panel.component';
import { StockListPageComponent } from './stock/pages/stock-list-page/stock-list-page.component';
import { StockPropertiesPageComponent } from './stock/pages/stock-properties-page/stock-properties-page.component';
import { HighGrowthIndustryComponent } from './trend/high-growth-industry/high-growth-industry.component';
import { TrendComponent } from './trend/trend.component';

const routes: Routes = [
  {
    path: 'risks',
    component: RiskListPageComponent,
  },
  {
    path: 'stocks/:stockId',
    component: StockPropertiesPageComponent,
  },
  {
    path: 'forever-own',
    component: ForeverOwnStocksPanelComponent,
  },
  {
    path: 'fomo',
    component: FomoStocksComponent,
  },
  {
    path: 'industries',
    component: HighGrowthIndustryComponent,
  },
  {
    path: 'trend',
    component: TrendComponent,
  },
  { path: 'stocks', component: StockListPageComponent, pathMatch: 'full' },
  { path: 'slides', component: SlideDemoComponent, pathMatch: 'full' },

  { path: '**', redirectTo: 'risks', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
