import { ServiceIdentifier } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { ICoursesApi } from "@l-p/courses/api/ICoursesApi";
import { IEventBusConsumer } from "@l-p/shared/domain/contracts";
import { ICourseRepo, IChapterRepo, ILessonRepo, IInstructorRepo } from "../../domain/contracts";
import { ICreateCourseHandler } from "../../application/commands/create-course";
import { ICreateChapterHandler } from "../../application/commands/create-chapter";
import { ICreateLessonHandler } from "../../application/commands/create-lesson";
import { IAddInstructorHandler } from "../../application/commands/add-instructor";
import { IGetCoursesHandler } from "../../application/queries/get-courses";
import { IGetCoursesByIdsHandler } from "../../application/queries/get-courses-by-ids";
import { IGetInstructorsHandler } from "../../application/queries/get-instructors";
import { IGetCourseChaptersHandler } from "../../application/queries/get-course-chapters";
import { IGetChapterLessonsHandler } from "../../application/queries/get-chapter-lessons";
import { IArchiveCourseHandler } from "../../application/commands/archive-course";
import { IPublishCourseHandler } from "../../application/commands/publish-course";
import { ICourseCreationService } from "../../domain/services";
import { ICourseStatusUpdateService } from "../../domain/services";

export const coursesApiID: ServiceIdentifier<ICoursesApi> =
  Symbol.for("CoursesApi");
export const eventBusConsumerID: ServiceIdentifier<IEventBusConsumer> =
  Symbol.for("EventBusConsumer");

export const createCourseHandlerID: ServiceIdentifier<ICreateCourseHandler> =
  Symbol.for("ICreateCourseHandler");
export const createChapterHandlerID: ServiceIdentifier<ICreateChapterHandler> =
  Symbol.for("ICreateChapterHandler");
export const createLessonHandlerID: ServiceIdentifier<ICreateLessonHandler> =
  Symbol.for("ICreateLessonHandler");
export const addInstructorHandlerID: ServiceIdentifier<IAddInstructorHandler> =
  Symbol.for("IAddInstructorHandler");
export const getCoursesHandlerID: ServiceIdentifier<IGetCoursesHandler> =
  Symbol.for("IGetCoursesHandler");
export const getCoursesByIdsHandlerID: ServiceIdentifier<IGetCoursesByIdsHandler> =
  Symbol.for("IGetCoursesByIdsHandler");
export const getInstructorsHandlerID: ServiceIdentifier<IGetInstructorsHandler> =
  Symbol.for("IGetInstructorsHandler");
export const getCourseChaptersHandlerID: ServiceIdentifier<IGetCourseChaptersHandler> =
  Symbol.for("IGetCourseChaptersHandler");
export const getChapterLessonsHandlerID: ServiceIdentifier<IGetChapterLessonsHandler> =
  Symbol.for("IGetChapterLessonsHandler");
export const archiveCourseHandlerID: ServiceIdentifier<IArchiveCourseHandler> =
  Symbol.for("IArchiveCourseHandler");
export const publishCourseHandlerID: ServiceIdentifier<IPublishCourseHandler> =
  Symbol.for("IPublishCourseHandler");
export const courseCreationServiceID: ServiceIdentifier<ICourseCreationService> =
  Symbol.for("ICourseCreationService");
export const courseStatusUpdateServiceID: ServiceIdentifier<ICourseStatusUpdateService> =
  Symbol.for("ICourseStatusUpdateService");

export const courseRepoID: ServiceIdentifier<ICourseRepo> = Symbol.for(
  "CourseRepository"
);
export const chapterRepoID: ServiceIdentifier<IChapterRepo> = Symbol.for(
  "ChapterRepository"
);
export const lessonRepoID: ServiceIdentifier<ILessonRepo> = Symbol.for(
  "LessonRepository"
);
export const instructorRepoID: ServiceIdentifier<IInstructorRepo> = Symbol.for(
  "InstructorRepository"
);
