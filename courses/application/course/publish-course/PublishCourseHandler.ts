import { PublishCourseCommand } from "./PublishCourseCommand";
import { Course } from "@l-p/courses/domain/models";
import { inject, injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { courseRepoID, courseStatusUpdateServiceID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { ICourseRepo } from "@l-p/courses/domain/contracts";
import { ICourseStatusUpdateService } from "@l-p/courses/domain/services";
import { IPublishCourseHandler } from "./IPublishCourseHandler";

@injectable()
export class PublishCourseHandler implements IPublishCourseHandler {
  constructor(
    @inject(courseStatusUpdateServiceID) private readonly courseStatusUpdateService: ICourseStatusUpdateService,
    @inject(courseRepoID) private readonly courseRepo: ICourseRepo
  ) {}

  async handle(command: PublishCourseCommand): Promise<Course> {
    const course = await this.courseStatusUpdateService.publishCourse(command.courseId);

    await this.courseRepo.update(course);
    // TODO: raise event

    return course;
  }
}
