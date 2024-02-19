import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  // async login(): Promise<void> {
  //   try {
  //     await this.authService.login();
  //     this.router.navigate(['/login']);
  //   } catch (error) {
  //     console.error('Login failed:', error);
  //     this.loginError = true;
  //   }
  // }
}
