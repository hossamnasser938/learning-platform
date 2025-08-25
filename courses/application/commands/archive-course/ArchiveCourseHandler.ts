import { ArchiveCourseCommand } from "./ArchiveCourseCommand";
import { Course } from "@l-p/courses/domain/models";
import { inject, injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { courseRepoID, courseStatusUpdateServiceID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { ICourseRepo } from "@l-p/courses/domain/contracts";
import { ICourseStatusUpdateService } from "@l-p/courses/domain/services";
import { IArchiveCourseHandler } from "./IArchiveCourseHandler";
import { CourseEventsMapper } from "@l-p/courses/infrastructure/event-mappers/CourseEventsMapper";
import { IEventBus } from "@l-p/shared/domain/contracts";
import { eventBusID } from "@l-p/shared/infrastructure/dependency-injection/tokens";

@injectable()
export class ArchiveCourseHandler implements IArchiveCourseHandler {
  constructor(
    @inject(courseStatusUpdateServiceID) private readonly courseStatusUpdateService: ICourseStatusUpdateService,
    @inject(courseRepoID) private readonly courseRepo: ICourseRepo,
    @inject(eventBusID) private readonly eventBus: IEventBus
  ) {}

  async handle(command: ArchiveCourseCommand): Promise<Course> {
    const course = await this.courseStatusUpdateService.archiveCourse(command.courseId);

    await this.courseRepo.update(course);
    
    course.publishEvents(CourseEventsMapper.toDTO, this.eventBus);

    return course;
  }
}
