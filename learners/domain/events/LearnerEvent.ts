import { DomainEvent } from "@l-p/shared/domain/models/domain-event";

export class LearnerEvent extends DomainEvent {
  constructor(
    public readonly learnerId: string,
  ) {
    super();
  }
}