import { Component, Input, OnInit } from '@angular/core';
import { FactType } from 'src/app/risks/models/fact-type.enum';

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.scss'],
})
export class FactComponent implements OnInit {
  @Input() factType: FactType;

  constructor() {}

  ngOnInit(): void {}
}
