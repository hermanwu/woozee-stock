import { Component } from '@angular/core';

/**
 * A component that display slides
 */
@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent {
  risk = {};

  slides = [
    {
      text: 'Test test test test Test test test testTest test test testTest test test testTest test test test test test Test test test test Test test test testTest test test testTest test test testTest test test test test test Test test testtest Test test test testTest test test testTest test test testTest test testtest test test',
    },
    {
      text: 'Test test test test Test test test testTest test test testTest test test testTest test test test test test Test test test test Test test test testTest test test testTest test test testTest test test test test test Test test testtest Test test test testTest test test testTest test test testTest test testtest test test',
    },
  ];

  constructor() {}
}
