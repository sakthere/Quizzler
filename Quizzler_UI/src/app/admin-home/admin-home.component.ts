import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit {
  loginInfo: any;
  name = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  userProfile = JSON.parse(sessionStorage.getItem('loggedInUser')!).picture;
  email = JSON.parse(sessionStorage.getItem('loggedInUser')!).email;

  constructor(private auth: AuthService, private router: Router) {
    this.loginInfo = auth.getDecodedResponse();
  }
  ngOnInit(): void {}

  navigateToCreateQuiz() {
    this.router.navigate(['v2/create-quiz']);
  }
  navigateToEditQuiz() {
    this.router.navigate(['v2/edit-quiz']);
  }
}
