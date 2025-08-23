import { ChapterDescriptionException } from './exceptions/ChapterExceptions';

export class ChapterDescription {
  private value: string;

  private constructor(value: string) {
    this.value = value;
  }

  static create(value: string): ChapterDescription {
    if (!value || value.trim().length === 0) {
      throw new ChapterDescriptionException("Chapter description cannot be empty");
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
