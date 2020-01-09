import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges, OnInit {
  @Input() text: string;
  today = Date.now();

  constructor(private productsService: ProductsService) {
    console.log('HeaderComponent constructor invoked.')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('HeaderComponent ngOnChanges() invoked. simpleChanges:', changes);
  }

  ngOnInit() {
    this.productsService.productCreated.subscribe(
      newProduct => console.log('HeaderComponent - productCreated event handler invoked, ', newProduct)
    );
  }

}