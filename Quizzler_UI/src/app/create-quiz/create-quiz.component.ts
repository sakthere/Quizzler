import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss'],
})
export class CreateQuizComponent implements OnInit {
  quizName: String = '';
  quizCategory: String = '';
  quizDescription: String = '';
  quizImageLink: String = '';
  quizId: Number = -1;
  ngOnInit(): void {

  }

  createQuiz(){
    console.log(
      `${this.quizName} is in ${this.quizCategory} and has a description that goes: ${this.quizDescription} with the link as ${this.quizImageLink}`
    );
  }
}
