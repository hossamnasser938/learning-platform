import { Container } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { CoursesApi } from "@l-p/courses/api/CoursesApi";
import { CreateInstructorHandler } from "@l-p/courses/application/instructor/create-instructor/CreateInstructorHandler";
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
  createLessonHandlerID,
  getChapterLessonsHandlerID,
  lessonRepoID,
  courseServiceID,
} from "./tokens";
import { InstructorRepo } from "../repositories/in-memory/InstructorRepo";
import { CourseRepo } from "../repositories/in-memory/CourseRepo";
import { GetInstructorsHandler } from "@l-p/courses/application/instructor/get-instructors/GetInstructorHandler";
import { GetCoursesHandler } from "@l-p/courses/application/course/get-courses/GetCoursesHandler";
import { CreateCourseHandler } from "@l-p/courses/application/course/create-course/CreateCourseHandler";
import { CreateChapterHandler } from "@l-p/courses/application/chapter/create-chapter/CreateChapterHandler";
import { ChapterRepo } from "../repositories/in-memory/ChapterRepo";
import { GetCourseChaptersHandler } from "@l-p/courses/application/chapter/get-course-chapters/GetCourseChaptersHandler";
import { CreateLessonHandler } from "@l-p/courses/application/lesson/create-lesson/CreateLessonHandler";
import { GetChapterLessonsHandler } from "@l-p/courses/application/lesson/get-chapter-lessons/GetChapterLessonsHandler";
import { LessonRepo } from "../repositories/in-memory/LessonRepo";
import { CourseService } from "@l-p/courses/domain/services/course/CourseService";

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
  container.bind(courseServiceID).to(CourseService);
  
  // chapter
  container.bind(createChapterHandlerID).to(CreateChapterHandler);
  container.bind(getCourseChaptersHandlerID).to(GetCourseChaptersHandler);
  container.bind(chapterRepoID).to(ChapterRepo).inSingletonScope();

  // lesson
  container.bind(createLessonHandlerID).to(CreateLessonHandler);
  container.bind(getChapterLessonsHandlerID).to(GetChapterLessonsHandler);
  container.bind(lessonRepoID).to(LessonRepo).inSingletonScope();
}
