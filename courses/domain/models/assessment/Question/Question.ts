import { ModelId, ItemOrder } from "@l-p/shared/domain/models";
import { QuestionBody } from "./QuestionBody";

export abstract class Question {
  protected constructor(
    protected readonly id: ModelId,
    protected readonly body: QuestionBody,
    protected readonly order: ItemOrder,
    protected readonly assessmentId: ModelId
  ) {}

  getId(): ModelId {
    return this.id;
  }

  getBody(): QuestionBody {
    return this.body;
  }

  getOrder(): ItemOrder {
    return this.order;
  }

  getAssessmentId(): ModelId {
    return this.assessmentId;
  }
}
