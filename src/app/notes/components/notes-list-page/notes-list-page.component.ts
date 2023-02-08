import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServices } from '../../../accounts/services/user.services';
import { Opinion } from '../opinion-display/opinion.interface';

@Component({
  selector: 'app-notes-list-page',
  templateUrl: './notes-list-page.component.html',
  styleUrls: ['./notes-list-page.component.scss'],
})
export class NotesListPageComponent implements OnInit {
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

  constructor(private userServices: UserServices, private router: Router) {
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
