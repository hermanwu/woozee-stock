import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Note } from '../shared/data/note.interface';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.scss'],
})
export class ListDisplayComponent implements OnInit, OnChanges {
  @Input() list: Note;
  listData: any[];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.list) {
      const rows = this.list.content?.split('\n').filter((row) => row.trim());
      this.listData = rows.map((row) =>
        row.split('||').map((col) => col.trim())
      );
    }
  }
}
