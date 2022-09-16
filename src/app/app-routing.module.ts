import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioListComponent } from './accounts/components/portfolio-list/portfolio-list.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { CatalystPageComponent } from './catalyst/components/catalyst-page/catalyst-page.component';
import { FomoStocksComponent } from './ideas/fomo-stocks/fomo-stocks.component';
import { MacroStatsPageComponent } from './macro/components/macro-stats-page/macro-stats-page.component';
import { MarketPageComponent } from './markets/components/market-page/market-page.component';
import { MarketPropertiesPageComponent } from './markets/components/market-properties-page/market-properties-page.component';
import { NewsPageComponent } from './news/components/news-page/news-page.component';
import { SlideDemoComponent } from './presentation/slide/slide-demo/slide-demo.component';
import { RiskListPageComponent } from './risks/pages/risk-list-page/risk-list-page.component';
import { AppContainerComponent } from './shared/components/app-container/app-container.component';
import { DemoPageComponent } from './shared/components/demo-page/demo-page.component';
import { ForeverOwnStocksPanelComponent } from './stock/forever-own-stocks-panel/forever-own-stocks-panel.component';
import { StockListPageComponent } from './stock/pages/stock-list-page/stock-list-page.component';
import { StockPropertiesPageComponent } from './stock/pages/stock-properties-page/stock-properties-page.component';
import { HighGrowthIndustryComponent } from './trend/high-growth-industry/high-growth-industry.component';
import { TrendComponent } from './trend/trend.component';
import { UiComponentsPageComponent } from './ui-components-page/ui-components-page.component';

const routes: Routes = [
  {
    path: '',
    component: AppContainerComponent,
    children: [
      {
        path: 'news',
        component: NewsPageComponent,
        pathMatch: 'full',
      },
      {
        path: 'about',
        component: AboutComponent,
        pathMatch: 'full',
      },
      {
        path: 'macro',
        component: MacroStatsPageComponent,
        pathMatch: 'full',
      },
      {
        path: 'blog',
        component: BlogPageComponent,
        pathMatch: 'full',
      },
      {
        path: 'ui-components',
        component: UiComponentsPageComponent,
        pathMatch: 'full',
      },
      { path: '', redirectTo: 'blog', pathMatch: 'full' },
    ],
  },
  {
    path: 'woozee',
    component: AppContainerComponent,
    children: [
      {
        path: 'demo',
        pathMatch: 'full',
        component: DemoPageComponent,
      },
      {
        path: 'risks',
        component: RiskListPageComponent,
      },
      {
        path: 'catalysts',
        component: CatalystPageComponent,
      },
      {
        path: 'portfolios',
        component: PortfolioListComponent,
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
        path: 'industries',
        component: HighGrowthIndustryComponent,
      },
      {
        path: 'trend',
        component: TrendComponent,
      },
      { path: 'stocks', component: StockListPageComponent, pathMatch: 'full' },
      { path: 'slides', component: SlideDemoComponent, pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'news', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
