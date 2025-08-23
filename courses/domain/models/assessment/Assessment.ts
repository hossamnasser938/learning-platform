import { Question } from "./Question/Question";
import { ModelId } from "@l-p/shared/domain/models/ModelId";

export abstract class Assessment {
  private id: ModelId;
  private title: string;
  private description: string;
  private questions: Question[];

  public constructor(
    id: ModelId,
    title: string,
    description: string,
    questions: Question[]
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.questions = questions;
  }

  getId(): ModelId {
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
