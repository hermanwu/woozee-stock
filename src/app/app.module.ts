import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MAT_RIPPLE_GLOBAL_OPTIONS,
  RippleGlobalOptions,
} from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WoozeeLibModule } from 'woozee-lib';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessOverviewComponent } from './business-overview/business-overview.component';
import { ComparisonDialogComponent } from './comparison-dialog/comparison-dialog.component';
import { FactComponent } from './facts/components/fact/fact.component';
import { MistakesComponent } from './ideas/blog/mistakes/mistakes.component';
import { FomoStocksComponent } from './ideas/fomo-stocks/fomo-stocks.component';
import { LinksComponent } from './links/links.component';
import { MediaLinkComponent } from './media/media-link/media-link.component';
import { ThumbnailComponent } from './presentation/components/thumbnail/thumbnail.component';
import { PresentationHeaderComponent } from './presentation/presentation-header/presentation-header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SlideDemoComponent } from './presentation/slide/slide-demo/slide-demo.component';
import { SlideFooterComponent } from './presentation/slide/slide-footer/slide-footer.component';
import { SlideComponent } from './presentation/slide/slide/slide.component';
import { ProfitabilityComponent } from './profitability/profitability.component';
import { RiskLevelDisplayComponent } from './risks/components/risk-level-display/risk-level-display.component';
import { RiskComponent } from './risks/components/risk/risk.component';
import { RiskListPageComponent } from './risks/pages/risk-list-page/risk-list-page.component';
import { AppContainerComponent } from './shared/components/app-container/app-container.component';
import { CardComponent } from './shared/components/card/card.component';
import { CarousalComponent } from './shared/components/carousal/carousal.component';
import { NoteDialogComponent } from './shared/components/note-dialog/note-dialog.component';
import { NoteComponent } from './shared/components/note/note.component';
import { IopsPipeModule } from './shared/pipes/iops/iops-pipe.module';
import { SafePipe } from './shared/pipes/safe.pipe';
import { SiUnitPipeModule } from './shared/pipes/si-unit/si-unit-pipe.module';
import { UndefinedPipeModule } from './shared/pipes/undefined-pipe/undefined-pipe.module';
import { AppMaterialModule } from './shared/styles/app-material.module';
import { GrowthComponent } from './stock/components/growth/growth.component';
import { ValuationComponent } from './stock/components/valuation/valuation.component';
import { ForeverOwnStocksPanelComponent } from './stock/forever-own-stocks-panel/forever-own-stocks-panel.component';
import { FundamentalStatsDisplayComponent } from './stock/molecules/fundamental-stats-display/fundamental-stats-display.component';
import { NewsDisplayComponent } from './stock/molecules/news-display/news-display.component';
import { StockListTableComponent } from './stock/molecules/stock-list-table/stock-list-table.component';
import { StockProductsListComponent } from './stock/molecules/stock-products-list/stock-products-list.component';
import { StockStatsComponent } from './stock/molecules/stock-stats/stock-stats.component';
import { ThoughtsDisplayComponent } from './stock/molecules/thoughts-display/thoughts-display.component';
import { StockListPageComponent } from './stock/pages/stock-list-page/stock-list-page.component';
import { StockPropertiesPageComponent } from './stock/pages/stock-properties-page/stock-properties-page.component';
import { StockDisplayComponent } from './stock/stock-display/stock-display.component';
import { TitleMenuComponent } from './title-menu/title-menu.component';
import { HighGrowthIndustryComponent } from './trend/high-growth-industry/high-growth-industry.component';
import { TrendIndustriesComponent } from './trend/trend-industries/trend-industries.component';
import { TrendComponent } from './trend/trend.component';

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
    FomoStocksComponent,
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
    StockStatsComponent,
    FactComponent,
    ValuationComponent,
    ComparisonDialogComponent,
    ProfitabilityComponent,
    BusinessOverviewComponent,
    LinksComponent,
    GrowthComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    WoozeeLibModule,
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
