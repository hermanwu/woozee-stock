import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from 'src/app/shared/data/note.interface';
import { ImageServices } from '../../../images/services/images.services';

@Component({
  selector: 'app-news-display-dialog',
  templateUrl: './news-display-dialog.component.html',
  styleUrls: ['./news-display-dialog.component.scss'],
})
export class InstagramNewsDisplayDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dialogData: Note,
    private imageServices: ImageServices
  ) {}

  ngOnInit(): void {}
}
