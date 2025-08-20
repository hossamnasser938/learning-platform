import { Container } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { CoursesApi } from "@l-p/courses/api/CoursesApi";
import { coursesApiID } from "./tokens";

export function bindDependencies(container: Container) {
  container.bind(coursesApiID).to(CoursesApi);
}
