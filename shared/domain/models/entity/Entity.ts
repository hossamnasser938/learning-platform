import { DomainModel } from "../domain-model/DomainModel";
import { ValueObject } from "../value-object";

export class Entity<T extends ValueObject> implements DomainModel {
  constructor(private readonly id: T) {}

  public getId(): T {
    return this.id;
  }


  public equals(other: Object): boolean {
    if (!(other instanceof Entity)) {
      return false;
    }

    if (this === other) {
      return true;
    }
    
    return this.id.equals(other.id);
  }
}