import { ServiceIdentifier } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { ICoursesApi } from "@l-p/courses/api/ICoursesApi";
import { ICreateChapterHandler } from "@l-p/courses/application/commands/create-chapter/ICreateChapterHandler";
import { ICreateCourseHandler } from "@l-p/courses/application/commands/create-course/ICreateCourseHandler";
import { ICreateInstructorHandler } from "@l-p/courses/application/commands/create-instructor/ICreateInstructorHandler";
import { ICreateLessonHandler } from "@l-p/courses/application/commands/create-lesson/ICreateLessonHandler";
import { IGetChapterLessonsHandler } from "@l-p/courses/application/queries/get-chapter-lessons/IGetChapterLessonsHandler";
import { IGetCourseChaptersHandler } from "@l-p/courses/application/queries/get-course-chapters/IGetCourseChaptersHandler";
import { IGetCoursesHandler } from "@l-p/courses/application/queries/get-courses/IGetCoursesHandler";
import { IGetInstructorsHandler } from "@l-p/courses/application/queries/get-instructors/IGetInstructorsHandler";
import { IPublishCourseHandler } from "@l-p/courses/application/commands/publish-course/IPublishCourseHandler";
import { IArchiveCourseHandler } from "@l-p/courses/application/commands/archive-course/IArchiveCourseHandler";
import {
  IInstructorRepo,
  ICourseRepo,
  IChapterRepo,
  ILessonRepo,
} from "@l-p/courses/domain/contracts";
import {
  ICourseCreationService,
  ICourseStatusUpdateService,
} from "@l-p/courses/domain/services";

// api
export const coursesApiID: ServiceIdentifier<ICoursesApi> =
  Symbol.for("ICoursesApi");

// instructor
export const createInstructorHandlerID: ServiceIdentifier<ICreateInstructorHandler> =
  Symbol.for("ICreateInstructorHandler");
export const getInstructorsHandlerID: ServiceIdentifier<IGetInstructorsHandler> =
  Symbol.for("IGetInstructorsHandler");
export const instructorRepoID: ServiceIdentifier<IInstructorRepo> = Symbol.for(
  "InstructorRepository"
);

// course
export const createCourseHandlerID: ServiceIdentifier<ICreateCourseHandler> =
  Symbol.for("ICreateCourseHandler");
export const getCoursesHandlerID: ServiceIdentifier<IGetCoursesHandler> =
  Symbol.for("IGetCoursesHandler");
export const courseRepoID: ServiceIdentifier<ICourseRepo> =
  Symbol.for("CoursesRepository");
export const courseCreationServiceID: ServiceIdentifier<ICourseCreationService> =
  Symbol.for("CourseCreationService");
export const courseStatusUpdateServiceID: ServiceIdentifier<ICourseStatusUpdateService> =
  Symbol.for("CourseStatusUpdateService");
export const publishCourseHandlerID: ServiceIdentifier<IPublishCourseHandler> =
  Symbol.for("IPublishCourseHandler");
export const archiveCourseHandlerID: ServiceIdentifier<IArchiveCourseHandler> =
  Symbol.for("IArchiveCourseHandler");

// chapter
export const createChapterHandlerID: ServiceIdentifier<ICreateChapterHandler> =
  Symbol.for("ICreateChapterHandler");
export const getCourseChaptersHandlerID: ServiceIdentifier<IGetCourseChaptersHandler> =
  Symbol.for("IGetCourseChaptersHandler");
export const chapterRepoID: ServiceIdentifier<IChapterRepo> =
  Symbol.for("ChapterRepository");

// lesson
export const createLessonHandlerID: ServiceIdentifier<ICreateLessonHandler> =
  Symbol.for("ICreateLessonHandler");
export const getChapterLessonsHandlerID: ServiceIdentifier<IGetChapterLessonsHandler> =
  Symbol.for("IGetChapterLessonsHandler");
export const lessonRepoID: ServiceIdentifier<ILessonRepo> =
  Symbol.for("LessonRepository");
