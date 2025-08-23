import { ICommandHandler } from "@l-p/shared/domain/contracts/ICommandHandler";
import { ArchiveCourseCommand } from "./ArchiveCourseCommand";
import { Course } from "@l-p/courses/domain/models/course/Course";
import { inject, injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { courseRepoID, courseServiceID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { ICourseService } from "@l-p/courses/domain/services/course/ICourseService";
import { ICourseRepo } from "@l-p/courses/domain/contracts/ICourseRepo";

@injectable()
export class ArchiveCourseHandler implements ICommandHandler<ArchiveCourseCommand, Course> {
  constructor(
    @inject(courseServiceID) private readonly courseService: ICourseService,
    @inject(courseRepoID) private readonly courseRepo: ICourseRepo
  ) {}

  async handle(command: ArchiveCourseCommand): Promise<Course> {
    const course = await this.courseService.archiveCourse(command.courseId);

    await this.courseRepo.update(course);
    // TODO: raise event

    return course;
  }
}
