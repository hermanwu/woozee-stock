import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Market } from '../data/market.enum';

@Injectable({
  providedIn: 'root',
})
export class MarketsService {
  showTools = false;
  markets: Market[];
  rankingSub: Subscription;

  constructor() {}
}
