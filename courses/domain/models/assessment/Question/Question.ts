import { ModelId } from "@l-p/shared/domain/models/ModelId";
import { QuestionBody } from "./QuestionBody";

export abstract class Question {
  private id: ModelId;
  private body: QuestionBody;
  private assessmentId: ModelId;

  constructor(id: string, body: string, assessmentId: string) {
    this.id = ModelId.create(id);
    this.body = QuestionBody.create(body);
    this.assessmentId = ModelId.create(assessmentId);
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
