import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner, Category, Product } from 'src/app/interfaces';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products!: Product[];
  categories!: Category[];
  banners!: Banner[];
  constructor(private http: HttpClient) {}

  getBanners() {
    this.http
      .get<Banner[]>('/assets/mocks/banners.json')
      .subscribe((banners) => (this.banners = banners));
  }

  getProducts() {
    this.http
      .get<Product[]>('http://localhost:3000/products')
      .subscribe((item) => {
        const products = this.convertDollars(item);
        this.products = products;
      });
  }

  getCategories() {
    this.http
      .get<Category[]>('/assets/mocks/categories.json')
      .subscribe((category) => {
        this.categories = category;
      });
  }

  convertDollars(products: Product[]) {
    const USD = new Intl.NumberFormat('en-US');
    return products.map((product) => {
      const price = Number(USD.format(product.price));
      const priceOld = Number(USD.format(product.priceOld));
      return {
        ...product,
        price,
        priceOld,
      };
    });
  }

  ngOnInit(): void {
    this.getBanners();
    this.getCategories();
    this.getProducts();
  }
}
