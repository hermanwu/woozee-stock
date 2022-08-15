import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MAT_RIPPLE_GLOBAL_OPTIONS,
  RippleGlobalOptions,
} from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AboutComponent } from './about/about.component';
import { PortfolioListComponent } from './accounts/components/portfolio-list/portfolio-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoosterComponent } from './catalyst/booster/booster.component';
import { CatalystLevelDisplayComponent } from './catalyst/catalyst-level-display/catalyst-level-display.component';
import { CatalystListComponent } from './catalyst/components/catalyst-list/catalyst-list.component';
import { CatalystPageComponent } from './catalyst/components/catalyst-page/catalyst-page.component';
import { CatalystTotalDisplayComponent } from './catalyst/components/catalyst-total-display/catalyst-total-display.component';
import { CatalystComponent } from './catalyst/components/catalyst/catalyst.component';
import { DecisionDashboardComponent } from './decision-dashboard/decision-dashboard.component';
import { FactComponent } from './facts/components/fact/fact.component';
import { GrowthDetailsComponent } from './growth-details/growth-details.component';
import { FomoStocksComponent as HomoStocksComponent } from './ideas/fomo-stocks/fomo-stocks.component';
import { ImageDisplayComponent } from './images/components/image-display/image-display.component';
import { MarketDisplayComponent } from './markets/components/market-display/market-display.component';
import { MarketListComponent } from './markets/components/market-list/market-list.component';
import { MarketPageComponent } from './markets/components/market-page/market-page.component';
import { MarketPropertiesPageComponent } from './markets/components/market-properties-page/market-properties-page.component';
import { MediaLinkComponent } from './media/media-link/media-link.component';
import { NewsPageComponent } from './news/news-page/news-page.component';
import { ThumbnailComponent } from './presentation/components/thumbnail/thumbnail.component';
import { PresentationHeaderComponent } from './presentation/presentation-header/presentation-header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SlideDemoComponent } from './presentation/slide/slide-demo/slide-demo.component';
import { SlideFooterComponent } from './presentation/slide/slide-footer/slide-footer.component';
import { SlideComponent } from './presentation/slide/slide/slide.component';
import { ProfitabilityComponent } from './profitability/profitability.component';
import { RiskCatalystDialogComponent } from './risk-catalyst-dialog/risk-catalyst-dialog.component';
import { RiskLevelDisplayComponent } from './risks/components/risk-level-display/risk-level-display.component';
import { RiskListComponent } from './risks/components/risk-list/risk-list.component';
import { RiskTotalDisplayComponent } from './risks/components/risk-total-display/risk-total-display.component';
import { RiskComponent } from './risks/components/risk/risk.component';
import { RiskListPageComponent } from './risks/pages/risk-list-page/risk-list-page.component';
import { SentimentDisplayComponent } from './sentiment-display/sentiment-display.component';
import { AppContainerComponent } from './shared/components/app-container/app-container.component';
import { BadgeComponent } from './shared/components/badge/badge.component';
import { CardComponent } from './shared/components/card/card.component';
import { CarousalComponent } from './shared/components/carousal/carousal.component';
import { DateDisplayComponent } from './shared/components/date-display/date-display.component';
import { DemoPageComponent } from './shared/components/demo-page/demo-page.component';
import { DividerComponent } from './shared/components/divider/divider.component';
import { FactTypeDisplayComponent } from './shared/components/fact-type-display/fact-type-display.component';
import { NoteDialogComponent } from './shared/components/note-dialog/note-dialog.component';
import { NoteComponent } from './shared/components/note/note.component';
import { SearchComponent } from './shared/components/search/search.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { AutofocusDirective } from './shared/directives/auto-focus.directive';
import { IopsPipeModule } from './shared/pipes/iops/iops-pipe.module';
import { SafePipe } from './shared/pipes/safe.pipe';
import { SiUnitPipeModule } from './shared/pipes/si-unit/si-unit-pipe.module';
import { UndefinedPipeModule } from './shared/pipes/undefined-pipe/undefined-pipe.module';
import { AppMaterialModule } from './shared/styles/app-material.module';
import { StatsDisplayComponent } from './stats-display/stats-display.component';
import { BusinessOverviewComponent } from './stock/components/business-overview/business-overview.component';
import { ComparisonDialogComponent } from './stock/components/comparison-dialog/comparison-dialog.component';
import { EarningsReportComponent } from './stock/components/earnings-report/earnings-report.component';
import { GrowthComponent } from './stock/components/growth/growth.component';
import { LinksComponent } from './stock/components/links/links.component';
import { MovementDisplayComponent } from './stock/components/movement-display/movement-display.component';
import { ProfitabilityDetailsComponent } from './stock/components/profitability-details/profitability-details.component';
import { RevenueCompositionDisplayComponent } from './stock/components/revenue-composition-display/revenue-composition-display.component';
import { RevenueDisplayComponent } from './stock/components/revenue-display/revenue-display.component';
import { TickerDisplayComponent } from './stock/components/ticker-display/ticker-display.component';
import { ValuationComponent } from './stock/components/valuation/valuation.component';
import { ForeverOwnStocksPanelComponent } from './stock/forever-own-stocks-panel/forever-own-stocks-panel.component';
import { FundamentalStatsDisplayComponent } from './stock/molecules/fundamental-stats-display/fundamental-stats-display.component';
import { NewsDisplayComponent } from './stock/molecules/news-display/news-display.component';
import { StockListTableComponent } from './stock/molecules/stock-list-table/stock-list-table.component';
import { StockProductsListComponent } from './stock/molecules/stock-products-list/stock-products-list.component';
import { ThoughtsDisplayComponent } from './stock/molecules/thoughts-display/thoughts-display.component';
import { StockListPageComponent } from './stock/pages/stock-list-page/stock-list-page.component';
import { StockPropertiesPageComponent } from './stock/pages/stock-properties-page/stock-properties-page.component';
import { StockDisplayComponent } from './stock/stock-display/stock-display.component';
import { TitleMenuComponent } from './title-menu/title-menu.component';
import { HighGrowthIndustryComponent } from './trend/high-growth-industry/high-growth-industry.component';
import { TrendComponent } from './trend/trend.component';
import { ValuationDetailsComponent } from './valuation-details/valuation-details.component';

