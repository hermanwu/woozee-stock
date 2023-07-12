import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserServices } from 'src/app/accounts/services/user.services';
import { v4 as generateUuid } from 'uuid';
import { Note, NoteType } from '../../../shared/data/note.interface';
import { TagServices } from '../../../shared/services/tag.services';
import { News } from '../../../stock/models/news.model';
import { OpinionEnum } from '../../../stock/models/opinion-type.model';

@Component({
  selector: 'app-add-note-form',
  templateUrl: './add-note-form.component.html',
  styleUrls: ['./add-note-form.component.scss'],
})
export class AddNoteFormComponent implements OnInit, OnChanges {
  @Output() newNote = new EventEmitter<Note>();

  newsForm: FormGroup;
  news: News;
  noteType = NoteType;
  ratingEnum = OpinionEnum;
  note;

  constructor(
    private formBuilder: FormBuilder,
    private tagServices: TagServices,
    private userServices: UserServices
  ) {}

  ngOnInit(): void {
    this.note = {
      uuid: generateUuid(),
      noteType: NoteType.Fact,
    };

    this.createForm();
    this.newsForm.patchValue({ uuid: this.note.uuid, noteType: this.noteType });
  }

  ngOnChanges(changes: SimpleChanges): void {}

  createForm() {
    this.newsForm = this.formBuilder.group({
      targets: [],
      title: [],
      content: [],
      tags: [],
      sourceLink: [],
      rating: [],
      uuid: [],
      authorUuid: [],
      creatorUuid: 'hwu1106@gmail.com',
      parentUuid: [],
      emotions: [],
      noteType: [],
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
      noteType: this.newsForm.value.noteType,
      content: this.newsForm.value.content,
      tagUuids: [...tags],
      sourceLink: this.newsForm.value.sourceLink,
      rating: this.newsForm.value.rating,
      uuid: this.newsForm.value.uuid,
      authorUuid: this.newsForm.value.authorUuid,
      targets: this.newsForm.value.targets
        ?.split(',')
        .map((target) => target.trim()),
      createdDate: new Date(),
      emotions: this.newsForm.value.emotions,
      creatorUuid: 'hwu106@gmail.com',
    };

    for (let key in news) {
      if (news[key] === null || news[key] === undefined) {
        delete news[key];
      }
    }

    this.news = news;

    this.newNote.emit(news);
  }

  setNoteType(noteType: NoteType): void {
    console.log(noteType);
    this.newsForm.patchValue({ noteType: noteType });
    console.log(this.newsForm.value);
  }
}
