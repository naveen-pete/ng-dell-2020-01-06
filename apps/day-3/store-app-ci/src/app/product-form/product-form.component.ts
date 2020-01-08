import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  newProduct: Product = new Product();
  showMessage = false;
  @Output() productCreated = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.newProduct.id = Date.now();
    this.productCreated.emit(this.newProduct);
    this.newProduct = new Product();
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 3000);
  }

}
