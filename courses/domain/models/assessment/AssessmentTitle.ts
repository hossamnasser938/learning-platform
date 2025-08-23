import { AssessmentTitleEmptyException, AssessmentTitleTooLongException } from "./exceptions/AssessmentExceptions";
import { ValueObject } from "@l-p/shared/domain/models/value-object";

export class AssessmentTitle implements ValueObject {
  static MAX_LENGTH = 100;
  
  private constructor(private readonly value: string) {}

  public static create(title: string): AssessmentTitle {
    if (!title || title.trim().length === 0) {
      throw new AssessmentTitleEmptyException();
    }

    if (title.trim().length > AssessmentTitle.MAX_LENGTH) {
      throw new AssessmentTitleTooLongException(AssessmentTitle.MAX_LENGTH);
    }

    return new AssessmentTitle(title.trim());
  }

  public getValue(): string {
    return this.value;
  }

  public toString(): string {
    return this.value;
  }

  public equals(other: AssessmentTitle): boolean {
    return this.value === other.value;
  }
}
