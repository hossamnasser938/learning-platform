import { Question } from "./Question/Question";

export abstract class Assessment {
  private id: string;
  private title: string;
  private description: string;
  private questions: Question[];

  public constructor(
    id: string,
    title: string,
    description: string,
    questions: Question[]
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.questions = questions;
  }

  getId(): string {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
  }

  getQuestions(): Question[] {
    return this.questions;
  }

  addQuestion(question: Question): void {
    this.questions.push(question);
  }
}
