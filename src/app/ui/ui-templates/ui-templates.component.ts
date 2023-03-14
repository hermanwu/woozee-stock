import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/stock/models/news.model';

@Component({
  selector: 'app-ui-templates',
  templateUrl: './ui-templates.component.html',
  styleUrls: ['./ui-templates.component.scss'],
})
export class UiTemplatesComponent implements OnInit {
  mockNews: News = {
    title: 'this is a mock title',
    content:
      'this is a mock news\n new line\n new line\nthis is a mock news\n new line\n new line\nthis is a mock news\n new line\n new line\nthis is a mock news\n new line\n new line\n',
    tags: ['aapl'],
    date: new Date(),
  };

  constructor() {}

  ngOnInit(): void {}
}
