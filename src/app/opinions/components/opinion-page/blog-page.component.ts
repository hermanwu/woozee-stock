import { Component, OnInit } from '@angular/core';
import { UserServices } from 'src/app/accounts/services/user.services';
import { Opinion } from '../opinion-display/opinion.interface';

@Component({
  selector: 'app-opinion-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
})
export class OpinionPageComponent implements OnInit {
  opinions: Opinion[];
  showAddNotesSection = false;
  myOpinions: Opinion[];

  toAvoid: Opinion[] = [
    {
      title:
        'Avoid sell naked puts. Avoid selling more than one put option on the same stock.',
    },
    {
      title:
        'Avoid bet too much on one stock. Tesla could drop 40% within a month.',
    },
  ];

  toDo: Opinion[] = [
    {
      title: 'Sell covered calls because you will never loss money.',
    },
    {
      title: 'Buy short term out of money call or put to hedge large jump.',
    },
    {
      title: 'Use large in money call to represent a position.',
    },
  ];

  constructor(private userServices: UserServices) {
    this.myOpinions = userServices.getOpinions();
  }

  ngOnInit(): void {}

  openAddNewsDialog() {
    this.showAddNotesSection = true;
    // this.dialogService.open<AddNoteComponent>(AddNoteComponent, {
    //   maxHeight: '90vh', //you can adjust the value as per your view
    //   data: {},
    //   panelClass: 'medium-modal-panel',
    // });
  }
}
