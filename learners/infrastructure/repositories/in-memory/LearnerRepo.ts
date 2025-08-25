import { ILearnerRepo } from "../../../domain/contracts/ILearnerRepo";
import { Learner } from "../../../domain/models/learner/Learner";
import { injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";

@injectable()
export class LearnerRepo implements ILearnerRepo {
  private learners: Learner[] = [];

  async getById(id: string): Promise<Learner | null> {
    return (
      this.learners.find((learner) => learner.getId().equals(id)) ||
      null
    );
  }

  async getAll(): Promise<Learner[]> {
    return this.learners;
  }

  async create(learner: Learner): Promise<void> {
    this.learners.push(learner);
  }

  async update(learner: Learner): Promise<void> {
    const index = this.learners.findIndex(
      (l) => l.getId() === learner.getId()
    );
    if (index !== -1) {
      this.learners[index] = learner;
    }
  }

  async delete(id: string): Promise<void> {
    this.learners = this.learners.filter((l) => l.getId().equals(id));
  }
}
