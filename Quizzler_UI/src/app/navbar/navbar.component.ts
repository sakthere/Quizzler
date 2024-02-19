import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showMenu = false;
  showLogin: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
  onSubmit() {
    this.showLogin = false;
    this.router.navigateByUrl('/login');
  }

  onHomeClick() {
    this.showLogin = false;
    this.router.navigateByUrl('');
  }
}
