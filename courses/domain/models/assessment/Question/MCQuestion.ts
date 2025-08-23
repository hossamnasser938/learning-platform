import { Question } from "./Question";
import { ModelId } from "@l-p/shared/domain/models/ModelId";

export class MCQuestion extends Question {
  private options: string[];
  private correctOptionIndices: number[];

  private constructor(
    id: string,
    body: string,
    assessmentId: string,
    options: string[],
    correctOptionIndices: number[]
  ) {
    super(id, body, assessmentId);
    this.options = options;
    this.correctOptionIndices = correctOptionIndices;
  }

  static create(
    id: string,
    body: string,
    assessmentId: string,
    options: string[],
    correctOptionIndices: number[]
  ): MCQuestion {
    return new MCQuestion(id, body, assessmentId, options, correctOptionIndices);
  }

  getOptions(): string[] {
    return this.options;
  }

  getCorrectOptionIndices(): number[] {
    return this.correctOptionIndices;
  }
}
