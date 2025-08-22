import { Container } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { CoursesApi } from "@l-p/courses/api/CoursesApi";
import { CreateInstructorHandler } from "@l-p/courses/application/create-instructor/CreateInstructorHandler";
import {
  coursesApiID,
  createInstructorHandlerID,
  instructorRepoID,
  coursesRepoID,
  getInstructorsHandlerID,
  getCoursesHandlerID,
  createCourseHandlerID,
} from "./tokens";
import { InstructorRepo } from "../repositories/InstructorRepo";
import { CourseRepo } from "../repositories/CourseRepo";
import { GetInstructorsHandler } from "@l-p/courses/application/get-instructors/GetInstructorHandler";
import { GetCoursesHandler } from "@l-p/courses/application/get-courses/GetCoursesHandler";
import { CreateCourseHandler } from "@l-p/courses/application/create-course/CreateCourseHandler";

export function bindDependencies(container: Container) {
  container.bind(coursesApiID).to(CoursesApi);
  container.bind(createInstructorHandlerID).to(CreateInstructorHandler);
  container.bind(getInstructorsHandlerID).to(GetInstructorsHandler);
  container.bind(createCourseHandlerID).to(CreateCourseHandler);
  container.bind(getCoursesHandlerID).to(GetCoursesHandler);
  container.bind(instructorRepoID).to(InstructorRepo).inSingletonScope();
  container.bind(coursesRepoID).to(CourseRepo).inSingletonScope();
}
