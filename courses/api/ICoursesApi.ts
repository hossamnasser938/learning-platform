import { 
  CreateCourseDTO, 
  AddInstructorDTO, 
  CreateLessonDTO,
  CreateChapterDTO,
  GetChapterLessonsDTO,
  GetCourseChaptersDTO,
  GetCoursesDTO,
  GetCoursesByIdsDTO,
  GetCourseByIdDTO,
  GetInstructorsDTO,
  PublishCourseDTO,
  ArchiveCourseDTO,
  GetCourseLearnersDTO
} from "./request-dtos";

import { 
  AddInstructorResponse,
  CreateCourseResponse,
  CreateChapterResponse,
  CreateLessonResponse,
  GetChapterLessonsResponse,
  GetCourseChaptersResponse,
  GetCoursesResponse,
  GetCourseByIdResponse,
  GetInstructorsResponse,
  PublishCourseResponse,
  ArchiveCourseResponse,
  GetCourseLearnersResponse
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

  getCourseById(getCourseByIdDTO: GetCourseByIdDTO): Promise<GetCourseByIdResponse>;

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

  getCourseLearners(getCourseLearnersDTO: GetCourseLearnersDTO): Promise<GetCourseLearnersResponse>;
}
