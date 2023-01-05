import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { v4 as generateUuid } from 'uuid';
import { News } from '../stock/models/news.model';

@Component({
  selector: 'app-add-news-form',
  templateUrl: './add-news-form.component.html',
  styleUrls: ['./add-news-form.component.scss'],
})
export class AddNewsFormComponent implements OnInit {
  @Output() newsUuid = new EventEmitter<string>();

  newsForm: FormGroup;
  news: News;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const newsUuid = generateUuid();
    this.newsUuid.emit(newsUuid);

    this.newsForm = this.formBuilder.group({
      title: [],
      content: [],
      tags: [],
      sourceLink: [],
      rating: [],
      uuid: [newsUuid],
    });
  }

  /**
   * Submit the form
   */
  onSubmit(): void {
    const news = {
      ...this.newsForm.value,
      tags: this.newsForm.value.tags?.split(','),
      targets: this.newsForm.value.targets
        ?.split(',')
        .map((target) => target.trim()),
      date: new Date(),
    };

    for (let key in news) {
      if (news[key] === null || news[key] === undefined) {
        delete news[key];
      }
    }

    this.news = news;
  }
}
