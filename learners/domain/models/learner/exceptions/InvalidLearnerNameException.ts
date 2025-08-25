import { LearnerException } from "./LearnerException";

export class InvalidLearnerNameException extends LearnerException {
  constructor(name: string) {
    super(`Invalid learner name: ${name}`);
    this.name = "InvalidLearnerNameException";
  }
}
