import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})

export class QuestionDetailComponent implements OnInit {
  public question: Question = <any>{};
  public QuestionId: number = 0;
  public categories: Array<any> = [];

  constructor(private categoryService: CategoryService, private service: QuestionService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
    this.activatedRouter.params.subscribe(params => {
      if (params['id'] != null)
       {
        this.QuestionId = params['id'];
        this.onEdit(this.QuestionId);
       }
    })
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(data => {
      for (var i = 0; i < data.length; i++) {
        this.categories.push(data[i])
      }
    })
  }

  onEdit(id: number) {
    this.service.getQuestionById(id).subscribe(data => {
      this.question = data;
    })
  }

  onCreate() {
    console.log(this.question);
    this.service.createQuestion(this.question).subscribe(data => {
      this.router.navigate(['questions']);
    })
  }

  onUpdate(id: number) {
    this.service.updateQuestion(id, this.question).subscribe(data => {
      this.router.navigate(['questions']);
    })
  }
  

}