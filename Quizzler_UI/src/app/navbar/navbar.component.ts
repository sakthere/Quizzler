import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showMenu = false;
  showLogin: boolean = true;
  showLogout: boolean = false;
  loginInfo: any;
  name: string = 'User';
  picture: string = '';
  email: string = '';

   constructor(
    private router: Router,
    private authenticationService: AuthService
  ) {
    }

  ngOnInit(): void {
    initFlowbite();
    this.authenticationService.isUserLoggedIn.subscribe((x) => {
      this.showLogin = !x;
      this.showLogout = x;
      this.loginInfo = this.authenticationService.getDecodedResponse();
      this.name = this.loginInfo.name;
      this.picture = this.loginInfo.picture;
      this.email = this.loginInfo.email;
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
