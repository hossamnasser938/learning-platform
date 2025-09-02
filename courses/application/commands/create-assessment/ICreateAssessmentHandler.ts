import { ICommandHandler } from "@l-p/shared/domain/contracts";
import { CreateAssessmentCommand } from "./CreateAssessmentCommand";
import { Assessment } from "@l-p/courses/domain/models/assessment/Assessment";

export interface ICreateAssessmentHandler
  extends ICommandHandler<CreateAssessmentCommand, Assessment> {}
