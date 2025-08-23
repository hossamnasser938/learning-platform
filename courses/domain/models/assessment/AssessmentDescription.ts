import { AssessmentDescriptionEmptyException, AssessmentDescriptionTooLongException } from "./exceptions/AssessmentExceptions";

export class AssessmentDescription {
  static MAX_LENGTH = 500;
  
  private constructor(private readonly value: string) {}

  public static create(description: string): AssessmentDescription {
    if (!description || description.trim().length === 0) {
      throw new AssessmentDescriptionEmptyException();
    }

    if (description.trim().length > AssessmentDescription.MAX_LENGTH) {
      throw new AssessmentDescriptionTooLongException(AssessmentDescription.MAX_LENGTH);
    }

    return new AssessmentDescription(description.trim());
  }

  public getValue(): string {
    return this.value;
  }

  public toString(): string {
    return this.value;
  }

  public equals(other: AssessmentDescription): boolean {
    return this.value === other.value;
  }
}
