import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/question';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  public questions: Question[] = [];

  constructor(public service: QuestionService) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions() {
    this.service.getQuestions().subscribe(data => {
      this.questions = data;
      console.log(data);
    })
  }

  onDelete(id : number){
    if (confirm("Are you sure to delete " + name)) {
    this.service.deleteQuestion(id).subscribe( data => {
      this.getQuestions();
    })
  }
  }
}
