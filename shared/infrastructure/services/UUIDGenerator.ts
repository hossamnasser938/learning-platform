import { IUniqueIDGenerator } from "@l-p/shared/domain/contracts/IUniqueIDGenerator";
import { v4 as uuidv4 } from "uuid";

export class UUIDGenerator implements IUniqueIDGenerator {
  generate(): string {
    return uuidv4();
  }
}
