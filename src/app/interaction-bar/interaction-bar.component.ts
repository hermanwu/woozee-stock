import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserInteractions } from 'src/interactions/interaction.services';
import { EmojiUnicode } from '../shared/data/enum/emoji.enum';

@Component({
  selector: 'app-interaction-bar',
  templateUrl: './interaction-bar.component.html',
  styleUrls: ['./interaction-bar.component.scss'],
})
export class InteractionBarComponent implements OnInit {
  @Input() interactions: UserInteractions;
  displayOnly = true;
  editing = false;
  environment = environment;

  emojiUnicode = EmojiUnicode;

  constructor() {}

  ngOnInit(): void {}
}
