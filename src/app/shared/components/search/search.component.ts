import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
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
  @Input() stateGroups: StateGroup[];

  searchForm: UntypedFormGroup;
  filteredOptions: Observable<string[]>;
  selectedGroup: string;
  selectedText: string;
  stateGroupOptions: Observable<StateGroup[]>;

  constructor(
    private router: Router,
    private navigationServices: NavigationServices
  ) {}

  ngOnInit(): void {
    this.searchForm = new UntypedFormGroup({
      searchText: new UntypedFormControl(''),
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
      this.navigationServices.navigate(
        group,
        searchItem.id || searchItem.uuid || searchItem.ticker
      );
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

    // Filter items based on ticker match
    const tickerMatches = opt.filter((item) =>
      item?.ticker?.toLowerCase().includes(filterValue)
    );

    // Filter items based on displayName match (excluding ticker matches)
    const displayNameMatches = opt.filter(
      (item) =>
        !tickerMatches.includes(item) &&
        item?.displayName?.toLowerCase().includes(filterValue)
    );

    // Filter items based on name match (excluding ticker and displayName matches)
    const nameMatches = opt.filter(
      (item) =>
        !tickerMatches.includes(item) &&
        !displayNameMatches.includes(item) &&
        item?.name?.toLowerCase().includes(filterValue)
    );

    // Combine the matches in the desired order
    return [...tickerMatches, ...displayNameMatches, ...nameMatches];
  };
}
