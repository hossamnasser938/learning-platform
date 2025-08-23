import { ModelId } from "@l-p/shared/domain/models";
import { Question } from "./Question/Question";
import { AssessmentTitle } from "./AssessmentTitle";
import { AssessmentDescription } from "./AssessmentDescription";

export class Assessment {
  private readonly questions: Question[] = [];

  private constructor(
    private readonly id: ModelId,
    private readonly title: AssessmentTitle,
    private readonly description: AssessmentDescription,
  ) {}

  static create(id: string, title: string, description: string): Assessment {
    return new Assessment(ModelId.create(id), AssessmentTitle.create(title), AssessmentDescription.create(description));
  }

  static newAssessment(id: string, title: string, description: string): Assessment {
    const assessment = new Assessment(ModelId.create(id), AssessmentTitle.create(title), AssessmentDescription.create(description));
    //TODO: raise event
    return assessment;
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
