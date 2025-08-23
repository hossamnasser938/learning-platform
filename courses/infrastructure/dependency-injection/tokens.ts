import { ICoursesApi } from "@l-p/courses/api/ICoursesApi";
import { CreateChapterHandler } from "@l-p/courses/application/chapter/create-chapter/CreateChapterHandler";
import { CreateCourseHandler } from "@l-p/courses/application/course/create-course/CreateCourseHandler";
import { CreateInstructorHandler } from "@l-p/courses/application/instructor/create-instructor/CreateInstructorHandler";
import { CreateLessonHandler } from "@l-p/courses/application/lesson/create-lesson/CreateLessonHandler";
import { GetChapterLessonsHandler } from "@l-p/courses/application/lesson/get-chapter-lessons/GetChapterLessonsHandler";
import { GetCourseChaptersHandler } from "@l-p/courses/application/chapter/get-course-chapters/GetCourseChaptersHandler";
import { GetCoursesHandler } from "@l-p/courses/application/course/get-courses/GetCoursesHandler";
import { GetInstructorsHandler } from "@l-p/courses/application/instructor/get-instructors/GetInstructorHandler";
import { IChapterRepo } from "@l-p/courses/domain/contracts/IChapterRepo";
import { ICourseRepo } from "@l-p/courses/domain/contracts/ICourseRepo";
import { ILessonRepo } from "@l-p/courses/domain/contracts/ILessonRepo";
import { IInstructorRepo } from "@l-p/courses/domain/contracts/IInstructorRepo";
import { ServiceIdentifier } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { IChapterService, ILessonService } from "@l-p/courses/domain/services";
import { ICourseService } from "@l-p/courses/domain/services/course/ICourseService";

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
export const courseServiceID: ServiceIdentifier<ICourseService> =
  Symbol.for("CourseService");

// chapter
export const createChapterHandlerID: ServiceIdentifier<CreateChapterHandler> =
  Symbol.for("CreateChapterHandler");
export const getCourseChaptersHandlerID: ServiceIdentifier<GetCourseChaptersHandler> =
  Symbol.for("GetCourseChaptersHandler");
export const chapterRepoID: ServiceIdentifier<IChapterRepo> =
  Symbol.for("ChapterRepository");
export const chapterServiceID: ServiceIdentifier<IChapterService> =
  Symbol.for("ChapterService");

// lesson
export const createLessonHandlerID: ServiceIdentifier<CreateLessonHandler> =
  Symbol.for("CreateLessonHandler");
export const getChapterLessonsHandlerID: ServiceIdentifier<GetChapterLessonsHandler> =
  Symbol.for("GetChapterLessonsHandler");
export const lessonRepoID: ServiceIdentifier<ILessonRepo> =
  Symbol.for("LessonRepository");
export const lessonServiceID: ServiceIdentifier<ILessonService> =
  Symbol.for("LessonService");
