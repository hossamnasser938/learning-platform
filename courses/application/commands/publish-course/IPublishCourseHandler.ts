import { Course } from "@l-p/courses/domain/models";
import { ICommandHandler } from "@l-p/shared/domain/contracts";
import { PublishCourseCommand } from "./PublishCourseCommand";

export interface IPublishCourseHandler
  extends ICommandHandler<PublishCourseCommand, Course> {}
