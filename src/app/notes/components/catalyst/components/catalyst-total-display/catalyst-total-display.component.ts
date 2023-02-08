import { Component, Input, OnInit } from '@angular/core';
import { UnicodeCharacters } from 'src/app/shared/data/enum/unicode-characters.enum';

@Component({
  selector: 'app-catalyst-total-display',
  templateUrl: './catalyst-total-display.component.html',
  styleUrls: ['./catalyst-total-display.component.scss'],
})
export class CatalystTotalDisplayComponent implements OnInit {
  @Input() catalystUuids: string[];
  readonly multiplySign = UnicodeCharacters.Multiply;

  constructor() {}

  ngOnInit(): void {}
}
