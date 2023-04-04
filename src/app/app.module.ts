import { ClipboardModule } from '@angular/cdk/clipboard';
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
import { ActionsListPageComponent } from './actions/components/actions-list-page/actions-list-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetListPageComponent } from './assets/components/asset-list-page/asset-list-page.component';
import { ComparisonNoteComponent } from './comparison-note/comparison-note.component';
import { ImageDisplayComponent } from './images/components/image-display/image-display.component';
import { IndustryListPageComponent } from './industries/industry-list-page/industry-list-page.component';
import { IndustryPropertiesPageComponent } from './industries/industry-properties-page/industry-properties-page.component';
import { ListDisplayComponent } from './list-display/list-display.component';
import { ListPropertiesPageComponent } from './list/components/list-properties-page/list-properties-page.component';
import { ListComponent } from './list/list.component';
import { MarketDisplayComponent } from './markets/components/market-display/market-display.component';
import { MarketListComponent } from './markets/components/market-list/market-list.component';
import { MarketPageComponent } from './markets/components/market-page/market-page.component';
import { RegionPropertiesPageComponent } from './markets/components/region-properties-page/region-properties-page.component';
import { DailyMediumReportDisplayDialogComponent } from './news/components/daily-medium-report-display-dialog/daily-medium-report-display-dialog.component';
import { MediaLinkComponent } from './news/components/media-link/media-link.component';
import { InstagramNewsDisplayDialogComponent } from './news/components/news-display-dialog/news-display-dialog.component';
import { NewsPageComponent } from './news/components/news-page/news-page.component';
import { NoteContainerComponent } from './note-container/note-container.component';
import { NoteFormListComponent } from './note-form-list/note-form-list.component';
import { AddNewsFormComponent } from './notes/components/add-news-form/add-news-form.component';
import { BoosterComponent } from './notes/components/catalyst/booster/booster.component';
import { CatalystListComponent } from './notes/components/catalyst/components/catalyst-list/catalyst-list.component';
import { CatalystPageComponent } from './notes/components/catalyst/components/catalyst-page/catalyst-page.component';
import { CatalystTotalDisplayComponent } from './notes/components/catalyst/components/catalyst-total-display/catalyst-total-display.component';
import { CatalystComponent } from './notes/components/catalyst/components/catalyst/catalyst.component';
import { ComparisionDisplayComponent } from './notes/components/comparision-display/comparision-display.component';
import { ContentDisplayComponent } from './notes/components/content-display/content-display.component';
import { NotesListPageComponent } from './notes/components/notes-list-page/notes-list-page.component';
import { OpinionDisplayComponent } from './notes/components/opinion-display/opinion-display.component';
import { OpinionItemDisplayComponent } from './notes/components/opinion-item-display/opinion-item-display.component';
import { MePageComponent } from './notes/components/opinion-page/blog-page.component';
import { QuoteDisplayComponent } from './notes/components/quote-display/quote-display.component';
import { AddPersonFormComponent } from './people/components/add-person-form/add-person-form.component';
import { InvestorDisplayComponent } from './people/components/investor-display/investor-display.component';
import { ThumbnailComponent } from './presentation/components/thumbnail/thumbnail.component';
import { PresentationHeaderComponent } from './presentation/presentation-header/presentation-header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SlideDemoComponent } from './presentation/slide/slide-demo/slide-demo.component';
import { SlideFooterComponent } from './presentation/slide/slide-footer/slide-footer.component';
import { SlideComponent } from './presentation/slide/slide/slide.component';
import { RiskCatalystDialogComponent } from './risks/components/risk-catalyst-dialog/risk-catalyst-dialog.component';
import { RiskListComponent } from './risks/components/risk-list/risk-list.component';
import { RiskTotalDisplayComponent } from './risks/components/risk-total-display/risk-total-display.component';
import { RiskComponent } from './risks/components/risk/risk.component';
import { RiskListPageComponent } from './risks/pages/risk-list-page/risk-list-page.component';
import { AppContainerComponent } from './shared/components/app-container/app-container.component';
import { BadgeComponent } from './shared/components/badge/badge.component';
import { CardComponent } from './shared/components/card/card.component';
import { CarousalComponent } from './shared/components/carousal/carousal.component';
import { DateDisplayComponent } from './shared/components/date-display/date-display.component';
import { DemoPageComponent } from './shared/components/demo-page/demo-page.component';
import { DividerComponent } from './shared/components/divider/divider.component';
import { DragDropRankDialogComponent } from './shared/components/drag-drop-rank-dialog/drag-drop-rank-dialog.component';
import { FactTypeDisplayComponent } from './shared/components/fact-type-display/fact-type-display.component';
import { LinksDisplayComponent } from './shared/components/links-display/links-display.component';
import { NoteDialogComponent } from './shared/components/note-dialog/note-dialog.component';
import { NoteComponent } from './shared/components/note/note.component';
import { RegionDisplayComponent } from './shared/components/region-display/region-display.component';
import { SearchComponent } from './shared/components/search/search.component';
import { SentimentDisplayComponent } from './shared/components/sentiment-display/sentiment-display.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { StatsDisplayComponent } from './shared/components/stats-display/stats-display.component';
import { TagsDisplayComponent } from './shared/components/tags-display/tags-display.component';
import { AutofocusDirective } from './shared/directives/auto-focus.directive';
import { IopsPipeModule } from './shared/pipes/iops/iops-pipe.module';
import { SafePipe } from './shared/pipes/safe.pipe';
import { SiUnitPipeModule } from './shared/pipes/si-unit/si-unit-pipe.module';
import { TagDisplayPipe } from './shared/pipes/tag-display.pipe';
import { UndefinedPipeModule } from './shared/pipes/undefined-pipe/undefined-pipe.module';
import { AppMaterialModule } from './shared/styles/app-material.module';
import { BusinessOverviewComponent } from './stock/components/business-overview/business-overview.component';
import { ComparisonDialogComponent } from './stock/components/comparison-dialog/comparison-dialog.component';
import { EarningsReportComponent } from './stock/components/earnings-report/earnings-report.component';
import { FactComponent } from './stock/components/facts/components/fact/fact.component';
import { GrowthDetailsComponent } from './stock/components/growth-details/growth-details.component';
import { GrowthComponent } from './stock/components/growth/growth.component';
import { LinksComponent } from './stock/components/links/links.component';
import { MovementDisplayComponent } from './stock/components/movement-display/movement-display.component';
import { PriceDisplayComponent } from './stock/components/price-display/price-display.component';
import { ProfitabilityDetailsComponent } from './stock/components/profitability-details/profitability-details.component';
import { ProfitabilityComponent } from './stock/components/profitability/profitability.component';
import { RevenueCompositionDisplayComponent } from './stock/components/revenue-composition-display/revenue-composition-display.component';
import { RevenueDisplayComponent } from './stock/components/revenue-display/revenue-display.component';
import { StockBadgeListComponent } from './stock/components/stock-badge-list/stock-badge-list.component';
import { StockImageDisplayComponent } from './stock/components/stock-image-display/stock-image-display.component';
import { StockMetricDisplayComponent } from './stock/components/stock-metric-display/stock-metric-display.component';
import { TickerDisplayComponent } from './stock/components/ticker-display/ticker-display.component';
import { ValuationDetailsComponent } from './stock/components/valuation-details/valuation-details.component';
import { ValuationComponent } from './stock/components/valuation/valuation.component';
import { ForeverOwnStocksPanelComponent } from './stock/forever-own-stocks-panel/forever-own-stocks-panel.component';
import { NewsDisplayComponent } from './stock/molecules/news-display/news-display.component';
import { StockListTableComponent } from './stock/molecules/stock-list-table/stock-list-table.component';
import { StockProductsListComponent } from './stock/molecules/stock-products-list/stock-products-list.component';
import { ThoughtsDisplayComponent } from './stock/molecules/thoughts-display/thoughts-display.component';
import { StockListPageComponent } from './stock/pages/stock-list-page/stock-list-page.component';
import { StockPropertiesPageComponent } from './stock/pages/stock-properties-page/stock-properties-page.component';
import { StockDisplayComponent } from './stock/stock-display/stock-display.component';
import { HighGrowthIndustryComponent } from './trend/high-growth-industry/high-growth-industry.component';
import { TrendComponent } from './trend/trend.component';
import { MockCompareDialogComponent } from './ui/components/mock-compare-dialog/mock-compare-dialog.component';
import { SquareContainerComponent } from './ui/components/square-container/square-container.component';
import { TitleMenuComponent } from './ui/components/title-menu/title-menu.component';
import { TwitterDisplayDialogComponent } from './ui/components/twitter-display-dialog/twitter-display-dialog.component';
import { UiComponentsPageComponent } from './ui/components/ui-components-page/ui-components-page.component';
import { UiAtomsComponent } from './ui/ui-atoms/ui-atoms.component';
import { UiComparisonComponent } from './ui/ui-comparison/ui-comparison.component';
import { UiImagesDisplayComponent } from './ui/ui-images-display/ui-images-display.component';
import { UiListComponent } from './ui/ui-list/ui-list.component';
import { UiMoleculesComponent } from './ui/ui-molecules/ui-molecules.component';
import { UiOrganismComponent } from './ui/ui-organism/ui-organism.component';
import { UiTemplatesComponent } from './ui/ui-templates/ui-templates.component';

