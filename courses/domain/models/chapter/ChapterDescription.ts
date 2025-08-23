import { ChapterDescriptionEmptyException, ChapterDescriptionTooLongException } from './exceptions/ChapterExceptions';

export class ChapterDescription {
  static MAX_LENGTH = 500;
  
  private value: string;

  private constructor(value: string) {
    this.value = value;
  }

  static create(value: string): ChapterDescription {
    if (!value || value.trim().length === 0) {
      throw new ChapterDescriptionEmptyException(value);
    }

    if (value.trim().length > ChapterDescription.MAX_LENGTH) {
      throw new ChapterDescriptionTooLongException(value);
    }

    return new ChapterDescription(value.trim());
  }

  getValue(): string {
    return this.value;
  }

  toString(): string {
    return this.value;
  }

  equals(other: ChapterDescription): boolean {
    return this.value === other.value;
  }
}
