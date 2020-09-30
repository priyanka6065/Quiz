import { Answer } from './answer';
import { Category } from './category';

export class Question {
    QuestionId: number;
    QueDetail: string;
    Point: number;
    CategoryId: number;
    Category: Category;
    Answers: Answer[] = [];
}
