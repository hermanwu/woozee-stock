import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FomoStocksComponent } from './fomo-stocks/fomo-stocks.component';
import { ForeverOwnStocksPanelComponent } from './forever-own-stocks-panel/forever-own-stocks-panel.component';
import { HighGrowthIndustryComponent } from './high-growth-industry/high-growth-industry.component';
import { StockListPageComponent } from './stock/pages/stock-list-page/stock-list-page.component';
import { StockPropertiesPageComponent } from './stock/pages/stock-properties-page/stock-properties-page.component';
import { TrendComponent } from './trend/trend.component';

const routes: Routes = [
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
  { path: '**', redirectTo: 'stocks', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
