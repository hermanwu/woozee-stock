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
import { OpinionEnum } from '../../../stock/models/opinion-type.model';

@Component({
  selector: 'app-add-note-form',
  templateUrl: './add-note-form.component.html',
  styleUrls: ['./add-note-form.component.scss'],
})
export class AddNoteFormComponent implements OnInit, OnChanges {
  @Output() newNote = new EventEmitter<Note>();

  noteForm: FormGroup;
  note: Note;
  noteType = NoteType;
  ratingEnum = OpinionEnum;

  constructor(
    private formBuilder: FormBuilder,
    private tagServices: TagServices,
    private userServices: UserServices
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {}

  createForm() {
    this.noteForm = this.formBuilder.group({
      targets: [],
      title: [],
      content: [],
      tags: [],
      sourceLink: [],
      rating: [],
      uuid: [generateUuid()],
      authorUuid: [],
      creatorUuid: 'hwu1106@gmail.com',
      parentUuid: [],
      emotions: [],
      noteType: [NoteType.Fact],
    });
  }

  /**
   * Submit the form
   */
  onSubmit(): void {
    let tags = this.noteForm.value.tags
      ? this.noteForm.value.tags.split(',')
      : [];

    const note = {
      title: this.noteForm.value.title,
      noteType: this.noteForm.value.noteType,
      content: this.noteForm.value.content,
      tagUuids: [...tags],
      sourceLink: this.noteForm.value.sourceLink,
      rating: this.noteForm.value.rating,
      uuid: this.noteForm.value.uuid,
      authorUuid: this.noteForm.value.authorUuid,
      targets: this.noteForm.value.targets
        ?.split(',')
        .map((target) => target.trim()),
      createdDate: new Date(),
      emotions: this.noteForm.value.emotions,
      creatorUuid: 'hwu106@gmail.com',
    };

    for (let key in note) {
      if (note[key] === null || note[key] === undefined) {
        delete note[key];
      }
    }

    this.note = note;

    this.newNote.emit(note);
  }

  setNoteType(noteType: NoteType): void {
    this.noteForm.patchValue({ noteType: noteType });
  }
}
