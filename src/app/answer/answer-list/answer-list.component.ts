import { Component, OnInit } from '@angular/core';
import { AnswerService } from '../../services/answer.service';
import { QuestionService } from '../../services/question.service';
import { Answer } from '../../models/answer';
import { Router, ActivatedRoute } from '@angular/router'
import { Question } from '../../models/question';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css']
})
export class AnswerListComponent implements OnInit {
  public answers: Answer[] = [];
  public question: Question = null;
  public QuestionId: number = 0;

  constructor(private questionService: QuestionService, private service: AnswerService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      if (params['id'] != null) {
        this.QuestionId = params['id'];
        this.getQuestionById(this.QuestionId);
        this.getAnswersByQuestionId(this.QuestionId);
      }
    })
  }

  getQuestionById(id: number) {
    this.questionService.getQuestionById(id).subscribe(data => {
      this.question = data;
    })
  }

  getAnswersByQuestionId(id: number) {
    this.service.getAnswersByQuestionId(id).subscribe(data => {
      this.answers = (data as unknown as Answer[]);
    })
  }

  onDelete(id: number) {
    if (confirm("Are you sure to delete " + name)) {
      this.service.deleteAnswer(id).subscribe(data => {
        this.getAnswersByQuestionId(this.QuestionId);
      })
    }
  }
}
