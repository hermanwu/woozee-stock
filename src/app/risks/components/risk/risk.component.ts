import { Component, Input, OnInit } from '@angular/core';
import { Risk } from '../../models/risk.model';

@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.scss'],
})
export class RiskComponent implements OnInit {
  @Input() risk: Risk;

  constructor() {}

  ngOnInit(): void {}
}
