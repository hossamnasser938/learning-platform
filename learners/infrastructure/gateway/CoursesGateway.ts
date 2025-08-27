import { ICoursesGateway } from "./ICoursesGateway";
import { GetCoursesResponse } from "@l-p/courses/api/responses";
import { container } from "@l-p/shared/infrastructure/dependency-injection";
import { coursesApiID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { ICoursesApi } from "@l-p/courses/api/ICoursesApi";
import { GetCoursesByIdsDTO } from "@l-p/courses/api/request-dtos";

export class CoursesGateway implements ICoursesGateway {
  async getCoursesByIds(courseIds: string[]): Promise<GetCoursesResponse> {
    const coursesApi = container.get<ICoursesApi>(coursesApiID);
    
    const dto = new GetCoursesByIdsDTO(courseIds);
    
    return await coursesApi.getCoursesByIds(dto);
  }
}
