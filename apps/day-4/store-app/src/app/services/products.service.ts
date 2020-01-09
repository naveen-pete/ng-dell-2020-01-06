import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductsService {
  products: Product[] = [
    {
      id: 1,
      name: 'Dell Inspiron',
      description: 'A product from Dell for office use',
      price: 35000,
      isAvailable: true
    },
    {
      id: 2,
      name: 'Dell Latitude',
      description: 'A product from Dell for home use',
      price: 45000,
      isAvailable: false
    },
    {
      id: 3,
      name: 'Dell XPS',
      description: 'A product from Dell for gaming use',
      price: 80000,
      isAvailable: true
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product) {
    this.products.unshift(product);
  }

}