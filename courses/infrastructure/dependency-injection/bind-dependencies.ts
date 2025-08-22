import { Container } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { CoursesApi } from "@l-p/courses/api/CoursesApi";
import { CreateInstructorHandler } from "@l-p/courses/application/create-instructor/CreateInstructorHandler";
import {
  coursesApiID,
  createInstructorHandlerID,
  instructorRepoID,
  courseRepoID,
  getInstructorsHandlerID,
  getCoursesHandlerID,
  createCourseHandlerID,
  createChapterHandlerID,
  chapterRepoID,
  getCourseChaptersHandlerID,
} from "./tokens";
import { InstructorRepo } from "../repositories/InstructorRepo";
import { CourseRepo } from "../repositories/CourseRepo";
import { GetInstructorsHandler } from "@l-p/courses/application/get-instructors/GetInstructorHandler";
import { GetCoursesHandler } from "@l-p/courses/application/get-courses/GetCoursesHandler";
import { CreateCourseHandler } from "@l-p/courses/application/create-course/CreateCourseHandler";
import { CreateChapterHandler } from "@l-p/courses/application/create-chapter/CreateChapterHandler";
import { ChapterRepo } from "../repositories/ChapterRepo";
import { GetCourseChaptersHandler } from "@l-p/courses/application/get-course-chapters/GetCourseChaptersHandler";

export function bindDependencies(container: Container) {
  // api
  container.bind(coursesApiID).to(CoursesApi);

  // instructor
  container.bind(createInstructorHandlerID).to(CreateInstructorHandler);
  container.bind(getInstructorsHandlerID).to(GetInstructorsHandler);
  container.bind(instructorRepoID).to(InstructorRepo).inSingletonScope();

  // course
  container.bind(createCourseHandlerID).to(CreateCourseHandler);
  container.bind(getCoursesHandlerID).to(GetCoursesHandler);
  container.bind(courseRepoID).to(CourseRepo).inSingletonScope();

  // chapter
  container.bind(createChapterHandlerID).to(CreateChapterHandler);
  container.bind(getCourseChaptersHandlerID).to(GetCourseChaptersHandler);
  container.bind(chapterRepoID).to(ChapterRepo).inSingletonScope();
}
