import { Component, OnInit } from '@angular/core';
import { QuestionServiceService } from '../../services/question-service.service';

@Component({
  selector: 'app-question-component',
  templateUrl: './question-component.component.html',
  styleUrls: ['./question-component.component.scss'],
})
export class QuestionComponentComponent implements OnInit {
  Questions: any[] | undefined;

  constructor(private questionService: QuestionServiceService) {}

  ngOnInit(): void {
    this.fetchQuestions();
  }

  fetchQuestions(): void {
    this.questionService.getAllQuestions().subscribe((data) => {
      this.Questions = data;
      console.log(data);
    });
  }
}
