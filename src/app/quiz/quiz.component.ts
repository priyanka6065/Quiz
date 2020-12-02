import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Answer } from '../models/answer';
import { Question } from '../models/question';
import { UserQuizService } from '../services/user-quiz.service';
import { QuestionService } from '../services/question.service';
import { QuizAnswers } from '../models/quiz-answers';
import { UserQuiz } from '../models/user-quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  public questions: Question[] = [];
  public quizAnswers: QuizAnswers[] = [];
  public answers: Answer[] = [];
  public categoryId: number = 0;
  public no: number = 0;
  public currentQuestion: QuizAnswers = <QuizAnswers>{};
  public selectedAnswerId: string = '0';
  public selectedQuestionId: number = 0;

  public userQuizzes: UserQuiz[] = [];

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService,
    private userquizService: UserQuizService
  ) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      if (params['id'] != null) {
        this.categoryId = params['id'];
        this.getQuestionsByCategoryId(this.categoryId);
        this.getNextData();
      }
    });
  }

  getQuestionsByCategoryId(id: number) {
    this.questionService.getQuestionsByCategoryId(id).subscribe((data) => {
      this.questions = data;
      this.quizAnswers = data as QuizAnswers[];
      this.quizAnswers.forEach((question) => {
        question.selectedAnswer = 0;
      });
      //console.log(this.quizAnswers);
      //localStorage.setItem('questions-list', JSON.stringify(this.questions));
      localStorage.setItem('questions-list', JSON.stringify(this.quizAnswers));
    });
  }

  onItemChange(ansId, queId) {
    this.selectedAnswerId = ansId;
    this.selectedQuestionId = queId;
  }

  getNextData() {
    this.no = this.no + 1;
    this.quizAnswers = JSON.parse(localStorage.getItem('questions-list'));
    this.currentQuestion = this.quizAnswers[this.no - 1];
    if (this.quizAnswers[this.no - 1].selectedAnswer != 0) {
      this.selectedAnswerId = this.quizAnswers[this.no - 1].selectedAnswer.toString();
    }
    this.answers = this.currentQuestion.Answers;
  }

  getPreviousData() {
    this.no = this.no - 1;
    this.quizAnswers = JSON.parse(localStorage.getItem('questions-list'));
    this.currentQuestion = this.quizAnswers[this.no - 1];
    if (this.quizAnswers[this.no - 1].selectedAnswer != 0) {
      this.selectedAnswerId = this.quizAnswers[this.no - 1].selectedAnswer.toString();
    }
    this.answers = this.currentQuestion.Answers;
  }

  onNext() {
    this.quizAnswers[this.no - 1].selectedAnswer = Number(this.selectedAnswerId);
    this.selectedAnswerId = '0';
    localStorage.setItem('questions-list', JSON.stringify(this.quizAnswers));
    this.getNextData();
    console.log(this.quizAnswers);
  }

  onPrevious() {
    this.quizAnswers[this.no - 1].selectedAnswer = Number(this.selectedAnswerId);
    this.selectedAnswerId = '0';
    localStorage.setItem('questions-list', JSON.stringify(this.quizAnswers));
    this.getPreviousData();
    console.log(this.quizAnswers);
  }

  onSubmit() {
    this.quizAnswers[this.no - 1].selectedAnswer = Number(this.selectedAnswerId);
    this.selectedAnswerId = '0';
    localStorage.setItem('questions-list', JSON.stringify(this.quizAnswers));
    console.log(this.quizAnswers);

    console.log('-------------------');
    for (let i = 0; i < this.quizAnswers.length; i++) {

      this.userQuizzes[i] = {
        Id: 0,
        QuizId: 7,
        UserId: 10,
        QuestionId: this.quizAnswers[i].QuestionId,
        AnswerId: this.quizAnswers[i].selectedAnswer
      }
      console.log(this.quizAnswers[i]);
    }

    this.userquizService.createUserQuiz(this.userQuizzes).subscribe(data => {
      this.router.navigate(['result']);
    })

    console.log(this.userQuizzes);
  }
}
