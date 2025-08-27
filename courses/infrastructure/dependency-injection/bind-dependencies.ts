import { Container } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { CoursesApi } from "@l-p/courses/api/CoursesApi";
import { CourseRepo } from "../repositories/in-memory/CourseRepo";
import { ChapterRepo } from "../repositories/in-memory/ChapterRepo";
import { LessonRepo } from "../repositories/in-memory/LessonRepo";
import { InstructorRepo } from "../repositories/in-memory/InstructorRepo";
import { CreateCourseHandler } from "../../application/commands/create-course/CreateCourseHandler";
import { CreateChapterHandler } from "../../application/commands/create-chapter/CreateChapterHandler";
import { CreateLessonHandler } from "../../application/commands/create-lesson/CreateLessonHandler";
import { AddInstructorHandler } from "../../application/commands/add-instructor/AddInstructorHandler";
import { GetCoursesHandler } from "../../application/queries/get-courses/GetCoursesHandler";
import { GetCoursesByIdsHandler } from "../../application/queries/get-courses-by-ids/GetCoursesByIdsHandler";
import { GetInstructorsHandler } from "../../application/queries/get-instructors/GetInstructorHandler";
import { GetCourseChaptersHandler } from "../../application/queries/get-course-chapters/GetCourseChaptersHandler";
import { GetChapterLessonsHandler } from "../../application/queries/get-chapter-lessons/GetChapterLessonsHandler";
import { ArchiveCourseHandler } from "../../application/commands/archive-course/ArchiveCourseHandler";
import { PublishCourseHandler } from "../../application/commands/publish-course/PublishCourseHandler";
import { CourseCreationService } from "../../domain/services/course-creation/CourseCreationService";
import { CourseStatusUpdateService } from "../../domain/services/course-status-update/CourseStatusUpdateService";
import {
  courseRepoID,
  chapterRepoID,
  lessonRepoID,
  instructorRepoID,
  createCourseHandlerID,
  createChapterHandlerID,
  createLessonHandlerID,
  addInstructorHandlerID,
  getCoursesHandlerID,
  getCoursesByIdsHandlerID,
  getInstructorsHandlerID,
  getCourseChaptersHandlerID,
  getChapterLessonsHandlerID,
  archiveCourseHandlerID,
  publishCourseHandlerID,
  courseCreationServiceID,
  courseStatusUpdateServiceID,
  coursesApiID
} from "./tokens";

export function bindDependencies(container: Container) {
  container.bind(coursesApiID).to(CoursesApi);

  container.bind(createCourseHandlerID).to(CreateCourseHandler);
  container.bind(createChapterHandlerID).to(CreateChapterHandler);
  container.bind(createLessonHandlerID).to(CreateLessonHandler);
  container.bind(addInstructorHandlerID).to(AddInstructorHandler);
  container.bind(getCoursesHandlerID).to(GetCoursesHandler);
  container.bind(getCoursesByIdsHandlerID).to(GetCoursesByIdsHandler);
  container.bind(getInstructorsHandlerID).to(GetInstructorsHandler);
  container.bind(getCourseChaptersHandlerID).to(GetCourseChaptersHandler);
  container.bind(getChapterLessonsHandlerID).to(GetChapterLessonsHandler);
  container.bind(archiveCourseHandlerID).to(ArchiveCourseHandler);
  container.bind(publishCourseHandlerID).to(PublishCourseHandler);
  container.bind(courseCreationServiceID).to(CourseCreationService);
  container.bind(courseStatusUpdateServiceID).to(CourseStatusUpdateService);
  container.bind(courseRepoID).to(CourseRepo).inSingletonScope();
  container.bind(chapterRepoID).to(ChapterRepo).inSingletonScope();
  container.bind(lessonRepoID).to(LessonRepo).inSingletonScope();
  container.bind(instructorRepoID).to(InstructorRepo).inSingletonScope();
}
