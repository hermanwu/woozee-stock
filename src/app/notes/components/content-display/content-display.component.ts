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

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.content && changes.content.currentValue) {
      this.content = changes.content.currentValue
        .replace(/\n+$/, '')
        .replace(/^\n+/, '');
    }
  }

  ngOnInit(): void {}
}
