import { ICoursesGateway } from "./ICoursesGateway";
import { GetCourseByIdResponse, GetCoursesResponse } from "@l-p/courses/api/responses";
import { coursesApiID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { ICoursesApi } from "@l-p/courses/api/ICoursesApi";
import { GetCourseByIdDTO, GetCoursesByIdsDTO } from "@l-p/courses/api/request-dtos";
import { inject } from "@l-p/shared/infrastructure/dependency-injection/utils";

export class CoursesGateway implements ICoursesGateway {
  constructor(
    @inject(coursesApiID) private readonly coursesApi: ICoursesApi
  ) {}

  async getCourseById(courseId: string): Promise<GetCourseByIdResponse> { 
    const dto = new GetCourseByIdDTO(courseId);
    return await this.coursesApi.getCourseById(dto);
  }

  async getCoursesByIds(courseIds: string[]): Promise<GetCoursesResponse> {
    
    const dto = new GetCoursesByIdsDTO(courseIds);
    
    return await this.coursesApi.getCoursesByIds(dto);
  }
}
