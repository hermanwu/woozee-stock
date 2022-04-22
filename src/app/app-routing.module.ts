import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CatalystPageComponent } from './catalyst/components/catalyst-page/catalyst-page.component';
import { FomoStocksComponent } from './ideas/fomo-stocks/fomo-stocks.component';
import { MarketPageComponent } from './markets/components/market-page/market-page.component';
import { MarketPropertiesPageComponent } from './markets/components/market-properties-page/market-properties-page.component';
import { NewsPageComponent } from './news/news-page/news-page.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SlideDemoComponent } from './presentation/slide/slide-demo/slide-demo.component';
import { RiskListPageComponent } from './risks/pages/risk-list-page/risk-list-page.component';
import { AppContainerComponent } from './shared/components/app-container/app-container.component';
import { ForeverOwnStocksPanelComponent } from './stock/forever-own-stocks-panel/forever-own-stocks-panel.component';
import { StockListPageComponent } from './stock/pages/stock-list-page/stock-list-page.component';
import { StockPropertiesPageComponent } from './stock/pages/stock-properties-page/stock-properties-page.component';
import { HighGrowthIndustryComponent } from './trend/high-growth-industry/high-growth-industry.component';
import { TrendComponent } from './trend/trend.component';

const routes: Routes = [
  {
    path: 'woozee',
    component: AppContainerComponent,
    children: [
      {
        path: 'risks',
        component: RiskListPageComponent,
      },
      {
        path: 'catalysts',
        component: CatalystPageComponent,
      },
      {
        path: 'news',
        component: NewsPageComponent,
      },
      {
        path: 'markets/:marketType',
        component: MarketPropertiesPageComponent,
      },
      {
        path: 'markets',
        component: MarketPageComponent,
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
        path: 'about',
        component: AboutComponent,
        pathMatch: 'full',
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

      { path: '**', redirectTo: 'news', pathMatch: 'full' },
    ],
  },
  {
    path: 'presentation',
    component: PresentationComponent,
  },
  { path: '**', redirectTo: 'woozee', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
