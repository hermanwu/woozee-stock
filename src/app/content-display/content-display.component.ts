import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-content-display',
  templateUrl: './content-display.component.html',
  styleUrls: ['./content-display.component.scss'],
})
export class ContentDisplayComponent implements OnInit, OnChanges {
  @Input() content: string;
  lines: string[];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.content) {
      this.lines = this.content.split('\n');
    }
  }

  ngOnInit(): void {}
}
