import { ChapterTitleEmptyException, ChapterTitleTooLongException } from './exceptions/ChapterExceptions';

export class ChapterTitle {
  static MAX_LENGTH = 100;
  
  private constructor(private readonly value: string) {}

  static create(value: string): ChapterTitle {
    if (!value || value.trim().length === 0) {
      throw new ChapterTitleEmptyException(value);
    }

    if (value.trim().length > ChapterTitle.MAX_LENGTH) {
      throw new ChapterTitleTooLongException(value);
    }
    
    return new ChapterTitle(value.trim());
  }

  getValue(): string {
    return this.value;
  }

  toString(): string {
    return this.value;
  }

  equals(other: ChapterTitle): boolean {
    return this.value === other.value;
  }
}
