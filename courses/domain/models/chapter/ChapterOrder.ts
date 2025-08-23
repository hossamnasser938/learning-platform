import { ChapterNonPositiveIntegerOrderException } from './exceptions/ChapterExceptions';

export class ChapterOrder {
  private constructor(private readonly value: number) {}

  static create(value: number): ChapterOrder {
    if (!Number.isInteger(value) || value <= 0) {
      throw new ChapterNonPositiveIntegerOrderException(value);
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
