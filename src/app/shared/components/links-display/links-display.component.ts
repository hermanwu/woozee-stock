import { Component, Input, OnInit } from '@angular/core';
import { EmojiUnicode } from '../../data/enum/emoji.enum';

@Component({
  selector: 'app-links-display',
  templateUrl: './links-display.component.html',
  styleUrls: ['./links-display.component.scss'],
})
export class LinksDisplayComponent implements OnInit {
  @Input() links: { name: string; value: string }[];
  @Input() showUrls: boolean;
  readonly emojiLink = EmojiUnicode.link;

  constructor() {}

  ngOnInit(): void {}

  copyLinks() {
    let result = '';

    if (this.links) {
      for (let link of this.links) {
        result += this.emojiLink + ' ';
        result += link.name;
        result += ': ';
        result += link.value;
        result += '\n';
      }
    }

    return result;
  }
}
