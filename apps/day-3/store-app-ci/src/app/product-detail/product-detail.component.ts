import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  @Output() productDeleted = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onDelete(productId: number) {
    this.productDeleted.emit(productId);
  }

}
