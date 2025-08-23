import { ServiceIdentifier } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { ICoursesApi } from "@l-p/courses/api/ICoursesApi";
import { ICreateChapterHandler } from "@l-p/courses/application/chapter/create-chapter/ICreateChapterHandler";
import { ICreateCourseHandler } from "@l-p/courses/application/course/create-course/ICreateCourseHandler";
import { ICreateInstructorHandler } from "@l-p/courses/application/instructor/create-instructor/ICreateInstructorHandler";
import { ICreateLessonHandler } from "@l-p/courses/application/lesson/create-lesson/ICreateLessonHandler";
import { IGetChapterLessonsHandler } from "@l-p/courses/application/lesson/get-chapter-lessons/IGetChapterLessonsHandler";
import { IGetCourseChaptersHandler } from "@l-p/courses/application/chapter/get-course-chapters/IGetCourseChaptersHandler";
import { IGetCoursesHandler } from "@l-p/courses/application/course/get-courses/IGetCoursesHandler";
import { IGetInstructorsHandler } from "@l-p/courses/application/instructor/get-instructors/IGetInstructorsHandler";
import { IPublishCourseHandler } from "@l-p/courses/application/course/publish-course/IPublishCourseHandler";
import { IArchiveCourseHandler } from "@l-p/courses/application/course/archive-course/IArchiveCourseHandler";
import {
  IInstructorRepo,
  ICourseRepo,
  IChapterRepo,
  ILessonRepo,
} from "@l-p/courses/domain/contracts";
import {
  ICourseService,
  IChapterService,
  ILessonService,
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
export const courseServiceID: ServiceIdentifier<ICourseService> =
  Symbol.for("CourseService");
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
export const chapterServiceID: ServiceIdentifier<IChapterService> =
  Symbol.for("ChapterService");

// lesson
export const createLessonHandlerID: ServiceIdentifier<ICreateLessonHandler> =
  Symbol.for("ICreateLessonHandler");
export const getChapterLessonsHandlerID: ServiceIdentifier<IGetChapterLessonsHandler> =
  Symbol.for("IGetChapterLessonsHandler");
export const lessonRepoID: ServiceIdentifier<ILessonRepo> =
  Symbol.for("LessonRepository");
export const lessonServiceID: ServiceIdentifier<ILessonService> =
  Symbol.for("LessonService");
