import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productName: string = 'Dell Inspiron';
  productPrice: number = 35000;
  productDescription: string = 'A product from Dell for office use';
  productIsAvailable: boolean = true;

  constructor() { }

}
