import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/quiz';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  public QuestionsUrl: string = 'https://localhost:44302/api/Questions/quizID/';
  constructor(private http: HttpClient) {}

  getAllQuestions(): Observable<any> {
    return this.http.get<any>('https://localhost:44302/api/Questions');
  }
  getAllQuizzes(): Observable<any> {
    return this.http.get<any>('https://localhost:44302/api/Quizs');
  }
  getQuestionsByQuizId(quizID: number): Observable<any> {
    return this.http.get<any>(
      `https://localhost:44302/api/Questions/quizID/${quizID}`
    );
  }

  getAnswersByQuizId(quizID: number): Observable<any> {
    return this.http.get<any>(
      `https://localhost:44302/api/Answers/quizID/${quizID}`
    );
  }

  postQuiz(quiz: Quiz){
    
  };
}
