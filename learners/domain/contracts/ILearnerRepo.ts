import { Learner } from "../models/learner/Learner";

export interface ILearnerRepo {
  getById(id: string): Promise<Learner | null>;
  getAll(): Promise<Learner[]>;
  create(learner: Learner): Promise<void>;
  update(learner: Learner): Promise<void>;
  delete(id: string): Promise<void>;
}
