import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { v4 as generateUuid } from 'uuid';
import { Rating } from '../stock/models/rating.model';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {
  @Input() parentUuid: string;
  ratingEnum = Rating;
  noteForm: FormGroup;
  noteFormValue: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.noteForm = this.formBuilder.group({
      targets: [],
      title: [],
      content: [],
      tags: [],
      source: [],
      rating: [],
      parentUuid: [this.parentUuid],
      uuid: [generateUuid()],
    });
  }

  /**
   * Set the rating
   * @param rating
   */
  setRating(rating: Rating): void {
    this.noteForm.patchValue({ rating });
  }

  /**
   * Submit the form
   */
  onSubmit(): void {
    console.log('tyest');
    const opinion = {
      ...this.noteForm.value,
      tags: [...this.noteForm.value.tags?.split(',')],
      targets: this.noteForm.value.targets?.split(','),
      date: new Date(),
    };

    for (let key in opinion) {
      if (opinion[key] === null || opinion[key] === undefined) {
        delete opinion[key];
      }
    }

    this.noteFormValue = opinion;
  }
}
