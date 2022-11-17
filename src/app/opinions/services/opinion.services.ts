import { Injectable } from '@angular/core';
import { UserServices } from 'src/app/accounts/services/user.services';
import { Stock } from 'src/app/stock/models/stock.model';
import { Opinion } from '../components/opinion-display/opinion.interface';

@Injectable({
  providedIn: 'root',
})
export class OpinionServices {
  opinions: Opinion[] = null;

  constructor(private userServices: UserServices) {
    this.opinions = this.userServices.getOpinions();
  }

  getOpinionsByStock(stock: Stock): Opinion[] {
    return this.opinions.filter(
      (opinion) =>
        opinion?.targets?.filter(
          (tag) => tag.toLowerCase() === stock.ticker.toLowerCase()
        ).length > 0
    );
  }
}
