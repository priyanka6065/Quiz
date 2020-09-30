import { Question } from './question';

export class Answer {
    AnswerId: number;
    AnsOptions: string;
    IsCorrect: boolean;
    QuestionId: number;
    Question: Question;
}
