import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { LoggerService } from '../services/logger.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  searchText = '';

  products: Product[] = [];

  constructor(
    private loggerService: LoggerService,
    private productsService: ProductsService
  ) {
    console.log('ProductComponent constructor invoked.');
  }

  ngOnInit() {
    console.log('ProductComponent ngOnInit() invoked.');
    this.products = this.productsService.getProducts();
  }

  onProductDeleted(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
  }

}
