import { Question } from "../models/assessment/Question/Question";

export interface IQuestionRepo {
  getById(id: string): Promise<Question | null>;
  create(question: Question): Promise<void>;
  update(question: Question): Promise<void>;
  delete(id: string): Promise<void>;
}