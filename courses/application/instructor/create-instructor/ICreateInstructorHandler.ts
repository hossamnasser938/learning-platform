import { Instructor } from "@l-p/courses/domain/models";
import { ICommandHandler } from "@l-p/shared/domain/contracts";
import { CreateInstructorCommand } from "./CreateInstructorCommand";

export interface ICreateInstructorHandler
  extends ICommandHandler<CreateInstructorCommand, Instructor> {}
