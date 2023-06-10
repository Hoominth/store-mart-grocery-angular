import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

interface Login {
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username!: string;
  email!: string;
  password!: string;
  errorMessage!: string;
  isLoading: boolean = false;
  private baseUrl = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {}
  login() {
    this.http.get<any[]>(this.baseUrl).subscribe((users) => {
      if (
        this.username === undefined &&
        this.password === undefined &&
        this.email === undefined
      ) {
        this.errorMessage = 'Password, email and username invalid!';
        return;
      }
      const user = users.find(
        (u) =>
          u.username === this.username &&
          u.password === this.password &&
          u.email === this.email
      );
      if (user) {
        this.isLoading = true;
        this.userService.setCurrentUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        this.errorMessage = 'Login success';
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1000);
        return { success: true, message: 'Login successful', user };
      } else {
        this.errorMessage = 'Invalid username or password.';
        return { success: false, message: 'Invalid username or password' };
      }
    });
  }
}