// Use this when you want to disable Material ripple animations for all components
const globalRippleConfig: RippleGlobalOptions = { disabled: true };
@NgModule({
  declarations: [
    AppComponent,
    StockPropertiesPageComponent,
    StockListPageComponent,
    ThoughtsDisplayComponent,
    NewsDisplayComponent,
    StockProductsListComponent,
    HighGrowthIndustryComponent,
    StockDisplayComponent,
    TrendComponent,
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
    MarketListComponent,
    MarketDisplayComponent,
    DateDisplayComponent,
    PortfolioListComponent,
    DividerComponent,
    RiskCatalystDialogComponent,
    SliderComponent,
    DemoPageComponent,
    RiskTotalDisplayComponent,
    CatalystTotalDisplayComponent,
    EarningsReportComponent,
    RevenueCompositionDisplayComponent,
    RevenueDisplayComponent,
    SentimentDisplayComponent,
    MovementDisplayComponent,
    ProfitabilityDetailsComponent,
    StatsDisplayComponent,
    ImageDisplayComponent,
    ValuationDetailsComponent,
    TagsDisplayComponent,
    LinksDisplayComponent,
    InstagramNewsDisplayDialogComponent,
    StockImageDisplayComponent,
    TwitterDisplayDialogComponent,
    DailyMediumReportDisplayDialogComponent,
    PriceDisplayComponent,
    StockMetricDisplayComponent,
    UiComponentsPageComponent,
    TagDisplayPipe,
    MePageComponent,
    RegionDisplayComponent,
    OpinionDisplayComponent,
    DragDropRankDialogComponent,
    MockCompareDialogComponent,
    ComparisionDisplayComponent,
    StockBadgeListComponent,
    OpinionItemDisplayComponent,
    IndustryListPageComponent,
    IndustryPropertiesPageComponent,
    MarketPageComponent,
    RegionPropertiesPageComponent,
    AssetListPageComponent,
    AddNewsFormComponent,
    ContentDisplayComponent,
    ListComponent,
    ActionsListPageComponent,
    NotesListPageComponent,
    QuoteDisplayComponent,
    InvestorDisplayComponent,
    SquareContainerComponent,
    AddPersonFormComponent,
    ListPropertiesPageComponent,
    GrowthDetailsComponent,
    UiTemplatesComponent,
    UiAtomsComponent,
    UiMoleculesComponent,
    UiOrganismComponent,
    UiListComponent,
    ListDisplayComponent,
    UiComparisonComponent,
    ComparisonNoteComponent,
    UiImagesDisplayComponent,
    NoteContainerComponent,
    NoteFormListComponent,
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
    ClipboardModule,
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
