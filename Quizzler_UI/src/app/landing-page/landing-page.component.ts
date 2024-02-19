import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingComponent implements OnInit {
  loginError: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {}

  
}