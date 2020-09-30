import { Component, OnInit } from '@angular/core';
import { Answer } from '../../models/answer';
import { AnswerService } from '../../services/answer.service';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answer-detail',
  templateUrl: './answer-detail.component.html',
  styleUrls: ['./answer-detail.component.css']
})
export class AnswerDetailComponent implements OnInit {
  public answer: Answer = <any>{};
  public question: Question = null;
  public AnswerId: number = 0;
  public QuestionId: number = 0;


  constructor(private questionService: QuestionService, private service: AnswerService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      if(params['id'] != null)
      {
        this.AnswerId = params['id'];
        this.onEdit(this.AnswerId);
      }
      if(params['questionid'] != null)
      {
        this.QuestionId = params['questionid'];
        //this.onEdit(this.AnswerId);
        this.getQuestionById(this.QuestionId);
      }
    })
  }

  
  onEdit(id : number){
    this.service.getAnswerById(id).subscribe(data => {
      this.answer = data;
    })
  }

  getQuestionById(id: number) {
    this.questionService.getQuestionById(id).subscribe(data => {
      this.question = data;
    })
  }

  onCreate() {
    this.answer.QuestionId = this.QuestionId;
    this.service.createAnswer(this.answer).subscribe(data => {
      this.router.navigate(['answers/' + this.QuestionId]);
    })
  }

  onUpdate(id: number) {
    this.service.updateAnswer(id, this.answer).subscribe(data => {
      this.router.navigate(['answers']);
    })
  }

}

