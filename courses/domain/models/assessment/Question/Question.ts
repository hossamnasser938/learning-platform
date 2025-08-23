import { ModelId } from "@l-p/shared/domain/models/ModelId";

export abstract class Question {
  private id: ModelId;
  private body: string;
  private assessmentId: ModelId;

  constructor(id: string, body: string, assessmentId: string) {
    this.id = ModelId.create(id);
    this.body = body;
    this.assessmentId = ModelId.create(assessmentId);
  }

  getId(): ModelId {
    return this.id;
  }

  getBody(): string {
    return this.body;
  }

  getAssessmentId(): ModelId {
    return this.assessmentId;
  }
}
