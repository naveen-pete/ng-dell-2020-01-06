import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Product } from '../models/product';

@Injectable()
export class ProductsService {
  private apiUrl = 'http://localhost:3000/products';
  private products: Product[];

  constructor(private http: HttpClient) {
    this.products = [];
  }

  getProducts() {
    const authToken = 'abc123';
    const headers = new HttpHeaders({ 'x-auth-token': authToken });
    return this.http.get<Product[]>(this.apiUrl, { headers: headers });
  }

  getProduct(id: number) {
    // return this.http.get<Product>(this.apiUrl + '/' + id);
    return this.http.get<Product>(`${this.apiUrl}/${id}`);

  }

  addProduct(product: Product) {
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(id: number, productInfo: Product) {
    // const product = this.getProduct(id);

    // if (product) {
    //   product.name = productInfo.name;
    //   product.description = productInfo.description;
    //   product.isAvailable = productInfo.isAvailable;
    //   product.price = productInfo.price;
    // }
  }

  deleteProduct(id: number) {
    const index = this.products.findIndex(product => product.id === id);

    if (index >= 0) {
      this.products.splice(index, 1);
    }
  }
}
