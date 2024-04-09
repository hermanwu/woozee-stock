import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../services/user.services';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss'],
})
export class PortfolioListComponent implements OnInit {
  portfolios = [];

  constructor(userService: UserServices) {}

  ngOnInit(): void {}
}
