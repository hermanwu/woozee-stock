import { Injectable } from '@angular/core';
import { UserServices } from 'src/app/accounts/services/user.services';
import { Term } from 'src/app/risks/models/risk-level.model';
import { Rating } from 'src/app/stock/models/rating.model';
import { Opinion } from '../components/opinion-display/opinion.interface';

@Injectable({
  providedIn: 'root',
})
export class OpinionServices {
  opinions: Opinion[] = null;

  constructor(private userServices: UserServices) {}

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
