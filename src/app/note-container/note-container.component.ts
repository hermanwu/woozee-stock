import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../shared/data/note.interface';

@Component({
  selector: 'app-note-container',
  templateUrl: './note-container.component.html',
  styleUrls: ['./note-container.component.scss'],
})
export class NoteContainerComponent implements OnInit {
  @Input() note: Note;

  constructor() {}

  ngOnInit(): void {}
}
