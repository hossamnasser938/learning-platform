import { IChapterService } from "./IChapterService";
import { Chapter } from "../../models";
import { ICourseRepo } from "../../contracts";
import { IUniqueIDGenerator } from "@l-p/shared/domain/contracts";
import { inject, injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { courseRepoID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { uniqueIDGeneratorId } from "@l-p/shared/infrastructure/dependency-injection/tokens";
import { CourseNotFoundException } from "../../models/course/exceptions";

@injectable()
export class ChapterService implements IChapterService {
  constructor(
    @inject(courseRepoID) private readonly courseRepo: ICourseRepo,
    @inject(uniqueIDGeneratorId) private readonly idGenerator: IUniqueIDGenerator
  ) {}

  async createNewChapter(
    title: string,
    description: string,
    order: number,
    courseId: string
  ): Promise<Chapter> {
    const course = await this.courseRepo.getById(courseId);
    
    const courseExists = !!course;
    if (!courseExists) {
      throw new CourseNotFoundException(courseId);
    }

    const chapterId = this.idGenerator.generate();

    const chapter = Chapter.newChapter(chapterId, title, description, order, courseId);

    course.addChapter(chapter);

    return chapter;
  }
}
