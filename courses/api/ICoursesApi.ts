import { CreateCourseDTO, CreateInstructorDTO } from "./dtos";
import { GetCoursesDTO } from "./dtos/GetCoursesDTO";
import { GetInstructorsDTO } from "./dtos/GetInstructorsDTO";
import { GetCoursesResponse } from "./responses/GetCoursesResponse";
import { GetInstructorsResponse } from "./responses/GetInstructorsResponse";

export interface ICoursesApi {
  healthCheck(): Promise<boolean>;

  createInstructor(createInstructorDTO: CreateInstructorDTO): Promise<void>;

  getInstructors(
    getInstructorsDTO: GetInstructorsDTO
  ): Promise<GetInstructorsResponse>;

  createCourse(createCourseDTO: CreateCourseDTO): Promise<void>;

  getCourses(getCoursesDTO: GetCoursesDTO): Promise<GetCoursesResponse>;
}
