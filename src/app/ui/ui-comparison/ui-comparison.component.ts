import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-comparison',
  templateUrl: './ui-comparison.component.html',
  styleUrls: ['./ui-comparison.component.scss'],
})
export class UiComparisonComponent implements OnInit, OnChanges {
  @Input() comparisonNote;
  comparisonData: any[];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.comparisonNote) {
      const rows = this.comparisonNote.content
        ?.split('\n')
        .filter((row) => row.trim());
      this.comparisonData = rows.map((row) =>
        row.split('||').map((col) => col.trim())
      );
    }
  }
}
