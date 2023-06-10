import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import * as bcrypt from 'bcrypt';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  isLoading: boolean = false;
  username!: string;
  email!: string;
  password!: string;
  errorMessage!: string;
  // private saltRounds = 10;
  private baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient, private router: Router) {}
  async register() {
    if (
      this.username === undefined &&
      this.password === undefined &&
      this.email === undefined
    ) {
      this.errorMessage = 'Password, email and username invalid!';
      return;
    }

    const users = await this.http.get<any[]>(this.baseUrl).toPromise();

    const userExist = users?.some(
      (u) => u.username === this.username && u.email === this.email
    );

    if (userExist) {
      this.errorMessage = 'Invalid username or password';
    } else {
      const createdUser = {
        username: this.username,
        email: this.email,
        password: this.password,
        // password: hashedPassword,
      };
      this.http.post(this.baseUrl, createdUser).subscribe((users) => {
        this.isLoading = true;

        this.errorMessage = 'Registration successful.';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1000);
      });
    }
  }
}
