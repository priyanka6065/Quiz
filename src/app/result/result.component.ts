import { Component, OnInit } from '@angular/core';
import { UserQuizService } from '../services/user-quiz.service';
import { Result } from '../models/result';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  public results: Result[] = [];
  public userId: number;

  constructor(private service: UserQuizService, public router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('userId') == null) {
      this.router.navigate(['/login']);
    }
    this.userId = parseInt(localStorage.getItem('userId'));
    this.getResultsByUserId(this.userId);
  }

  getResultsByUserId(userId: number) {
    this.service.getResultsByUserId(userId).subscribe(data => {
      this.results = data;
      console.log(data);
    })
  }
}
