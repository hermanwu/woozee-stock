import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { stocksMap } from 'src/app/mock-data/mocks/stock-list.const';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { NavigationServices } from '../../services/navgiation.services';

export interface StateGroup {
  label: string;
  names: string[];
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() enableAutoFocus: boolean;

  searchForm: FormGroup;
  filteredOptions: Observable<string[]>;
  stateGroups: StateGroup[] = [
    {
      label: 'Stock',
      names: Object.values(stocksMap).map(
        (stock: any) =>
          (stock.displayName || stock.displayName || stock.name) +
          ' (' +
          stock.ticker?.toUpperCase() +
          ')'
      ),
    },
    {
      label: 'Industry',
      names: Object.values(IndustryType),
    },
  ];
  selectedGroup: string;
  selectedText: string;

  stateGroupOptions: Observable<StateGroup[]>;

  constructor(
    private router: Router,
    private navigationServices: NavigationServices
  ) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchText: new FormControl(''),
    });

    this.stateGroupOptions = this.searchForm
      .get('searchText')!
      .valueChanges.pipe(
        startWith(''),
        map((value) => this._filterGroup(value || ''))
      );
  }

  search(): void {
    const searchText = this.searchForm.value.searchText;
    this.navigationServices.navigate(this.selectedGroup, searchText);
  }

  onSelectionChange($event, group: string): void {
    if ($event.source.selected) {
      const searchText = $event.source.value;

      this.selectedGroup = group;

      if (this.selectedGroup === 'Stock') {
        const leftIndex = searchText.indexOf('(');
        const rightIndex = searchText.indexOf(')');
        this.selectedText = searchText.slice(leftIndex + 1, rightIndex);
      } else {
        this.selectedText = searchText;
      }

      this.navigationServices.navigate(this.selectedGroup, this.selectedText);
    }
  }

  private _navigate() {}

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map((group) => ({
          label: group.label,
          names: this._filter(group.names, value),
        }))
        .filter((group) => group.names.length > 0);
    }

    return this.stateGroups;
  }

  private _filter = (opt: string[], value: string): string[] => {
    const filterValue = value.toLowerCase();

    return opt.filter((item) => item.toLowerCase().includes(filterValue));
  };
}
