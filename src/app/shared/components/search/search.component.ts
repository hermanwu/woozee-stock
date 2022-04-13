import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchText: new FormControl(),
    });
  }

  search(): void {
    const searchText = this.searchForm.value.searchText;

    this.router.navigate([`/woozee/stocks/${searchText}`]);
  }
}
