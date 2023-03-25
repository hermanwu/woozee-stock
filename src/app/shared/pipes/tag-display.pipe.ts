import { Pipe, PipeTransform } from '@angular/core';
import { StockServices } from 'src/app/stock/services/objective-data.service';

/**
 * Add a sign to string.
 */
@Pipe({
  name: 'tagdisplay',
})
export class TagDisplayPipe implements PipeTransform {
  constructor(private stockService: StockServices) {}

  transform(value: string): string {
    const stock = this.stockService.getStockByTicker(value);
    if (stock) {
      return `${this.capitalizeFirstCharacter(
        stock?.displayName
      )} (${value.toUpperCase()})`;
    } else {
      return this.capitalizeFirstCharacter(value);
    }
  }

  capitalizeFirstCharacter(str) {
    if (str) {
      return str
        .split(' ')
        .map((word) => word?.[0]?.toUpperCase() + word?.slice(1))
        .join(' ');
    }
  }
}
