import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { tradable } from 'src/app/mock-data/mocks/tradables.mock';
import { organizations } from 'src/app/mock-data/organization.mock';
import { mockProducts } from 'src/app/mock-data/product.mock';
import { NavigationServices } from '../../services/navgiation.services';

export interface StateGroup {
  label: string;
  items?: any[];
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
      label: 'Stocks and ETFs',
      items: tradable,
    },
    {
      label: 'Organization',
      items: organizations,
    },
    {
      label: 'Product',
      items: mockProducts,
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
    const searchItem = this.searchForm.value;
    this.navigationServices.navigate(this.selectedGroup, searchItem.searchText);
  }

  onSelectionChange($event, group: string): void {
    if ($event.source.selected) {
      const searchItem = $event.source.value;
      this.selectedGroup = group;
      this.navigationServices.navigate(group, searchItem.id || searchItem.uuid);
      this.searchForm.reset();
    }
  }

  private _navigate() {}

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map((group) => ({
          label: group.label,
          items: this._filter(group.items, value),
        }))
        .filter((group) => group.items.length > 0);
    }

    return this.stateGroups;
  }

  private _filter = (opt: any[], value: string): string[] => {
    let filterValue = value;

    if (typeof filterValue === 'string') {
      filterValue = filterValue.toLowerCase();
    }

    return opt.filter(
      (item) =>
        item?.displayName?.toLowerCase().includes(filterValue) ||
        item?.name?.toLowerCase().includes(filterValue) ||
        item?.ticker?.toLowerCase().includes(filterValue)
    );
  };
}
