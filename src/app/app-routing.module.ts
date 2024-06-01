import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioListComponent } from './accounts/components/portfolio-list/portfolio-list.component';
import { SignupComponent } from './accounts/signup/signup.component';
import { AssetListPageComponent } from './assets/components/asset-list-page/asset-list-page.component';
import { IndustryListPageComponent } from './industries/industry-list-page/industry-list-page.component';
import { LoginComponent } from './login/login.component';
import { MarketPageComponent } from './markets/components/market-page/market-page.component';
import { RegionPropertiesPageComponent } from './markets/components/region-properties-page/region-properties-page.component';
import { NewsPageComponent } from './news/components/news-page/news-page.component';
import { CatalystPageComponent } from './notes/components/catalyst/components/catalyst-page/catalyst-page.component';
import { NotesListPageComponent } from './notes/components/notes-list-page/notes-list-page.component';
import { MePageComponent } from './notes/components/opinion-page/blog-page.component';
import { AddPersonFormComponent } from './people/components/add-person-form/add-person-form.component';
import { PersonPropertyPageComponent } from './people/person-property-page/person-property-page.component';
import { SlideDemoComponent } from './presentation/slide/slide-demo/slide-demo.component';
import { ProductPropertiesPageComponent } from './product-properties-page/product-properties-page.component';
import { AppContainerComponent } from './shared/components/app-container/app-container.component';
import { DemoPageComponent } from './shared/components/demo-page/demo-page.component';
import { StockListPageComponent } from './stock/pages/stock-list-page/stock-list-page.component';
import { StockPropertiesPageComponent } from './stock/pages/stock-properties-page/stock-properties-page.component';
import { TagPropertiesPageComponent } from './tag/tag-properties-page/tag-properties-page.component';
import { TradablePropertiesPageComponent } from './tradable-properties-page/tradable-properties-page.component';
import { HighGrowthIndustryComponent } from './trend/high-growth-industry/high-growth-industry.component';
import { TrendComponent } from './trend/trend.component';
import { UiComponentsPageComponent } from './ui/components/ui-components-page/ui-components-page.component';
import { UiAtomsComponent } from './ui/ui-atoms/ui-atoms.component';
import { UiMoleculesComponent } from './ui/ui-molecules/ui-molecules.component';
import { UiOrganismComponent } from './ui/ui-organism/ui-organism.component';
import { UiTemplatesComponent } from './ui/ui-templates/ui-templates.component';

const routes: Routes = [
  {
    path: '',
    component: AppContainerComponent,
    children: [
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
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
            path: 'opinions',
            component: NotesListPageComponent,
            pathMatch: 'full',
          },
          {
            path: '**',
            redirectTo: 'opinions',
          },
        ],
      },
      {
        path: 'ui-components',
        component: UiComponentsPageComponent,
        children: [
          {
            path: 'add-person',
            pathMatch: 'full',
            component: AddPersonFormComponent,
          },
          {
            path: 'ui-atoms',
            pathMatch: 'full',
            component: UiAtomsComponent,
          },
          {
            path: 'ui-molecules',
            pathMatch: 'full',
            component: UiMoleculesComponent,
          },
          {
            path: 'ui-organisms',
            pathMatch: 'full',
            component: UiOrganismComponent,
          },
          {
            path: 'ui-templates',
            pathMatch: 'full',
            component: UiTemplatesComponent,
          },
          {
            path: '**',
            redirectTo: 'note-form',
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
        path: 'catalysts',
        component: CatalystPageComponent,
      },
      {
        path: 'portfolios',
        component: PortfolioListComponent,
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
        path: 'products/:productId',
        component: ProductPropertiesPageComponent,
      },
      {
        path: 'people/:personUuid',
        component: PersonPropertyPageComponent,
      },
      {
        path: 'tags/:tagUuid',
        component: TagPropertiesPageComponent,
      },
      {
        path: 'quotes/:quoteUuid',
        component: TradablePropertiesPageComponent,
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
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
