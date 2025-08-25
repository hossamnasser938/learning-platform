import { ICoursesApi } from "./ICoursesApi";

import {
  inject,
  injectable,
} from "@l-p/shared/infrastructure/dependency-injection/utils";

import { AddInstructorCommand, AddInstructorHandler } from "@l-p/courses/application/commands/add-instructor";
import { GetInstructorsQuery, GetInstructorsHandler } from "@l-p/courses/application/queries/get-instructors";
import { GetCoursesHandler, GetCoursesQuery } from "@l-p/courses/application/queries/get-courses";
import { CreateCourseHandler, CreateCourseCommand } from "@l-p/courses/application/commands/create-course";
import { CreateChapterCommand, CreateChapterHandler } from "@l-p/courses/application/commands/create-chapter";
import { GetCourseChaptersHandler, GetCourseChaptersQuery } from "@l-p/courses/application/queries/get-course-chapters";
import { CreateLessonCommand, CreateLessonHandler } from "@l-p/courses/application/commands/create-lesson";
import { GetChapterLessonsHandler, GetChapterLessonsQuery } from "@l-p/courses/application/queries/get-chapter-lessons";  
import { PublishCourseCommand, PublishCourseHandler } from "@l-p/courses/application/commands/publish-course";
import { ArchiveCourseCommand, ArchiveCourseHandler } from "@l-p/courses/application/commands/archive-course";

import {
  createChapterHandlerID,
  createCourseHandlerID,
  addInstructorHandlerID,
  createLessonHandlerID,
  getChapterLessonsHandlerID,
  getCourseChaptersHandlerID,
  getCoursesHandlerID,
  getInstructorsHandlerID,
  publishCourseHandlerID,
  archiveCourseHandlerID,
} from "@l-p/courses/infrastructure/dependency-injection/tokens";

import {
  ArchiveCourseResponse,
  CreateChapterResponse,
  CreateCourseResponse,
  AddInstructorResponse,
  CreateLessonResponse,
  PublishCourseResponse,
  GetChapterLessonsResponse,
  GetCourseChaptersResponse,
  GetCoursesResponse,
  GetInstructorsResponse
} from "./responses";

import {
  ArchiveCourseDTO,
  CreateChapterDTO,
  CreateCourseDTO,
  AddInstructorDTO,
  CreateLessonDTO,
  GetInstructorsDTO,
  GetCoursesDTO,
  GetCourseChaptersDTO,
  GetChapterLessonsDTO,
  PublishCourseDTO,
} from "./request-dtos";

@injectable()
export class CoursesApi implements ICoursesApi {
  constructor(
    @inject(addInstructorHandlerID)
    private readonly addInstructorHandler: AddInstructorHandler,
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

  async addInstructor(addInstructorDTO: AddInstructorDTO): Promise<AddInstructorResponse> {
    const command = new AddInstructorCommand(
      addInstructorDTO.name,
      addInstructorDTO.bio
    );
    const instructor = await this.addInstructorHandler.handle(command);
    return AddInstructorResponse.fromDomain(instructor);
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
