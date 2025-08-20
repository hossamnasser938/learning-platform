import { ICoursesApi } from "./ICoursesApi";

export class CoursesApi implements ICoursesApi {
  async healthCheck(): Promise<boolean> {
    return true;
  }
}
