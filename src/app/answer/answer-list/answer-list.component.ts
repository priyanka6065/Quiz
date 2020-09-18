import { Component, OnInit } from '@angular/core';
import { AnswerService } from '../../services/answer.service';
import { Answer } from '../../models/answer';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css']
})
export class AnswerListComponent implements OnInit {
  public answers: Answer[] = [];

  constructor(private service: AnswerService) { }

  ngOnInit(): void {
    this.getAnswers();
  }

  getAnswers(){
    this.service.getAnswers().subscribe(data => {
      this.answers = data;
      console.log(data);
    })
  }

  onDelete(id : number){
    this.service.deleteAnswer(id).subscribe( data => {
      this.getAnswers();
    })
  }


}
