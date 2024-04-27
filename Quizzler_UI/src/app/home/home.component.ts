import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loginInfo: any;
  name = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  userProfile = JSON.parse(sessionStorage.getItem('loggedInUser')!).picture;
  email = JSON.parse(sessionStorage.getItem('loggedInUser')!).email;

  constructor(private auth: AuthService, private router: Router) {
    this.loginInfo = auth.getDecodedResponse();
  }
  ngOnInit(): void {}

  OpenQuiz(){
    this.router.navigate(['quizzes']);
  }
}
