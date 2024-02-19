import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionServiceService {
  constructor(private http: HttpClient) {}

  getAllQuestions(): Observable<any> {
    return this.http.get<any>('https://localhost:44302/api/Questions');
  }
}
