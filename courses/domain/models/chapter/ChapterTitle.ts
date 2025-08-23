import { ChapterTitleException } from './exceptions/ChapterExceptions';

export class ChapterTitle {
  private value: string;

  private constructor(value: string) {
    this.value = value;
  }

  static create(value: string): ChapterTitle {
    if (!value || value.trim().length === 0) {
      throw new ChapterTitleException("Chapter title cannot be empty");
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
