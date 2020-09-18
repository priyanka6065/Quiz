import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private headers: HttpHeaders;
  private URL: string = "http://localhost:14789/api/questions";

  constructor(private http: HttpClient ) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
   }

   getQuestions(){
    return this.http.get<Question[]>(this.URL);
   }

  createQuestion(question: Question) {
    var result = JSON.stringify(question);
    return this.http.post(this.URL, result, { headers: this.headers });
  }

  updateQuestion(id: number, question: Question){
    var result = JSON.stringify(question);
    return this.http.put(this.URL + '/' + id, result, {headers: this.headers});
  }

  deleteQuestion(id: number){
    return this.http.delete(this.URL + '/'+ id);
  }

  getQuestionById(id : number){
    return this.http.get<Question>(this.URL + '/' + id); 
 }
}


