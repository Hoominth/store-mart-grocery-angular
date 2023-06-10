import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  carts: any[] = [];
  products = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {}

  getProduct() {
    return this.products.asObservable();
  }

  setProduct(product: any) {
    this.carts.push(...product);
    this.products.next(product);
  }

  getTotalAmount() {
    const total = this.carts.reduce((acc, cur, i) => {
      acc += cur.price;
      return acc;
    }, 0);

    return total;
  }

  addToCart(product: any) {
    this.carts.push(product);
    this.products.next(this.carts);
    console.log(this.carts);
    console.log(this.getProduct());
    this.getTotalAmount();
  }
}
