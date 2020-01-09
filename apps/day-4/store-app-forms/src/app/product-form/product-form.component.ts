import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @ViewChild('f', { static: false }) form: NgForm;
  showMessage = false;

  product: Product = {
    id: 1,
    name: 'p100',
    description: 'p100 desc',
    price: 20000,
    isAvailable: true
  };

  constructor() { }

  ngOnInit() { }

  onSubmit() {
    console.log('product information submitted.');
    console.log(this.form.value);
    this.form.reset();
  }
}

class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean
}

