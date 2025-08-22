import { ICoursesApi } from "@l-p/courses/api/ICoursesApi";
import { CreateChapterHandler } from "@l-p/courses/application/create-chapter/CreateChapterHandler";
import { CreateCourseHandler } from "@l-p/courses/application/create-course/CreateCourseHandler";
import { CreateInstructorHandler } from "@l-p/courses/application/create-instructor/CreateInstructorHandler";
import { GetCourseChaptersHandler } from "@l-p/courses/application/get-course-chapters/GetCourseChaptersHandler";
import { GetCoursesHandler } from "@l-p/courses/application/get-courses/GetCoursesHandler";
import { GetInstructorsHandler } from "@l-p/courses/application/get-instructors/GetInstructorHandler";
import { IChapterRepo } from "@l-p/courses/domain/contracts/IChapterRepo";
import { ICourseRepo } from "@l-p/courses/domain/contracts/ICourseRepo";
import { IInstructorRepo } from "@l-p/courses/domain/contracts/IInstructorRepo";
import { ServiceIdentifier } from "@l-p/shared/infrastructure/dependency-injection/utils";

// api
export const coursesApiID: ServiceIdentifier<ICoursesApi> =
  Symbol.for("CoursesApi");

// instructor
export const createInstructorHandlerID: ServiceIdentifier<CreateInstructorHandler> =
  Symbol.for("CreateInstructorHandler");
export const getInstructorsHandlerID: ServiceIdentifier<GetInstructorsHandler> =
  Symbol.for("GetInstructorsHandler");
export const instructorRepoID: ServiceIdentifier<IInstructorRepo> = Symbol.for(
  "InstructorRepository"
);

// course
export const createCourseHandlerID: ServiceIdentifier<CreateCourseHandler> =
  Symbol.for("CreateCourseHandler");
export const getCoursesHandlerID: ServiceIdentifier<GetCoursesHandler> =
  Symbol.for("GetCoursesHandler");
export const courseRepoID: ServiceIdentifier<ICourseRepo> =
  Symbol.for("CoursesRepository");

// chapter
export const createChapterHandlerID: ServiceIdentifier<CreateChapterHandler> =
  Symbol.for("CreateChapterHandler");
export const getCourseChaptersHandlerID: ServiceIdentifier<GetCourseChaptersHandler> =
  Symbol.for("GetCourseChaptersHandler");
export const chapterRepoID: ServiceIdentifier<IChapterRepo> =
  Symbol.for("ChapterRepository");
