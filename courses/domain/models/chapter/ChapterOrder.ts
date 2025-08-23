import { ChapterOrderException } from './exceptions/ChapterExceptions';

export class ChapterOrder {
  private value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static create(value: number): ChapterOrder {
    if (!Number.isInteger(value) || value <= 0) {
      throw new ChapterOrderException("Chapter order must be a positive integer");
    }
    
    return new ChapterOrder(value);
  }

  getValue(): number {
    return this.value;
  }

  toString(): string {
    return this.value.toString();
  }

  equals(other: ChapterOrder): boolean {
    return this.value === other.value;
  }

  isGreaterThan(other: ChapterOrder): boolean {
    return this.value > other.value;
  }

  isLessThan(other: ChapterOrder): boolean {
    return this.value < other.value;
  }
}
