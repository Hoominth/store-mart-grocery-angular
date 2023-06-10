import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
})
export class PaymentsComponent implements OnInit {
  payments: any;
  state: any;
  constructor(private router: Router, private toastr: ToastrService) {
    this.state = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    this.payments = this.state;
    if (this.payments) {
      localStorage.removeItem('cartItems');
      this.showSuccess();
    }
  }

  showSuccess() {
    this.toastr.success('Thank you for your order. 😊', 'Payment Success!');
  }
}
