import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingComponent implements OnInit {
  loginError: boolean = false;
  constructor() {}

  ngOnInit() {
  }
}
