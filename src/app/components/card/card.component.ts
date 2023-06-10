import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces';
import { CartService } from 'src/app/services/cart.service';

export interface products {}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() data: any[] = [];
  products: any[] = [];
  private host: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) {
    this.storageToCarts();
  }
  ngOnInit(): void {}

  storageToCarts() {
    if (localStorage.getItem('cartItems')) {
      this.products = JSON.parse(localStorage.getItem('cartItems') as string);
      console.log(this.products);
    }
  }

  addToCart(product: any) {
    if (!localStorage.getItem('user')) {
      this.router.navigate(['login']);
    }

    const itemExist = this.products.find((item) => item.id === product.id);

    if (itemExist) {
      itemExist.quantity += 1;
    } else {
      this.products?.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(this.products));
  }
}
