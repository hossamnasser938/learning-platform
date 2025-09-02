import { CreateAssessmentCommand } from "./CreateAssessmentCommand";
import { IAssessmentRepo, IQuestionRepo } from "@l-p/courses/domain/contracts";
import { inject, injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { assessmentCreationServiceID, assessmentRepoID, questionRepoID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { Assessment } from "@l-p/courses/domain/models/assessment/Assessment";
import { ICreateAssessmentHandler } from "./ICreateAssessmentHandler";
import { IAssessmentCreationService } from "@l-p/courses/domain/services/assessment-creation";

@injectable()
export class CreateAssessmentHandler implements ICreateAssessmentHandler {
  constructor(
    @inject(assessmentCreationServiceID) private readonly assessmentCreationService: IAssessmentCreationService,
    @inject(assessmentRepoID) private readonly assessmentRepo: IAssessmentRepo,
    @inject(questionRepoID) private readonly questionRepo: IQuestionRepo
  ) {}

  async handle(command: CreateAssessmentCommand): Promise<Assessment> {
    const assessment = await this.assessmentCreationService.createAssessment(command.createAssessmentDTO);

    await this.assessmentRepo.create(assessment);

    for (const question of assessment.getQuestions()) {
      await this.questionRepo.create(question);
    }

    return assessment;
  }
}
