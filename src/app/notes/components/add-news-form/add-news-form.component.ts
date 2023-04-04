import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserServices } from 'src/app/accounts/services/user.services';
import { Note, NoteType } from '../../../shared/data/note.interface';
import { TagServices } from '../../../shared/services/tag.services';
import { News } from '../../../stock/models/news.model';
import { Rating } from '../../../stock/models/rating.model';
@Component({
  selector: 'app-add-news-form',
  templateUrl: './add-news-form.component.html',
  styleUrls: ['./add-news-form.component.scss'],
})
export class AddNewsFormComponent implements OnInit, OnChanges {
  @Output() newNote = new EventEmitter<Note>();
  @Input() note: Note;

  newsForm: FormGroup;
  news: News;
  noteType = NoteType;
  ratingEnum = Rating;

  constructor(
    private formBuilder: FormBuilder,
    private tagServices: TagServices,
    private userServices: UserServices
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.newsForm);
    if (changes.note && !this.newsForm) {
      this.createForm();
      this.newsForm.patchValue({ uuid: changes.note.currentValue.uuid });
      console.log(this.newsForm);
    }
  }

  createForm() {
    this.newsForm = this.formBuilder.group({
      targets: [],
      title: [],
      content: [],
      tags: [],
      sourceLink: [],
      rating: [],
      uuid: [],
      noteType: [NoteType.Fact],
      authorUuid: [],
      creatorUuid: 'hwu1106@gmail.com',
    });
    console.log(this.newsForm);
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

    if (news.noteType === NoteType.Opinion) {
      news.creatorUuid = this.userServices.getRandomUser().uuid;
    }

    for (let key in news) {
      if (news[key] === null || news[key] === undefined) {
        delete news[key];
      }
    }

    this.news = news;

    console.log(this.newsForm);

    this.newNote.emit(news);
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
