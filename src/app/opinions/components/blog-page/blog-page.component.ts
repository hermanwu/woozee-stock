import { Component, OnInit } from '@angular/core';
import { UserServices } from 'src/app/accounts/services/user.services';
import { Opinion } from '../opinion-display/opinion.interface';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
})
export class BlogPageComponent implements OnInit {
  opinions: Opinion[];

  constructor(private userServices: UserServices) {
    this.opinions = userServices.getOpinions();
  }

  ngOnInit(): void {}
}
