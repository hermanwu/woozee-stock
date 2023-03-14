import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-list',
  templateUrl: './ui-list.component.html',
  styleUrls: ['./ui-list.component.scss'],
})
export class UiListComponent implements OnInit, OnChanges {
  @Input() data: any[];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {}
}
