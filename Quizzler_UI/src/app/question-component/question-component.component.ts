import { Component, OnInit } from '@angular/core';
import { QuestionServiceService } from '../../services/question-service.service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-question-component',
  templateUrl: './question-component.component.html',
  styleUrls: ['./question-component.component.scss'],
})
export class QuestionComponentComponent implements OnInit {
  Questions: any[] | undefined;

  constructor(
    private questionService: QuestionServiceService,
    private authService: AuthService
  ) {}

  name = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  userProfile = JSON.parse(sessionStorage.getItem('loggedInUser')!).picture;
  email = JSON.parse(sessionStorage.getItem('loggedInUser')!).email;
  ngOnInit(): void {
    this.fetchQuestions();
  }

  signOut() {
    sessionStorage.removeItem('loggedInUser');
    this.authService.signOut();
  }

  fetchQuestions(): void {
    this.questionService.getAllQuestions().subscribe((data) => {
      this.Questions = data;
      console.log(data);
    });
  }
}
