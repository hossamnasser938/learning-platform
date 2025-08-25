import { Instructor } from "@l-p/courses/domain/models";
import { ICommandHandler } from "@l-p/shared/domain/contracts";
import { AddInstructorCommand } from "./AddInstructorCommand";

export interface IAddInstructorHandler
  extends ICommandHandler<AddInstructorCommand, Instructor> {}
