import { ICommandHandler } from "@l-p/shared/domain/contracts";
import { EnrollLearnerInCourseCommand } from "./EnrollLearnerInCourseCommand";
import { Learner } from "@l-p/learners/domain/models";

export interface IEnrollLearnerInCourseHandler
  extends ICommandHandler<EnrollLearnerInCourseCommand, Learner> {}
