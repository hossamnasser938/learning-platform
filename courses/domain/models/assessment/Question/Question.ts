import { ModelId } from "@l-p/shared/domain/models/ModelId";
import { QuestionBody } from "./QuestionBody";

export abstract class Question {
  protected constructor(
    protected readonly id: ModelId,
    protected readonly body: QuestionBody,
    protected readonly assessmentId: ModelId
  ) {
    this.id = id;
    this.body = body;
    this.assessmentId = assessmentId;
  }

  getId(): ModelId {
    return this.id;
  }

  getBody(): QuestionBody {
    return this.body;
  }

  getAssessmentId(): ModelId {
    return this.assessmentId;
  }
}
