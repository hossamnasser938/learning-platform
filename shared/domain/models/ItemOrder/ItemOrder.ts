import { ItemOrderNonPositiveIntegerException } from "./exceptions/ItemOrderException";

export class ItemOrder {
  private constructor(private readonly value: number) {}

  static create(order: number): ItemOrder {
    if (!Number.isInteger(order) || order < 0) {
      throw new ItemOrderNonPositiveIntegerException(order);
    }

    return new ItemOrder(order);
  }

  getValue(): number {
    return this.value;
  }

  toString(): string {
    return this.value.toString();
  }

  equals(other: ItemOrder): boolean {
    return this.value === other.value;
  }
}
