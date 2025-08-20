import { ICoursesApi } from "@l-p/courses/api/ICoursesApi";
import { ServiceIdentifier } from "@l-p/shared/infrastructure/dependency-injection/utils";

export const coursesApiID: ServiceIdentifier<ICoursesApi> =
  Symbol.for("CoursesApi");
