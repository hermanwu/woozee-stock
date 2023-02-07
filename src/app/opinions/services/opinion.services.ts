import { Injectable } from '@angular/core';
import { UserServices } from 'src/app/accounts/services/user.services';
import { IndustryType } from 'src/app/facts/data/area.enum';
import { Term } from 'src/app/risks/models/risk-level.model';
import { RegionCode } from 'src/app/shared/data/enum/region.enum';
import { Rating } from 'src/app/stock/models/rating.model';
import { Stock } from 'src/app/stock/models/stock.model';
import { Opinion } from '../components/opinion-display/opinion.interface';
import { opinions } from '../data/mock-opinions.data';

@Injectable({
  providedIn: 'root',
})
export class OpinionServices {
  opinions: Opinion[] = null;

  constructor(private userServices: UserServices) {
    this.opinions = this.userServices.getOpinions();
  }

  getAllOpinions() {
    return opinions;
  }

  getOpinionsByStock(stock: Stock): Opinion[] {
    return this.opinions.filter(
      (opinion) =>
        opinion?.targets?.filter(
          (tag) => tag.toLowerCase() === stock.ticker.toLowerCase()
        ).length > 0
    );
  }

  getOpinionsByIndustry(industry: IndustryType): Opinion[] {
    return this.opinions.filter(
      (opinion) =>
        opinion?.targets?.filter(
          (tag) => tag.toLowerCase() === industry.toLowerCase()
        ).length > 0
    );
  }

  getOpinionsByRegionCode(regionCode: RegionCode): Opinion[] {
    return this.opinions.filter(
      (opinion) =>
        opinion?.targets?.filter(
          (tag) => tag.toLowerCase() === regionCode.toLowerCase()
        ).length > 0
    );
  }

  getOpinionScore(opinions: Opinion[]): [number, number] {
    let shortTermScore = 0;
    let longTermScore = 0;

    for (let opinion of opinions) {
      if (opinion.term === Term.long) {
        if (opinion.rating === Rating.Bearish) {
          longTermScore -= 1;
        } else if (opinion.rating === Rating.VeryBearish) {
          longTermScore -= 2;
        } else if (opinion.rating === Rating.Bullish) {
          longTermScore += 1;
        } else if (opinion.rating === Rating.VeryBullish) {
          longTermScore += 2;
        }
      } else {
        if (opinion.rating === Rating.Bearish) {
          shortTermScore -= 1;
        } else if (opinion.rating === Rating.VeryBearish) {
          shortTermScore -= 2;
        } else if (opinion.rating === Rating.Bullish) {
          shortTermScore += 1;
        } else if (opinion.rating === Rating.VeryBullish) {
          shortTermScore += 2;
        }
      }
    }

    return [shortTermScore, longTermScore];
  }
}
