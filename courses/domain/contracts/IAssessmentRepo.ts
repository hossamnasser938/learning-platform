import { Assessment } from "../models/assessment/Assessment";

export interface IAssessmentRepo {
  getById(id: string): Promise<Assessment | null>;
  create(assessment: Assessment): Promise<void>;
  update(assessment: Assessment): Promise<void>;
  delete(id: string): Promise<void>;
}