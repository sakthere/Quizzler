import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showMenu = false;
  showLogin: boolean = true;
  showLogout: boolean = false;

  constructor(
    private router: Router,
    private authenticationService: AuthService
  ) {}

  ngOnInit(): void {
    this.authenticationService.isUserLoggedIn.subscribe((x) => {
      this.showLogin = !x;
      this.showLogout = x;
    });
  }
  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
  onSubmit() {
    this.showLogin = false;
    this.router.navigateByUrl('/login');
  }

  signOut() {
    sessionStorage.removeItem('loggedInUser');
    this.authenticationService.signOut();
    this.showLogout = false;
    this.showLogin = true;
  }

  onHomeClick() {
    this.router.navigateByUrl('');
  }
}
