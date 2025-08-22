import { CreateCourseDTO, CreateInstructorDTO } from "./dtos";
import { GetInstructorsDTO } from "./dtos/GetInstructorsDTO";
import { GetInstructorsResponse } from "./responses/GetInstructorsResponse";

export interface ICoursesApi {
  healthCheck(): Promise<boolean>;

  createInstructor(createInstructorDTO: CreateInstructorDTO): Promise<void>;

  getInstructors(
    getInstructorsQuery: GetInstructorsDTO
  ): Promise<GetInstructorsResponse>;

  createCourse(createCourseDTO: CreateCourseDTO): Promise<void>;
}
