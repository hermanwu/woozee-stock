import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { PricesServices } from './shared/services/prices.services';
import { SearchService } from './shared/services/search.services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showFiller = false;
  constructor(
    private store: AngularFirestore,
    private pricesServices: PricesServices,
    private searchServices: SearchService
  ) {}
}
