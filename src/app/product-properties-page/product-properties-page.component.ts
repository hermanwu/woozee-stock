import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { getInteractionsByProductId } from '../mock-data/interactions.mock';
import { getProductByProductId } from '../mock-data/product.mock';

@Component({
  selector: 'app-product-properties-page',
  templateUrl: './product-properties-page.component.html',
  styleUrls: ['./product-properties-page.component.scss'],
})
export class ProductPropertiesPageComponent implements OnInit {
  private productId = 'productId';
  product;
  routeSub: Subscription;
  interactions;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      const productId = params[this.productId].toLowerCase();

      this.product = getProductByProductId(productId);

      this.interactions = getInteractionsByProductId(productId);
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
