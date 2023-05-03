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
import { OpinionEnum } from '../../../stock/models/opinion-type.model';
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
  ratingEnum = OpinionEnum;

  constructor(
    private formBuilder: FormBuilder,
    private tagServices: TagServices,
    private userServices: UserServices
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.note && !this.newsForm) {
      this.createForm();
      this.newsForm.patchValue({ uuid: changes.note.currentValue.uuid });
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
      authorUuid: ['hwu1106@gmail.com'],
      creatorUuid: 'hwu1106@gmail.com',
      parentUuid: [],
      emotions: [],
    });
  }

  /**
   * Submit the form
   */
  onSubmit(): void {
    let tags = this.newsForm.value.tags
      ? this.newsForm.value.tags.split(',')
      : [];

    const news = {
      title: this.newsForm.value.title,
      content: this.newsForm.value.content,
      tagUuids: [...tags],
      sourceLink: this.newsForm.value.sourceLink,
      rating: this.newsForm.value.rating,
      uuid: this.newsForm.value.uuid,
      noteType: this.note.noteType,
      authorUuid: this.newsForm.value.authorUuid,
      creatorUuid: this.newsForm.value.creatorUuid,
      targets: this.newsForm.value.targets
        ?.split(',')
        .map((target) => target.trim()),
      createdDate: new Date(),
      emotions: this.newsForm.value.emotions,
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

    this.newNote.emit(news);
  }

  setNote(noteType: NoteType) {
    this.newsForm.patchValue({ noteType });
  }

  /**
   * Set the rating
   * @param rating
   */
  setRating(rating: OpinionEnum): void {
    this.newsForm.patchValue({ emotions: [rating] });
  }
}
