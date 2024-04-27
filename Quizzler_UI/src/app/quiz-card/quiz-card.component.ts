import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss'],
})
export class QuizCardComponent {
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() quizId: number = 0;

  constructor(private router: Router) {}

  moveToQuiz(quizId: number) {
    this.router.navigate(['quizz-screen', quizId]);
  }
}
