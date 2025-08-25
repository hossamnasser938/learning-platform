import { PublishCourseCommand } from "./PublishCourseCommand";
import { Course } from "@l-p/courses/domain/models";
import { inject, injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { courseRepoID, courseStatusUpdateServiceID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { ICourseRepo } from "@l-p/courses/domain/contracts";
import { ICourseStatusUpdateService } from "@l-p/courses/domain/services";
import { IPublishCourseHandler } from "./IPublishCourseHandler";
import { eventBusID } from "@l-p/shared/infrastructure/dependency-injection/tokens";
import { IEventBus } from "@l-p/shared/domain/contracts";
import { CourseEventsMapper } from "@l-p/courses/infrastructure/event-mappers/CourseEventsMapper";

@injectable()
export class PublishCourseHandler implements IPublishCourseHandler {
  constructor(
    @inject(courseStatusUpdateServiceID) private readonly courseStatusUpdateService: ICourseStatusUpdateService,
    @inject(courseRepoID) private readonly courseRepo: ICourseRepo,
    @inject(eventBusID) private readonly eventBus: IEventBus
  ) {}

  async handle(command: PublishCourseCommand): Promise<Course> {
    const course = await this.courseStatusUpdateService.publishCourse(command.courseId);

    await this.courseRepo.update(course);
    
    course.publishEvents(CourseEventsMapper.toDTO, this.eventBus);

    return course;
  }
}
