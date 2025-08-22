import {
  inject,
  injectable,
} from "@l-p/shared/infrastructure/dependency-injection/utils";
import { CreateInstructorCommand } from "@l-p/courses/application/create-instructor/CreateInstructorCommand";
import { CreateInstructorHandler } from "@l-p/courses/application/create-instructor/CreateInstructorHandler";
import {
  createChapterHandlerID,
  createCourseHandlerID,
  createInstructorHandlerID,
  getCourseChaptersHandlerID,
  getCoursesHandlerID,
  getInstructorsHandlerID,
} from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { CreateCourseDTO, CreateInstructorDTO } from "./dtos";
import { ICoursesApi } from "./ICoursesApi";
import { GetInstructorsQuery } from "../application/get-instructors/GetInstructorQuery";
import { GetInstructorsHandler } from "../application/get-instructors/GetInstructorHandler";
import { GetInstructorsResponse } from "./responses/GetInstructorsResponse";
import { GetInstructorsDTO } from "./dtos/GetInstructorsDTO";
import { GetCoursesDTO } from "./dtos/GetCoursesDTO";
import { GetCoursesResponse } from "./responses/GetCoursesResponse";
import { GetCoursesHandler } from "../application/get-courses/GetCoursesHandler";
import { GetCoursesQuery } from "../application/get-courses/GetCoursesQuery";
import { CreateCourseHandler } from "../application/create-course/CreateCourseHandler";
import { CreateCourseCommand } from "../application/create-course/CreateCourseCommand";
import { CreateChapterDTO } from "./dtos/CreateChapterDTO";
import { CreateChapterCommand } from "../application/create-chapter/CreateChapterCommand";
import { CreateChapterHandler } from "../application/create-chapter/CreateChapterHandler";
import { GetCourseChaptersHandler } from "../application/get-course-chapters/GetCourseChaptersHandler";
import { GetCourseChaptersDTO } from "./dtos/GetCourseChaptersDTO";
import { GetCourseChaptersResponse } from "./responses/GetCourseChaptersResponse";
import { GetCourseChaptersQuery } from "../application/get-course-chapters/GetCourseChaptersQuery";

@injectable()
export class CoursesApi implements ICoursesApi {
  constructor(
    @inject(createInstructorHandlerID)
    private readonly createInstructorHandler: CreateInstructorHandler,
    @inject(getInstructorsHandlerID)
    private readonly getInstructorsHandler: GetInstructorsHandler,
    @inject(createCourseHandlerID)
    private readonly createCourseHandler: CreateCourseHandler,
    @inject(getCoursesHandlerID)
    private readonly getCoursesHandler: GetCoursesHandler,
    @inject(createChapterHandlerID)
    private readonly createChapterHandler: CreateChapterHandler,
    @inject(getCourseChaptersHandlerID)
    private readonly getCourseChaptersHandler: GetCourseChaptersHandler
  ) {}

  async healthCheck(): Promise<boolean> {
    return true;
  }

  async createInstructor(createInstructorDTO: CreateInstructorDTO) {
    const command = CreateInstructorCommand.fromDTO(createInstructorDTO);
    return await this.createInstructorHandler.handle(command);
  }

  async getInstructors(getInstructorsDTO: GetInstructorsDTO) {
    const query = GetInstructorsQuery.fromDTO(getInstructorsDTO);
    const instructors = await this.getInstructorsHandler.handle(query);
    return GetInstructorsResponse.fromDomain(instructors);
  }

  async createCourse(createCourseDTO: CreateCourseDTO) {
    const command = CreateCourseCommand.fromDTO(createCourseDTO);
    return await this.createCourseHandler.handle(command);
  }

  async getCourses(getCoursesDTO: GetCoursesDTO): Promise<GetCoursesResponse> {
    const query = GetCoursesQuery.fromDTO(getCoursesDTO);
    const courses = await this.getCoursesHandler.handle(query);
    return GetCoursesResponse.fromDomain(courses);
  }

  async createChapter(createChapterDTO: CreateChapterDTO): Promise<void> {
    const command = CreateChapterCommand.fromDTO(createChapterDTO);
    return await this.createChapterHandler.handle(command);
  }

  async getCourseChapters(
    getCourseChaptersDTO: GetCourseChaptersDTO
  ): Promise<GetCourseChaptersResponse> {
    const query = GetCourseChaptersQuery.fromDTO(getCourseChaptersDTO);
    const chapters = await this.getCourseChaptersHandler.handle(query);
    return GetCourseChaptersResponse.fromDomain(chapters);
  }
}
