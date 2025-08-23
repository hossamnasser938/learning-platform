import { InvalidEmptyModelIdException, InvalidModelIdFormatException } from "./exceptions/ModelIdException";

export class ModelId {
  private constructor(private readonly value: string) {}

  static create(id: string): ModelId {
    if (!id || id.trim().length === 0) {
      throw new InvalidEmptyModelIdException(id);
    }

    // UUID v4 validation regex
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    
    if (!uuidRegex.test(id)) {
      throw new InvalidModelIdFormatException(id);
    }

    return new ModelId(id);
  }

  getValue(): string {
    return this.value;
  }

  toString(): string {
    return this.value;
  }

  equals(other: ModelId): boolean;

  equals(other: string): boolean;
  equals(other: ModelId | string): boolean {
    if (typeof other === "string") {
      return this.value === other;
    }

    return this.value === other.value;
  }
}
