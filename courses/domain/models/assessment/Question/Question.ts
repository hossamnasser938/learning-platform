export abstract class Question {
  private id: string;
  private body: string;
  private assessmentId: string;

  constructor(id: string, body: string, assessmentId: string) {
    this.id = id;
    this.body = body;
    this.assessmentId = assessmentId;
  }

  getId(): string {
    return this.id;
  }

  getBody(): string {
    return this.body;
  }

  getAssessmentId(): string {
    return this.assessmentId;
  }
}
