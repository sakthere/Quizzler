import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { QuestionServiceService } from 'src/services/question-service.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss'],
})
export class QuizzesComponent implements OnInit {
  public declare Quizzes: any[];
  public declare QuizzesSliced: any[];
  constructor(
    private dataService: DataService,
    private QuestionService: QuestionServiceService
  ) {}
  ngOnInit(): void {
    this.fetchQuizzes();
  }

  fetchQuizzes(): void {
    this.dataService.getAllQuizzes().subscribe((data) => {
      this.Quizzes = data;
      console.log(data);
      this.QuizzesSliced = this.Quizzes.slice(0, 4);
    });
  }
}
