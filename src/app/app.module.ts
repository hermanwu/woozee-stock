import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WoozeeLibModule } from 'woozee-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MistakesComponent } from './blog/mistakes/mistakes.component';
import { FomoStocksComponent } from './fomo-stocks/fomo-stocks.component';
import { ForeverOwnStocksPanelComponent } from './forever-own-stocks-panel/forever-own-stocks-panel.component';
import { HighGrowthIndustryComponent } from './high-growth-industry/high-growth-industry.component';
import { AppMaterialModule } from './shared/styles/app-material.module';
import { StockDisplayComponent } from './stock-display/stock-display.component';
import { FundamentalStatsDisplayComponent } from './stock/molecules/fundamental-stats-display/fundamental-stats-display.component';
import { NewsDisplayComponent } from './stock/molecules/news-display/news-display.component';
import { StockListTableComponent } from './stock/molecules/stock-list-table/stock-list-table.component';
import { StockProductsListComponent } from './stock/molecules/stock-products-list/stock-products-list.component';
import { ThoughtsDisplayComponent } from './stock/molecules/thoughts-display/thoughts-display.component';
import { StockListPageComponent } from './stock/pages/stock-list-page/stock-list-page.component';
import { StockPropertiesPageComponent } from './stock/pages/stock-properties-page/stock-properties-page.component';
import { TrendIndustriesComponent } from './trend-industries/trend-industries.component';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    WoozeeLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
