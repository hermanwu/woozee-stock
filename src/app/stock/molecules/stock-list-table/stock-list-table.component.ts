import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-stock-list-table',
  templateUrl: './stock-list-table.component.html',
  styleUrls: ['./stock-list-table.component.scss'],
})
export class StockListTableComponent
  implements OnInit, OnChanges, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;

  @Input() columnsToDisplay: string[];
  @Input() dataSource: MatTableDataSource<any>;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {}

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
