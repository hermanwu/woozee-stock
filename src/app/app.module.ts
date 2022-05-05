import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MAT_RIPPLE_GLOBAL_OPTIONS,
  RippleGlobalOptions,
} from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { PortfolioListComponent } from './accounts/components/portfolio-list/portfolio-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoosterComponent } from './catalyst/booster/booster.component';
import { CatalystLevelDisplayComponent } from './catalyst/catalyst-level-display/catalyst-level-display.component';
import { CatalystListComponent } from './catalyst/components/catalyst-list/catalyst-list.component';
import { CatalystPageComponent } from './catalyst/components/catalyst-page/catalyst-page.component';
import { CatalystComponent } from './catalyst/components/catalyst/catalyst.component';
import { ComparisonDialogComponent } from './comparison-dialog/comparison-dialog.component';
import { FactComponent } from './facts/components/fact/fact.component';
import { MistakesComponent } from './ideas/blog/mistakes/mistakes.component';
import { FomoStocksComponent as HomoStocksComponent } from './ideas/fomo-stocks/fomo-stocks.component';
import { LinksComponent } from './links/links.component';
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
import { RiskLevelDisplayComponent } from './risks/components/risk-level-display/risk-level-display.component';
import { RiskListComponent } from './risks/components/risk-list/risk-list.component';
import { RiskComponent } from './risks/components/risk/risk.component';
import { RiskListPageComponent } from './risks/pages/risk-list-page/risk-list-page.component';
import { AppContainerComponent } from './shared/components/app-container/app-container.component';
import { BadgeComponent } from './shared/components/badge/badge.component';
import { CardComponent } from './shared/components/card/card.component';
import { CarousalComponent } from './shared/components/carousal/carousal.component';
import { DateDisplayComponent } from './shared/components/date-display/date-display.component';
import { DividerComponent } from './shared/components/divider/divider.component';
import { FactTypeDisplayComponent } from './shared/components/fact-type-display/fact-type-display.component';
import { NoteDialogComponent } from './shared/components/note-dialog/note-dialog.component';
import { NoteComponent } from './shared/components/note/note.component';
import { SearchComponent } from './shared/components/search/search.component';
import { AutofocusDirective } from './shared/directives/auto-focus.directive';
import { IopsPipeModule } from './shared/pipes/iops/iops-pipe.module';
import { SafePipe } from './shared/pipes/safe.pipe';
import { SiUnitPipeModule } from './shared/pipes/si-unit/si-unit-pipe.module';
import { UndefinedPipeModule } from './shared/pipes/undefined-pipe/undefined-pipe.module';
import { AppMaterialModule } from './shared/styles/app-material.module';
import { BusinessOverviewComponent } from './stock/components/business-overview/business-overview.component';
import { GrowthComponent } from './stock/components/growth/growth.component';
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
import { TrendIndustriesComponent } from './trend/trend-industries/trend-industries.component';
import { TrendComponent } from './trend/trend.component';
import { RiskCatalystDialogComponent } from './risk-catalyst-dialog/risk-catalyst-dialog.component';

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
    MistakesComponent,
    StockDisplayComponent,
    TrendComponent,
    TrendIndustriesComponent,
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
  ],
  providers: [
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
