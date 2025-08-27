import { 
  CreateCourseDTO, 
  AddInstructorDTO, 
  CreateLessonDTO,
  CreateChapterDTO,
  GetChapterLessonsDTO,
  GetCourseChaptersDTO,
  GetCoursesDTO,
  GetCoursesByIdsDTO,
  GetInstructorsDTO,
  PublishCourseDTO,
  ArchiveCourseDTO
} from "./request-dtos";

import { 
  AddInstructorResponse,
  CreateCourseResponse,
  CreateChapterResponse,
  CreateLessonResponse,
  GetChapterLessonsResponse,
  GetCourseChaptersResponse,
  GetCoursesResponse,
  GetInstructorsResponse,
  PublishCourseResponse,
  ArchiveCourseResponse
} from "./responses";

export interface ICoursesApi {
  healthCheck(): Promise<boolean>;

  addInstructor(addInstructorDTO: AddInstructorDTO): Promise<AddInstructorResponse>;

  getInstructors(
    getInstructorsDTO: GetInstructorsDTO
  ): Promise<GetInstructorsResponse>;

  createCourse(createCourseDTO: CreateCourseDTO): Promise<CreateCourseResponse>;

  getCourses(getCoursesDTO: GetCoursesDTO): Promise<GetCoursesResponse>;

  getCoursesByIds(getCoursesByIdsDTO: GetCoursesByIdsDTO): Promise<GetCoursesResponse>;

  createChapter(createChapterDTO: CreateChapterDTO): Promise<CreateChapterResponse>;

  getCourseChapters(
    getCourseChaptersDTO: GetCourseChaptersDTO
  ): Promise<GetCourseChaptersResponse>;

  createLesson(createLessonDTO: CreateLessonDTO): Promise<CreateLessonResponse>;

  getChapterLessons(
    getChapterLessonsDTO: GetChapterLessonsDTO
  ): Promise<GetChapterLessonsResponse>;

  publishCourse(publishCourseDTO: PublishCourseDTO): Promise<PublishCourseResponse>;

  archiveCourse(archiveCourseDTO: ArchiveCourseDTO): Promise<ArchiveCourseResponse>;
}
