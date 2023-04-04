import { Component, OnInit } from '@angular/core';
import { EventType } from 'src/app/stock/models/news.model';
import { StatsDisplay } from '../../../shared/components/stats-display/stats-display.interface';
import { getUtcDate } from '../../../shared/functions/getUtcDate.function';
import { NotesServices } from '../../services/news.services';

@Component({
  selector: 'app-daily-medium-report-display-dialog',
  templateUrl: './daily-medium-report-display-dialog.component.html',
  styleUrls: ['./daily-medium-report-display-dialog.component.scss'],
})
export class DailyMediumReportDisplayDialogComponent implements OnInit {
  sp500 = [
    { date: getUtcDate(2022, 9, 22), price: 3757.99 },
    { date: getUtcDate(2022, 9, 21), price: 3789.93 },
    { date: getUtcDate(2022, 9, 20), price: 3855.93 },
    { date: getUtcDate(2022, 9, 19), price: 3899.89 },
    { date: getUtcDate(2022, 9, 16), price: 3873.33 },
    { date: getUtcDate(2022, 9, 15), price: 3901.35 },
    { date: getUtcDate(2022, 9, 14), price: 3946.01 },
    { date: getUtcDate(2022, 9, 13), price: 3932.69 },
    { date: getUtcDate(2022, 9, 12), price: 4110.41 },
    { date: getUtcDate(2022, 9, 9), price: 4067.36 },
  ];
  nasdaqPrices = [
    { date: getUtcDate(2022, 9, 22), price: 11066.8 },
    { date: getUtcDate(2022, 9, 21), price: 11220.2 },
    { date: getUtcDate(2022, 9, 20), price: 11425.1 },
    { date: getUtcDate(2022, 9, 19), price: 11535.0 },
    { date: getUtcDate(2022, 9, 16), price: 11448.4 },
    { date: getUtcDate(2022, 9, 15), price: 11552.4 },
    { date: getUtcDate(2022, 9, 14), price: 11719.7 },
    { date: getUtcDate(2022, 9, 13), price: 11633.6 },
    { date: getUtcDate(2022, 9, 12), price: 12266.41 },
    { date: getUtcDate(2022, 9, 9), price: 12112.31 },
  ];
  S;

  nasdaqStats: StatsDisplay = {
    name: 'Nasdaq',
    value: this.nasdaqPrices[0].price,
    previousValue: this.nasdaqPrices[1].price,
  };
  sp500Stats: StatsDisplay = {
    name: 'S&P 500',
    value: this.sp500[0].price,
    previousValue: this.sp500[1].price,
  };

  allNews;
  allTags = [];
  macroNews = [];
  industryNews = [];
  stockNews = [];
  earningsNews = [];
  overviewNews = [];
  investorNews = [];

  constructor(private newsService: NotesServices) {
    this.allNews = this.newsService.getNewsByDate(new Date(2022, 8, 22));
    const tags = [];
    for (let news of this.allNews) {
      if (news?.tags) {
        tags.push(...news.tags);
      }
      if (news.type === EventType.macro) {
        this.macroNews.push(news);
      } else if (news.type === EventType.industry) {
        this.industryNews.push(news);
      } else if (news.type === EventType.stock) {
        this.stockNews.push(news);
      } else if (news.type === EventType.earnings) {
        this.earningsNews.push(news);
      } else if (news.type === EventType.overview) {
        this.overviewNews.push(news);
      } else if (news.type === EventType.investor) {
        this.investorNews.push(news);
      }
    }
    this.allTags = tags;
  }

  ngOnInit(): void {}
}
