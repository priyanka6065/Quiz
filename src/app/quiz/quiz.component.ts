import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Answer } from '../models/answer';
import { Question } from '../models/question';
import { QuestionService } from '../services/question.service';
import { UserQuizzes } from '../models/user-quizzes';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  public questions: Question[] = [];
  public userQuizzes: UserQuizzes[] = [];
  public answers: Answer[] = [];
  public categoryId: number = 0;
  public no: number = 0;
  public currentQuestion: Question = <Question>{};

  constructor(private activatedRouter: ActivatedRoute, private router: Router, private questionService: QuestionService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      if (params['id'] != null) {
        this.categoryId = params['id'];
        this.getQuestionsByCategoryId(this.categoryId);
        this.onNext();
      }
    })
  }


  getQuestionsByCategoryId(id: number) {
    this.questionService.getQuestionsByCategoryId(id).subscribe(data => {
      this.questions = data;
      console.log(data);
      localStorage.setItem('questions-list', JSON.stringify(this.questions));
    })
  }

  onNext() {
    this.no = this.no + 1;
    this.questions = JSON.parse(localStorage.getItem('questions-list'));
    this.currentQuestion = this.questions[this.no - 1];
    this.answers = this.currentQuestion.Answers;
    localStorage.setItem('questions-list', JSON.stringify(this.questions));
    this.userQuizzes[0].QuestionId = this.currentQuestion.QuestionId;    
  }

  onPrevious() {
    this.no = this.no - 1;
    this.questions = JSON.parse(localStorage.getItem('questions-list'));
    this.currentQuestion = this.questions[this.no - 1];
    this.answers = this.currentQuestion.Answers;
  }
}
