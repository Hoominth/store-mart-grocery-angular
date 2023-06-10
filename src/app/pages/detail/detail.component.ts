import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  mainImage: string = '';
  product: any;
  baseURL: string = 'http://localhost:3000/products/';
  images: string[] = [
    'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-7.jpg',
    'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-8.jpg',
    'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-9.jpg',
    'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-4.jpg',
  ];

  customOptions: OwlOptions = {
    items: 1,
    loop: true,
    touchDrag: false,
    dots: false,
    mouseDrag: true,
    autoWidth: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    nav: true,
  };

  mainCarouselOptions: OwlOptions = {
    items: 4,
    nav: true,
    dots: false,
  };

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe(async (params) => {
      const productId = params['id'];

      this.http.get<any>(`${this.baseURL}${productId}`).subscribe((product) => {
        this.product = product;
      });
    });
  }

  changeMainImage(index: number) {
    const el = document.querySelector('.owl-carousel-o-slide');
    console.log(el);
    if (el?.hasAttribute('ng-reflect-set-thumb-image')) {
      console.log('cc', index);
    }
  }
}
