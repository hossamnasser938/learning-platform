import { Course } from "@l-p/courses/domain/models";
import { ICommandHandler } from "@l-p/shared/domain/contracts";
import { ArchiveCourseCommand } from "./ArchiveCourseCommand";

export interface IArchiveCourseHandler
  extends ICommandHandler<ArchiveCourseCommand, Course> {}
