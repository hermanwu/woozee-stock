import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WoozeeLibModule } from 'woozee-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MistakesComponent } from './ideas/blog/mistakes/mistakes.component';
import { FomoStocksComponent } from './ideas/fomo-stocks/fomo-stocks.component';
import { RiskComponent } from './risks/components/risk/risk.component';
import { RiskListPageComponent } from './risks/pages/risk-list-page/risk-list-page.component';
import { SlideFooterComponent } from './shared/components/slide-footer/slide-footer.component';
import { SlideDemoComponent } from './shared/components/slide/slide-demo/slide-demo.component';
import { SlideComponent } from './shared/components/slide/slide/slide.component';
import { IopsPipeModule } from './shared/pipes/iops/iops-pipe.module';
import { AppMaterialModule } from './shared/styles/app-material.module';
import { ForeverOwnStocksPanelComponent } from './stock/forever-own-stocks-panel/forever-own-stocks-panel.component';
import { FundamentalStatsDisplayComponent } from './stock/molecules/fundamental-stats-display/fundamental-stats-display.component';
import { NewsDisplayComponent } from './stock/molecules/news-display/news-display.component';
import { StockListTableComponent } from './stock/molecules/stock-list-table/stock-list-table.component';
import { StockProductsListComponent } from './stock/molecules/stock-products-list/stock-products-list.component';
import { ThoughtsDisplayComponent } from './stock/molecules/thoughts-display/thoughts-display.component';
import { StockListPageComponent } from './stock/pages/stock-list-page/stock-list-page.component';
import { StockPropertiesPageComponent } from './stock/pages/stock-properties-page/stock-properties-page.component';
import { StockDisplayComponent } from './stock/stock-display/stock-display.component';
import { HighGrowthIndustryComponent } from './trend/high-growth-industry/high-growth-industry.component';
import { TrendIndustriesComponent } from './trend/trend-industries/trend-industries.component';
import { TrendComponent } from './trend/trend.component';

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
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    WoozeeLibModule,
    IopsPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
