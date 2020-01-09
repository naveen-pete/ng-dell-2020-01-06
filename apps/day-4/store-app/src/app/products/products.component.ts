import { Component } from '@angular/core';

import { Product } from '../models/product';
import { LoggerService } from '../services/logger.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  searchText = '';

  products: Product[] = [];

  constructor(
    private loggerService: LoggerService,
    private productsService: ProductsService
  ) {
    this.products = this.productsService.getProducts();
  }

  onProductDeleted(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
  }

  onProductCreated(newProduct: Product) {
    this.loggerService.log('Product added to the array');

    this.products.unshift(newProduct);
  }

}
