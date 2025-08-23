import { Question } from "./Question/Question";
import { ModelId } from "@l-p/shared/domain/models/ModelId/ModelId";
import { AssessmentTitle } from "./AssessmentTitle";
import { AssessmentDescription } from "./AssessmentDescription";

export class Assessment {
  private constructor(
    private readonly id: ModelId,
    private readonly title: AssessmentTitle,
    private readonly description: AssessmentDescription,
    private readonly questions: Question[]
  ) {}

  static create(id: string, title: string, description: string, questions: Question[]): Assessment {
    return new Assessment(ModelId.create(id), AssessmentTitle.create(title), AssessmentDescription.create(description), questions);
  }

  static newAssessment(id: string, title: string, description: string, questions: Question[]): Assessment {
    const assessment = new Assessment(ModelId.create(id), AssessmentTitle.create(title), AssessmentDescription.create(description), questions);
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
