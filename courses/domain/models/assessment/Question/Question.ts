import { ModelId, ItemOrder } from "@l-p/shared/domain/models";
import { QuestionBody } from "./QuestionBody";
import { Entity } from "@l-p/shared/domain/models/entity";

export abstract class Question extends Entity<ModelId> {
  protected constructor(
    id: ModelId,
    protected readonly body: QuestionBody,
    protected readonly order: ItemOrder,
    protected readonly assessmentId: ModelId
  ) {
    super(id);
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
