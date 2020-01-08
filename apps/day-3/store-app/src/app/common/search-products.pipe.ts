import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '../models/product';

@Pipe({
  name: 'searchProducts',
  pure: false
})
export class SearchProductsPipe implements PipeTransform {

  transform(products: Product[], searchText: string, field: string): Product[] {
    let filteredProducts: Product[] = [];

    if (!searchText) {
      return products;
    }

    filteredProducts = products.filter(p => p[field].toLowerCase().includes(searchText.toLowerCase()));

    return filteredProducts;
  }

}
