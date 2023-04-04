import { Component, OnInit } from '@angular/core';
import { v4 as generateUuid } from 'uuid';

@Component({
  selector: 'app-note-form-list',
  templateUrl: './note-form-list.component.html',
  styleUrls: ['./note-form-list.component.scss'],
})
export class NoteFormListComponent implements OnInit {
  notes = [];
  constructor() {}

  ngOnInit(): void {}

  addNewNote() {
    this.notes.unshift({
      uuid: generateUuid(),
    });
  }

  update(note) {
    const index = this.notes.findIndex((n) => n.uuid === note.uuid);
    this.notes[index] = note;
  }

  /**
   * Track objects by thier unique identifiers to prevent the page from being
   * repainted when the data refreshes
   *
   * @param index The array index of the item
   * @param item The object that is being tracked
   */
  trackByUuid(index: number, item: { uuid: string }): string {
    return item.uuid;
  }
}
