import { ModelId } from "@l-p/shared/domain/models";
import { Question } from "./Question/Question";
import { AssessmentTitle } from "./AssessmentTitle";
import { AssessmentDescription } from "./AssessmentDescription";
import { InvalidExistingQuestionOrderException } from "./Question/exceptions/QuestionException";
import { AggregateRoot } from "@l-p/shared/domain/models/aggregate-root";

export class Assessment extends AggregateRoot<ModelId> {
  private readonly questions: Question[] = [];

  private constructor(
    id: ModelId,
    private readonly title: AssessmentTitle,
    private readonly description: AssessmentDescription,
  ) {
    super(id);
  }

  static create(id: string, title: string, description: string): Assessment {
    return new Assessment(ModelId.create(id), AssessmentTitle.create(title), AssessmentDescription.create(description));
  }

  static newAssessment(id: string, title: string, description: string): Assessment {
    const assessment = new Assessment(ModelId.create(id), AssessmentTitle.create(title), AssessmentDescription.create(description));
    return assessment;
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
    if (this.questions.some(q => q.getOrder().equals(question.getOrder()))) {
      throw new InvalidExistingQuestionOrderException(question.getOrder());
    }

    this.questions.push(question);

    // TODO: add event
  }
}
