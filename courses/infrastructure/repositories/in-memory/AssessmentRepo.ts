import { Assessment } from "@l-p/courses/domain/models/assessment/Assessment";
import { IAssessmentRepo } from "@l-p/courses/domain/contracts";
import { injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";
@injectable()
export class AssessmentRepo implements IAssessmentRepo {
  private assessments: Assessment[] = [];

  async getById(id: string): Promise<Assessment | null> {
    return (
      this.assessments.find((assessment) => assessment.getId().equals(id)) ||
      null
    );
  }

  async create(assessment: Assessment): Promise<void> {
    this.assessments.push(assessment);
  }

  async update(assessment: Assessment): Promise<void> {
    const index = this.assessments.findIndex(
      (a) => a.getId().equals(assessment.getId())
    );
    if (index !== -1) {
      this.assessments[index] = assessment;
    }
  }

  async delete(id: string): Promise<void> {
    this.assessments = this.assessments.filter((a) => !a.getId().equals(id));
  }
}