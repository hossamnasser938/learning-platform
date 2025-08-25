import { Course } from "@l-p/courses/domain/models";
import { ICommandHandler } from "@l-p/shared/domain/contracts";
import { CreateCourseCommand } from "./CreateCourseCommand";

export interface ICreateCourseHandler
  extends ICommandHandler<CreateCourseCommand, Course> {}
