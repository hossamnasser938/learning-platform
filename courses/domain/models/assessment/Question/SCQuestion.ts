import { Question } from "./Question";
import { ModelId } from "@l-p/shared/domain/models/ModelId";

export class SCQuestion extends Question {
  private options: string[];
  private correctOptionIndex: number;

  private constructor(
    id: string,
    body: string,
    assessmentId: string,
    options: string[],
    correctOptionIndex: number
  ) {
    super(id, body, assessmentId);
    this.options = options;
    this.correctOptionIndex = correctOptionIndex;
  }

  public static create(
    id: string,
    body: string,
    assessmentId: string,
    options: string[],
    correctOptionIndex: number
  ): SCQuestion {
    return new SCQuestion(id, body, assessmentId, options, correctOptionIndex);
  }

  getOptions(): string[] {
    return this.options;
  }

  getCorrectOptionIndex(): number {
    return this.correctOptionIndex;
  }
}
