import {
  inject,
  injectable,
} from "@l-p/shared/infrastructure/dependency-injection/utils";
import { 
  IInstructorRepo, 
  ICourseRepo, 
  IChapterRepo 
} from "../../contracts";
import { Course, Chapter, Lesson } from "../../models";
import {
  instructorRepoID,
  courseRepoID,
  chapterRepoID,
} from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { uniqueIDGeneratorID } from "@l-p/shared/infrastructure/dependency-injection/tokens";
import { IUniqueIDGenerator } from "@l-p/shared/domain/contracts";
import { ICourseCreationService } from "./ICourseCreationService";
import { InstructorNotFoundException } from "../../models/instructor/exceptions";
import { CourseNotFoundException } from "../../models/course/exceptions";
import { ChapterNotFoundException } from "../../models/chapter/exceptions/ChapterExceptions";

@injectable()
export class CourseCreationService implements ICourseCreationService {
  constructor(
    @inject(instructorRepoID) private readonly instructorRepo: IInstructorRepo,
    @inject(courseRepoID) private readonly courseRepo: ICourseRepo,
    @inject(chapterRepoID) private readonly chapterRepo: IChapterRepo,
    @inject(uniqueIDGeneratorID)
    private readonly idGenerator: IUniqueIDGenerator
  ) {}

  private async assertInstructorExists(instructorId: string) {
    const instructor = await this.instructorRepo.getById(instructorId);

    const instructorExists = !!instructor;
    if (!instructorExists) {
      throw new InstructorNotFoundException(instructorId);
    }

    return instructor;
  }

  private async assertCourseExists(courseId: string) {
    const course = await this.courseRepo.getById(courseId);

    const courseExists = !!course;
    if (!courseExists) {
      throw new CourseNotFoundException(courseId);
    }

    return course;
  }

  private async assertChapterExists(chapterId: string) {
    const chapter = await this.chapterRepo.getById(chapterId);

    const chapterExists = !!chapter;
    if (!chapterExists) {
      throw new ChapterNotFoundException(chapterId);
    }

    return chapter;
  }

  async createNewCourse(
    title: string,
    description: string,
    instructorId: string
  ): Promise<Course> {
    const instructor = await this.assertInstructorExists(instructorId);

    const courseId = this.idGenerator.generate();
    const course = Course.newCourse(courseId, title, description, instructorId);

    instructor.addCourse(course);

    return course;
  }

  async createNewChapter(
    title: string,
    description: string,
    order: number,
    courseId: string
  ): Promise<Chapter> {
    const course = await this.assertCourseExists(courseId);

    const chapterId = this.idGenerator.generate();
    const chapter = Chapter.newChapter(
      chapterId,
      title,
      description,
      order,
      courseId
    );

    course.addChapter(chapter);

    return chapter;
  }

  async createNewLesson(
    title: string,
    content: string,
    order: number,
    chapterId: string
  ): Promise<Lesson> {
    const chapter = await this.assertChapterExists(chapterId);

    const lessonId = this.idGenerator.generate();
    const lesson = Lesson.newLesson(lessonId, title, content, order, chapterId);

    chapter.addLesson(lesson);

    return lesson;
  }
}
