import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { v4 as generateUuid } from 'uuid';
import { NoteType } from '../../../shared/data/note.interface';
import { TagServices } from '../../../shared/services/tag.services';
import { News } from '../../../stock/models/news.model';
import { Rating } from '../../../stock/models/rating.model';

const tags = {
  亚马逊: 'amzn',
  元: 'meta',
  科技: 'technology',
  互联网: 'internet',
  美联储: 'fed',
};
const tagSet = new Set([...Object.values(tags), ...Object.keys(tags)]);
@Component({
  selector: 'app-add-news-form',
  templateUrl: './add-news-form.component.html',
  styleUrls: ['./add-news-form.component.scss'],
})
export class AddNewsFormComponent implements OnInit {
  @Output() newsUuid = new EventEmitter<string>();

  newsForm: FormGroup;
  news: News;
  noteType = NoteType;
  ratingEnum = Rating;

  constructor(
    private formBuilder: FormBuilder,
    private tagServices: TagServices
  ) {}

  ngOnInit(): void {
    const newsUuid = generateUuid();
    this.newsUuid.emit(newsUuid);

    this.newsForm = this.formBuilder.group({
      targets: [],
      title: [],
      content: [],
      tags: [],
      sourceLink: [],
      rating: [],
      uuid: [newsUuid],
      noteType: [NoteType.Fact],
      authorUuid: [],
    });
  }

  /**
   * Submit the form
   */
  onSubmit(): void {
    let tags = this.newsForm.value.tags
      ? this.newsForm.value.tags.split(',')
      : [];

    const autoTags =
      this.tagServices.getTags(
        this.newsForm.value.content + ' ' + this.newsForm.value.title
      ) || [];

    const news = {
      ...this.newsForm.value,
      tags: [...tags, ...autoTags],

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

  setNote(noteType: NoteType) {
    this.newsForm.patchValue({ noteType });
  }

  /**
   * Set the rating
   * @param rating
   */
  setRating(rating: Rating): void {
    this.newsForm.patchValue({ rating });
  }
}
