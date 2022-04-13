import { Injectable } from '@angular/core';
import { risks } from '../data/global-risk.const';
import { Risk } from '../models/risk.model';

export class Tag {}

@Injectable({
  providedIn: 'root',
})
export class RisksDataService {
  risks: Risk[];
  tagRisksMap = new Map<string, Risk[]>();
  tagMap = new Map<string, Tag>();

  constructor() {
    this.risks = risks;

    // Sort all risks by their updated time.
    this.risks.sort(
      (a, b) => b.updatedTime.getTime() - a.updatedTime.getTime()
    );

    for (let risk of this.risks) {
      if (!risk.tags) {
        risk.tags = ['other'];
      }

      for (let tag of risk.tags) {
        if (this.tagRisksMap.has(tag) === false) {
          this.tagRisksMap.set(tag, []);
        }

        this.tagRisksMap.get(tag).push(risk);
      }
    }
  }
}
