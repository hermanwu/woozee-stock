import { Component, Input, OnInit } from '@angular/core';
import { NewsDisplay } from './news-display.interface';

@Component({
  selector: 'app-news-display',
  templateUrl: './news-display.component.html',
  styleUrls: ['./news-display.component.scss'],
})
export class NewsDisplayComponent implements OnInit {
  expanded: boolean;
  @Input() news: NewsDisplay;

  constructor() {}

  ngOnInit(): void {}
}
