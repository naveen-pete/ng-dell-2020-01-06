import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Product } from '../models/product';
import { LoggerService } from '../services/logger.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  newProduct: Product = new Product();
  showMessage = false;

  constructor(
    private loggerService: LoggerService,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loggerService.log('Product data submitted');

    this.newProduct.id = Date.now();
    this.productsService.addProduct(this.newProduct);
    this.newProduct = new Product();
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 3000);
  }

}
