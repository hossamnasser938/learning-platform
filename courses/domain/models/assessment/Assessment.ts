import { Question } from "./Question/Question";
import { ModelId } from "@l-p/shared/domain/models/ModelId";
import { AssessmentTitle } from "./AssessmentTitle";
import { AssessmentDescription } from "./AssessmentDescription";

export abstract class Assessment {
  private id: ModelId;
  private title: AssessmentTitle;
  private description: AssessmentDescription;
  private questions: Question[];

  public constructor(
    id: ModelId,
    title: string,
    description: string,
    questions: Question[]
  ) {
    this.id = id;
    this.title = AssessmentTitle.create(title);
    this.description = AssessmentDescription.create(description);
    this.questions = questions;
  }

  getId(): ModelId {
    return this.id;
  }

  getTitle(): AssessmentTitle {
    return this.title;
  }

  getDescription(): AssessmentDescription {
    return this.description;
  }

  getQuestions(): Question[] {
    return this.questions;
  }

  addQuestion(question: Question): void {
    this.questions.push(question);
  }
}
