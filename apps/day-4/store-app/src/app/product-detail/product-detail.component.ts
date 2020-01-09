import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  @Input() product: Product;
  @Output() productDeleted = new EventEmitter<number>();
  subscription: Subscription;

  constructor(private productsService: ProductsService) {
    console.log('ProductDetailComponent constructor invoked.');
  }

  ngOnInit() {
    this.subscription = this.productsService.productCreated.subscribe(
      newProduct => console.log('ProductDetailComponent - productCreated event handler invoked, ', newProduct)
    );
  }

  onDelete(productId: number) {
    this.productDeleted.emit(productId);
  }

  ngOnDestroy() {
    console.log('ProductDetailComponent ngOnDestroy() invoked.', this.product.name);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
