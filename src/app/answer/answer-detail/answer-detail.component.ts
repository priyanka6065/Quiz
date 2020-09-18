import { Component, OnInit } from '@angular/core';
import { Answer } from '../../models/answer';
import { AnswerService } from '../../services/answer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answer-detail',
  templateUrl: './answer-detail.component.html',
  styleUrls: ['./answer-detail.component.css']
})
export class AnswerDetailComponent implements OnInit {
  public answer: Answer = <any>{};
  public AnswerId: number = 0;

  constructor(private service: AnswerService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      if(params['id'] != null)
      {
        this.AnswerId = params['id'];
        this.onEdit(this.AnswerId);
      }
    })
  }

  
  onEdit(id : number){
    this.service.getAnswerById(id).subscribe(data => {
      this.answer = data;
    })
  }

  onCreate() {
    this.service.createAnswer(this.answer).subscribe(data => {
      this.router.navigate(['answers']);
    })
  }

  onUpdate(id: number) {
    this.service.updateAnswer(id, this.answer).subscribe(data => {
      this.router.navigate(['answers']);
    })
  }

}

