import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Product {
  actions: {
    likes: number;
    views: number;
  };
  category: number;
  description: string;
  detail: {
    life: number;
    mfg: string;
    sku: string;
    stock: number;
    tags: string[];
    type: string;
  };
  image: string[];
  oldPrice: number;
  popular: string;
  price: number;
  priceOld: null;
  quantity: number;
  rating: number;
  title: string;
}

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css'],
})
export class ShopCartComponent implements OnInit {
  products: Product[] = [];
  total: number = 0;
  isLoading: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getCarts();
    this.productTotal();
  }

  goToCheckOut() {
    this.isLoading = true;
    if (this.products) {
      setTimeout(() => {
        this.router.navigate(['check-out'], {
          state: { products: this.products, total: this.total },
        });
      }, 500);
    }
  }

  clearCarts() {
    localStorage.removeItem('cartItems');
    this.products = [];
  }

  productTotal() {
    const res = this.products.reduce((acc, cur, i) => {
      acc += cur.price * cur.quantity;
      return acc;
    }, 0);

    this.total = res;
  }

  getCarts() {
    this.products = JSON.parse(localStorage.getItem('cartItems') as string);
  }
}
