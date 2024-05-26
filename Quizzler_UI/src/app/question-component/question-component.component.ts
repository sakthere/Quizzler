import { Component, Input, OnInit } from '@angular/core';
import { QuestionServiceService } from '../../services/question-service.service';
import { AuthService } from 'src/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/services/data.service';
@Component({
  selector: 'app-question-component',
  templateUrl: './question-component.component.html',
  styleUrls: ['./question-component.component.scss'],
})
export class QuestionComponentComponent implements OnInit {
  @Input() receivedValue: number = 0;
  public declare questionsByQuizId: any[];
  public declare questions: any[];
  public declare answersByQuizId: any[];
  public declare answers: any[];
  public declare answersForQuestion7: any[];
  public currentIndex: number = 0;
  public currentAnswerIndex: number = 0;
  public value: any;
  public score: number = 0;
  public visible: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.receivedValue = params['value'];
    });
    this.getAllQuestionByQuizId(this.receivedValue);
    this.getAllAnswersByQuizId(this.receivedValue);
  }

  getAllQuestionByQuizId(quizId: number) {
    this.dataService.getQuestionsByQuizId(quizId).subscribe((resp) => {
      this.questionsByQuizId = resp;
      this.questions = this.questionsByQuizId.slice(0, 10);
      console.log(this.questions);
      console.log(this.questionsByQuizId);
    });
  }

  getAllAnswersByQuizId(quizId: number) {
    this.dataService.getAnswersByQuizId(quizId).subscribe((resp) => {
      this.answersByQuizId = resp;
      this.answers = this.answersByQuizId.slice(0, 24);
      this.answersForQuestion7 = this.answersByQuizId.slice(73, 77);
      this.answers.push(...this.answersForQuestion7);
      this.answers.push(...this.answersByQuizId.slice(24, 40));
      console.log(this.answersByQuizId);
      console.log(this.answers);
      console.log(this.answersForQuestion7);
    });
  }

  changeItem() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    }
  }

  changeAnswer() {
    if (this.currentAnswerIndex < this.answers.length - 1) {
      this.currentAnswerIndex = this.currentIndex * 4;
    }
  }

  saveScore() {
    if (this.value && this.value.isCorrect === true) {
      this.score++;
    }
    this.value = null;
    console.log(this.score);
  }
  DisplayModal() {
    this.saveScore();
    this.visible = true;
    console.log("Display Modal Clicked");
  }
  goToQuiz(){
    this.router.navigate(['quizzes']);
  }
  
}
