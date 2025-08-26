import { EnrollLearnerInCourseCommand } from "./EnrollLearnerInCourseCommand";
import { ICourseEnrollmentService } from "@l-p/learners/domain/services";
import { inject, injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { courseEnrollmentServiceID } from "@l-p/learners/infrastructure/dependency-injection/tokens";
import { Learner } from "@l-p/learners/domain/models";
import { IEnrollLearnerInCourseHandler } from "./IEnrollLearnerInCourseHandler";

@injectable()
export class EnrollLearnerInCourseHandler implements IEnrollLearnerInCourseHandler {
  constructor(
    @inject(courseEnrollmentServiceID) private readonly courseEnrollmentService: ICourseEnrollmentService
  ) {}

  async handle(command: EnrollLearnerInCourseCommand): Promise<Learner> {
    return await this.courseEnrollmentService.enrollLearnerInCourse(command.learnerId, command.courseId);
  }
}
