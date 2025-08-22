import { CreateCourseDTO, CreateInstructorDTO } from "./dtos";
import { CreateChapterDTO } from "./dtos/CreateChapterDTO";
import { GetCourseChaptersDTO } from "./dtos/GetCourseChaptersDTO";
import { GetCoursesDTO } from "./dtos/GetCoursesDTO";
import { GetInstructorsDTO } from "./dtos/GetInstructorsDTO";
import { GetCourseChaptersResponse } from "./responses/GetCourseChaptersResponse";
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

  createChapter(createChapterDTO: CreateChapterDTO): Promise<void>;

  getCourseChapters(
    getCourseChaptersDTO: GetCourseChaptersDTO
  ): Promise<GetCourseChaptersResponse>;
}
