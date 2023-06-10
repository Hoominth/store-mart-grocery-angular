import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartService } from 'src/app/services/cart.service';

export interface Actions {
  count?: number;
  icon: string;
  path: string;
  title: string;
}

export interface Navigations {
  title: string;
  path: string;
  icon?: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  actions!: Actions[];
  navigations!: Navigations[];
  currentUser?: any;
  searchKeyword!: string;
  resutls: any[] = [];
  isInputFocused: boolean = false;
  cartCount: number = 0;

  constructor(
    private headerService: HeaderService,
    private router: Router,
    private http: HttpClient,
    private cartService: CartService
  ) {}

  clearSearchQuery() {
    this.searchKeyword = '';
    this.resutls = [];
  }

  search() {
    if (this.searchKeyword === '' && this.isInputFocused) {
      this.resutls = [];
      this.clearSearchQuery();
    } else {
      this.http
        .get<any[]>('http://localhost:3000/products?q=' + this.searchKeyword)
        .subscribe((response) => {
          // Xử lý kết quả tìm kiếm
          this.isInputFocused = true;
          this.resutls = response;
        });
    }
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('carts');
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
    this.getActions();
    this.getNavigations();
    const user = localStorage.getItem('user') as string;
    this.currentUser = JSON.parse(user);
    this.getCartCount();
  }

  getCartCount() {
    if (localStorage.getItem('cartItems')) {
      this.cartCount = JSON.parse(
        localStorage.getItem('cartItems') as string
      )?.length;
    }
  }

  getActions() {
    this.headerService.getActions().subscribe((actions) => {
      this.actions = actions;
    });
  }

  getNavigations() {
    this.headerService.getNavigations().subscribe((navigation) => {
      this.navigations = navigation;
    });
  }
}