// Use this when you want to disable Material ripple animations for all components
const globalRippleConfig: RippleGlobalOptions = { disabled: true };
@NgModule({
  declarations: [
    AppComponent,
    StockPropertiesPageComponent,
    StockListPageComponent,
    ThoughtsDisplayComponent,
    NewsDisplayComponent,
    FundamentalStatsDisplayComponent,
    StockProductsListComponent,
    HighGrowthIndustryComponent,
    StockDisplayComponent,
    TrendComponent,
    HomoStocksComponent,
    ForeverOwnStocksPanelComponent,
    StockListTableComponent,
    SlideDemoComponent,
    SlideComponent,
    RiskListPageComponent,
    SlideFooterComponent,
    RiskComponent,
    NoteComponent,
    CardComponent,
    AppContainerComponent,
    PresentationComponent,
    PresentationHeaderComponent,
    NoteDialogComponent,
    SafePipe,
    RiskLevelDisplayComponent,
    CarousalComponent,
    TitleMenuComponent,
    MediaLinkComponent,
    ThumbnailComponent,
    FactComponent,
    ValuationComponent,
    ComparisonDialogComponent,
    ProfitabilityComponent,
    BusinessOverviewComponent,
    LinksComponent,
    GrowthComponent,
    AboutComponent,
    BoosterComponent,
    CatalystLevelDisplayComponent,
    FactTypeDisplayComponent,
    RiskListComponent,
    CatalystListComponent,
    CatalystComponent,
    BadgeComponent,
    SearchComponent,
    TickerDisplayComponent,
    AutofocusDirective,
    NewsPageComponent,
    CatalystPageComponent,
    MarketPageComponent,
    MarketListComponent,
    MarketDisplayComponent,
    MarketPropertiesPageComponent,
    DateDisplayComponent,
    PortfolioListComponent,
    DividerComponent,
    RiskCatalystDialogComponent,
    SliderComponent,
    DemoPageComponent,
    RiskTotalDisplayComponent,
    CatalystTotalDisplayComponent,
    DecisionDashboardComponent,
    EarningsReportComponent,
    RevenueCompositionDisplayComponent,
    RevenueDisplayComponent,
    GrowthDetailsComponent,
    SentimentDisplayComponent,
    MovementDisplayComponent,
    ProfitabilityDetailsComponent,
    StatsDisplayComponent,
    ImageDisplayComponent,
    ValuationDetailsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    IopsPipeModule,
    UndefinedPipeModule,
    SiUnitPipeModule,
    // Setup angular fire.
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
