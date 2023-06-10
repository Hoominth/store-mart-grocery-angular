import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  products: any[] = [];
  total: any;
  state: any;
  firstName = '';
  lastName = '';
  address = '';
  information = '';
  cityAndTown = '';
  email = '';
  postcode = '';
  phone = '';
  // country = ''
  description = '';
  errorMessage = '';
  isLoading: boolean = false;
  condition: boolean = false;

  constructor(private router: Router, private http: HttpClient) {
    this.state = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    this.products = this.state.products;
    this.total = this.state.total;
  }

  onSubmit() {
    const createdInvoice = {
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      info: this.information,
      city: this.cityAndTown,
      email: this.email,
      postcode: this.postcode,
      phone: this.phone,
      description: this.description,
      total: this.total,
      products: this.products.map((product) => ({
        price: product.price,
        amount: product.price * product.quantity,
        quantity: product.quantity,
        title: product.title,
        sku: product.detail.sku,
      })),
    };

    this.http
      .post(`http://localhost:3000/payments`, createdInvoice)
      .subscribe((payload) => {
        if (payload) {
          this.isLoading = true;
          setTimeout(() => {
            this.router.navigate(['payments'], {
              state: {
                ...payload,
              },
            });
          }, 1000);
        }
      });
  }

  submitForm() {
    if (
      this.firstName === '' &&
      this.lastName === '' &&
      this.address === '' &&
      this.information === '' &&
      this.cityAndTown === '' &&
      this.email === '' &&
      this.postcode === '' &&
      this.phone === '' &&
      this.description === ''
    ) {
      this.errorMessage = 'Invalid';
      this.condition = true;
      setTimeout(() => {
        this.errorMessage = '';
        this.condition = false;
      }, 1000);
    } else {
      this.onSubmit();
    }
  }
}
