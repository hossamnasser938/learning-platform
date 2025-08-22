import {
  inject,
  injectable,
} from "@l-p/shared/infrastructure/dependency-injection/utils";
import { CreateInstructorCommand } from "@l-p/courses/application/create-instructor/CreateInstructorCommand";
import { CreateInstructorHandler } from "@l-p/courses/application/create-instructor/CreateInstructorHandler";
import {
  createInstructorHandlerID,
  getInstructorsHandlerID,
} from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { CreateCourseDTO, CreateInstructorDTO } from "./dtos";
import { ICoursesApi } from "./ICoursesApi";
import { GetInstructorsQuery } from "../application/get-instructors/GetInstructorQuery";
import { GetInstructorsHandler } from "../application/get-instructors/GetInstructorHandler";
import { GetInstructorsResponse } from "./responses/GetInstructorsResponse";
import { GetInstructorsDTO } from "./dtos/GetInstructorsDTO";

@injectable()
export class CoursesApi implements ICoursesApi {
  constructor(
    @inject(createInstructorHandlerID)
    private readonly createInstructorHandler: CreateInstructorHandler,
    @inject(getInstructorsHandlerID)
    private readonly getInstructorsHandler: GetInstructorsHandler
  ) {}

  async healthCheck(): Promise<boolean> {
    return true;
  }

  async createInstructor(createInstructorDTO: CreateInstructorDTO) {
    const query = CreateInstructorCommand.fromDTO(createInstructorDTO);
    return await this.createInstructorHandler.handle(query);
  }

  async getInstructors(getInstructorsDTO: GetInstructorsDTO) {
    const query = GetInstructorsQuery.fromDTO(getInstructorsDTO);
    const instructors = await this.getInstructorsHandler.handle(query);
    return GetInstructorsResponse.fromDomain(instructors);
  }

  async createCourse(createCourseDTO: CreateCourseDTO) {
    // Implementation for creating a course
  }
}
