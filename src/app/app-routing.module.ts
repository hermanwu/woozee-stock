import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioListComponent } from './accounts/components/portfolio-list/portfolio-list.component';
import { ActionsListPageComponent } from './actions/components/actions-list-page/actions-list-page.component';
import { AssetListPageComponent } from './assets/components/asset-list-page/asset-list-page.component';
import { IndustryListPageComponent } from './industries/industry-list-page/industry-list-page.component';
import { IndustryPropertiesPageComponent } from './industries/industry-properties-page/industry-properties-page.component';
import { ListComponent } from './list/list.component';
import { MarketPageComponent } from './markets/components/market-page/market-page.component';
import { RegionPropertiesPageComponent } from './markets/components/region-properties-page/region-properties-page.component';
import { NewsPageComponent } from './news/components/news-page/news-page.component';
import { AddNewsFormComponent } from './notes/components/add-news-form/add-news-form.component';
import { CatalystPageComponent } from './notes/components/catalyst/components/catalyst-page/catalyst-page.component';
import { NotesListPageComponent } from './notes/components/notes-list-page/notes-list-page.component';
import { MePageComponent } from './notes/components/opinion-page/blog-page.component';
import { AddPersonFormComponent } from './people/components/add-person-form/add-person-form.component';
import { SlideDemoComponent } from './presentation/slide/slide-demo/slide-demo.component';
import { RiskListPageComponent } from './risks/pages/risk-list-page/risk-list-page.component';
import { AppContainerComponent } from './shared/components/app-container/app-container.component';
import { DemoPageComponent } from './shared/components/demo-page/demo-page.component';
import { ForeverOwnStocksPanelComponent } from './stock/forever-own-stocks-panel/forever-own-stocks-panel.component';
import { StockListPageComponent } from './stock/pages/stock-list-page/stock-list-page.component';
import { StockPropertiesPageComponent } from './stock/pages/stock-properties-page/stock-properties-page.component';
import { HighGrowthIndustryComponent } from './trend/high-growth-industry/high-growth-industry.component';
import { TrendComponent } from './trend/trend.component';
import { UiComponentsPageComponent } from './ui/components/ui-components-page/ui-components-page.component';

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
        path: 'regions/:regionCode',
        component: RegionPropertiesPageComponent,
        pathMatch: 'full',
      },
      {
        path: 'lists/stocks',
        component: StockListPageComponent,
        pathMatch: 'full',
      },
      {
        path: 'lists/industries',
        component: IndustryListPageComponent,
        pathMatch: 'full',
      },
      {
        path: 'lists/regions',
        component: MarketPageComponent,
        pathMatch: 'full',
      },
      {
        path: 'lists/assets',
        component: AssetListPageComponent,
        pathMatch: 'full',
      },

      {
        path: 'about',
        component: AboutComponent,
        pathMatch: 'full',
      },
      {
        path: 'me',
        component: MePageComponent,
        children: [
          {
            path: 'notes',
            component: NotesListPageComponent,
            pathMatch: 'full',
          },
          {
            path: 'lists',
            component: ListComponent,
            pathMatch: 'full',
          },
          {
            path: 'actions',
            component: ActionsListPageComponent,
            pathMatch: 'full',
          },
          {
            path: '**',
            redirectTo: 'notes',
          },
        ],
      },
      {
        path: 'ui-components',
        component: UiComponentsPageComponent,
        children: [
          {
            path: 'note-form',
            pathMatch: 'full',
            component: AddNewsFormComponent,
          },
          {
            path: 'add-person',
            pathMatch: 'full',
            component: AddPersonFormComponent,
          },
        ],
      },
      { path: '', redirectTo: 'news', pathMatch: 'full' },
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
        path: 'industries/:marketType',
        component: IndustryPropertiesPageComponent,
      },
      {
        path: 'industries',
        component: IndustryListPageComponent,
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
        path: 'industries2',
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
