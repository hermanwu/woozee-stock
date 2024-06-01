import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../../shared/data/note.interface';

@Component({
  selector: 'app-comparison-note',
  templateUrl: './comparison-note.component.html',
  styleUrls: ['./comparison-note.component.scss'],
})
export class ComparisonNoteComponent implements OnInit {
  @Input() comparisonData: Note;

  constructor() {}

  ngOnInit(): void {}
}
