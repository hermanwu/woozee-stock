import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss'],
})
export class ThumbnailComponent implements OnInit {
  titles = [
    {
      createdDate: new Date(),
      firstLine: '亚马逊',
      secondLine: '财报里的风险',
      thirdLine: '继续观望? 还是加仓？',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
