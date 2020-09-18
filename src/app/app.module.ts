import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CategoryService } from './services/category.service';
import { QuestionService } from './services/question.service';
import { AnswerService } from './services/answer.service';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AnswerComponent } from './answer/answer.component';
import { QuestionComponent } from './question/question.component';
import { UserComponent } from './user/user.component';
import { CategoryComponent } from './category/category.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionDetailComponent } from './question/question-detail/question-detail.component';
import { AnswerListComponent } from './answer/answer-list/answer-list.component';
import { AnswerDetailComponent } from './answer/answer-detail/answer-detail.component';

const appRoutes: Routes = [
  { path: '', component: UserComponent },
  { path: 'users', component: UserComponent },
  { path: 'questions', component: QuestionComponent },
  { path: 'answers', component: AnswerComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'categories/category-detail/:id', component: CategoryDetailComponent },
  { path: 'categories/category-detail', component: CategoryDetailComponent },
  { path: 'questions/question-detail/:id', component: QuestionDetailComponent },
  { path: 'questions/question-detail', component: QuestionDetailComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AnswerComponent,
    QuestionComponent,
    UserComponent,
    CategoryComponent,
    SidebarComponent,
    CategoryListComponent,
    CategoryDetailComponent,
    QuestionListComponent,
    QuestionDetailComponent,
    AnswerListComponent,
    AnswerDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    CategoryService,
    QuestionService,
    AnswerService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
