import { Injectable } from '@angular/core';
import { Answer } from '../models/answer';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private headers: HttpHeaders;
  private URL: string = "http://localhost:14789/api/answers";

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  getAnswers() {
    return this.http.get<Answer[]>(this.URL);
  }

  createAnswer(answer: Answer) {
    var result = JSON.stringify(answer);
    return this.http.post(this.URL, result, { headers: this.headers });
  }

  updateAnswer(id: number, answer: Answer) {
    var result = JSON.stringify(answer);
    return this.http.put(this.URL + '/' + id, result, { headers: this.headers });
  }

  deleteAnswer(id: number) {
    return this.http.delete(this.URL + '/' + id);
  }

  getAnswerById(id: number) {
    return this.http.get<Answer>(this.URL + '/' + id);
  }

  getAnswersByQuestionId(id: number) {
    return this.http.get<Answer>(this.URL + "/getAnswersByQuestionId" + '/' + id);
  }

}


