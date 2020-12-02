import { Injectable } from '@angular/core';
import { UserQuiz } from '../models/user-quiz';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class UserQuizService {
  private headers: HttpHeaders;
  private URL: string = "http://localhost:14789/api/userquizzes";

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  createUserQuiz(userquizzes: UserQuiz[]) {
    var result = JSON.stringify(userquizzes);
    return this.http.post(this.URL, result, { headers: this.headers });
  }

  getResultsByUserId(id: number) {
     return this.http.get<Result[]>(this.URL + "/GetResultsByUserId" + '/' + id);
   }
}
