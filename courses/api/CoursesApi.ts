import {
  inject,
  injectable,
} from "@l-p/shared/infrastructure/dependency-injection/utils";
import { CreateInstructorCommand } from "@l-p/courses/application/instructor/create-instructor/CreateInstructorCommand";
import { CreateInstructorHandler } from "@l-p/courses/application/instructor/create-instructor/CreateInstructorHandler";
import {
  createChapterHandlerID,
  createCourseHandlerID,
  createInstructorHandlerID,
  createLessonHandlerID,
  getChapterLessonsHandlerID,
  getCourseChaptersHandlerID,
  getCoursesHandlerID,
  getInstructorsHandlerID,
  publishCourseHandlerID,
  archiveCourseHandlerID,
} from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { CreateCourseDTO, CreateInstructorDTO, CreateLessonDTO } from "./dtos";
import { ICoursesApi } from "./ICoursesApi";
import { GetInstructorsQuery } from "@l-p/courses/application/instructor/get-instructors/GetInstructorQuery";
import { GetInstructorsHandler } from "@l-p/courses/application/instructor/get-instructors/GetInstructorHandler";
import { GetInstructorsResponse } from "./responses/GetInstructorsResponse";
import { GetInstructorsDTO } from "./dtos/GetInstructorsDTO";
import { GetCoursesDTO } from "./dtos/GetCoursesDTO";
import { GetCoursesResponse } from "./responses/GetCoursesResponse";
import { GetCoursesHandler } from "@l-p/courses/application/course/get-courses/GetCoursesHandler";
import { GetCoursesQuery } from "@l-p/courses/application/course/get-courses/GetCoursesQuery";
import { CreateCourseHandler } from "@l-p/courses/application/course/create-course/CreateCourseHandler";
import { CreateCourseCommand } from "@l-p/courses/application/course/create-course/CreateCourseCommand";
import { CreateChapterDTO } from "./dtos/CreateChapterDTO";
import { CreateChapterCommand } from "@l-p/courses/application/chapter/create-chapter/CreateChapterCommand";
import { CreateChapterHandler } from "@l-p/courses/application/chapter/create-chapter/CreateChapterHandler";
import { GetCourseChaptersHandler } from "@l-p/courses/application/chapter/get-course-chapters/GetCourseChaptersHandler";
import { GetCourseChaptersDTO } from "./dtos/GetCourseChaptersDTO";
import { GetCourseChaptersResponse } from "./responses/GetCourseChaptersResponse";
import { GetCourseChaptersQuery } from "@l-p/courses/application/chapter/get-course-chapters/GetCourseChaptersQuery";
import { CreateLessonCommand } from "@l-p/courses/application/lesson/create-lesson/CreateLessonCommand";
import { CreateLessonHandler } from "@l-p/courses/application/lesson/create-lesson/CreateLessonHandler";
import { GetChapterLessonsDTO } from "./dtos/GetChapterLessonsDTO";
import { GetChapterLessonsResponse } from "./responses/GetChapterLessonsResponse";
import { GetChapterLessonsQuery } from "@l-p/courses/application/lesson/get-chapter-lessons/GetChapterLessonsQuery";
import { GetChapterLessonsHandler } from "@l-p/courses/application/lesson/get-chapter-lessons/GetChapterLessonsHandler";
import { CreateInstructorResponse } from "./responses/CreateInstructorResponse";
import { CreateCourseResponse } from "./responses/CreateCourseResponse";
import { CreateChapterResponse } from "./responses/CreateChapterResponse";
import { CreateLessonResponse } from "./responses/CreateLessonResponse";
import { PublishCourseDTO } from "./dtos/PublishCourseDTO";
import { ArchiveCourseDTO } from "./dtos/ArchiveCourseDTO";
import { PublishCourseCommand } from "@l-p/courses/application/course/publish-course/PublishCourseCommand";
import { PublishCourseHandler } from "@l-p/courses/application/course/publish-course/PublishCourseHandler";
import { ArchiveCourseCommand } from "@l-p/courses/application/course/archive-course/ArchiveCourseCommand";
import { ArchiveCourseHandler } from "@l-p/courses/application/course/archive-course/ArchiveCourseHandler";
import { PublishCourseResponse } from "./responses/PublishCourseResponse";
import { ArchiveCourseResponse } from "./responses/ArchiveCourseResponse";

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
    private readonly getCourseChaptersHandler: GetCourseChaptersHandler,
    @inject(createLessonHandlerID)
    private readonly createLessonHandler: CreateLessonHandler,
    @inject(getChapterLessonsHandlerID)
    private readonly getChapterLessonsHandler: GetChapterLessonsHandler,
    @inject(publishCourseHandlerID)
    private readonly publishCourseHandler: PublishCourseHandler,
    @inject(archiveCourseHandlerID)
    private readonly archiveCourseHandler: ArchiveCourseHandler
  ) {}

  async healthCheck(): Promise<boolean> {
    return true;
  }

  async createInstructor(createInstructorDTO: CreateInstructorDTO): Promise<CreateInstructorResponse> {
    const command = new CreateInstructorCommand(
      createInstructorDTO.name,
      createInstructorDTO.bio
    );
    const instructor = await this.createInstructorHandler.handle(command);
    return CreateInstructorResponse.fromDomain(instructor);
  }

  async getInstructors(getInstructorsDTO: GetInstructorsDTO) {
    const query = new GetInstructorsQuery();
    const instructors = await this.getInstructorsHandler.handle(query);
    return GetInstructorsResponse.fromDomain(instructors);
  }

  async createCourse(createCourseDTO: CreateCourseDTO): Promise<CreateCourseResponse> {
    const command = new CreateCourseCommand(
      createCourseDTO.title,
      createCourseDTO.description,
      createCourseDTO.instructorId
    );
    const course = await this.createCourseHandler.handle(command);
    return CreateCourseResponse.fromDomain(course);
  }

  async getCourses(getCoursesDTO: GetCoursesDTO): Promise<GetCoursesResponse> {
    const query = new GetCoursesQuery();
    const courses = await this.getCoursesHandler.handle(query);
    return GetCoursesResponse.fromDomain(courses);
  }

  async createChapter(createChapterDTO: CreateChapterDTO): Promise<CreateChapterResponse> {
    const command = new CreateChapterCommand(
      createChapterDTO.courseId,
      createChapterDTO.title,
      createChapterDTO.description,
      createChapterDTO.order
    );
    const chapter = await this.createChapterHandler.handle(command);
    return CreateChapterResponse.fromDomain(chapter);
  }

  async getCourseChapters(
    getCourseChaptersDTO: GetCourseChaptersDTO
  ): Promise<GetCourseChaptersResponse> {
    const query = new GetCourseChaptersQuery(getCourseChaptersDTO.courseId);
    const chapters = await this.getCourseChaptersHandler.handle(query);
    return GetCourseChaptersResponse.fromDomain(chapters);
  }

  async createLesson(createLessonDTO: CreateLessonDTO): Promise<CreateLessonResponse> {
    const command = new CreateLessonCommand(
      createLessonDTO.title,
      createLessonDTO.content,
      createLessonDTO.order,
      createLessonDTO.chapterId
    );
    const lesson = await this.createLessonHandler.handle(command);
    return CreateLessonResponse.fromDomain(lesson);
  }

  async getChapterLessons(
    getChapterLessonsDTO: GetChapterLessonsDTO
  ): Promise<GetChapterLessonsResponse> {
    const query = new GetChapterLessonsQuery(getChapterLessonsDTO.chapterId);
    const lessons = await this.getChapterLessonsHandler.handle(query);
    return GetChapterLessonsResponse.fromDomain(lessons);
  }

  async publishCourse(publishCourseDTO: PublishCourseDTO): Promise<PublishCourseResponse> {
    const command = new PublishCourseCommand(publishCourseDTO.courseId);
    const course = await this.publishCourseHandler.handle(command);
    return PublishCourseResponse.fromDomain(course);
  }

  async archiveCourse(archiveCourseDTO: ArchiveCourseDTO): Promise<ArchiveCourseResponse> {
    const command = new ArchiveCourseCommand(archiveCourseDTO.courseId);
    const course = await this.archiveCourseHandler.handle(command);
    return ArchiveCourseResponse.fromDomain(course);
  }
}
