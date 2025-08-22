import { ICoursesApi } from "@l-p/courses/api/ICoursesApi";
import { CreateCourseHandler } from "@l-p/courses/application/create-course/CreateCourseHandler";
import { CreateInstructorHandler } from "@l-p/courses/application/create-instructor/CreateInstructorHandler";
import { GetCoursesHandler } from "@l-p/courses/application/get-courses/GetCoursesHandler";
import { GetInstructorsHandler } from "@l-p/courses/application/get-instructors/GetInstructorHandler";
import { ICourseRepo } from "@l-p/courses/domain/contracts/ICourseRepo";
import { IInstructorRepo } from "@l-p/courses/domain/contracts/IInstructorRepo";
import { ServiceIdentifier } from "@l-p/shared/infrastructure/dependency-injection/utils";

export const coursesApiID: ServiceIdentifier<ICoursesApi> =
  Symbol.for("CoursesApi");
export const createInstructorHandlerID: ServiceIdentifier<CreateInstructorHandler> =
  Symbol.for("CreateInstructorHandler");
export const getInstructorsHandlerID: ServiceIdentifier<GetInstructorsHandler> =
  Symbol.for("GetInstructorsHandler");
export const createCourseHandlerID: ServiceIdentifier<CreateCourseHandler> =
  Symbol.for("CreateCourseHandler");
export const getCoursesHandlerID: ServiceIdentifier<GetCoursesHandler> =
  Symbol.for("GetCoursesHandler");
export const instructorRepoID: ServiceIdentifier<IInstructorRepo> = Symbol.for(
  "InstructorRepository"
);
export const coursesRepoID: ServiceIdentifier<ICourseRepo> =
  Symbol.for("CoursesRepository");
