import { GetCourseChaptersQuery } from "./GetCourseChaptersQuery";
import { IChapterRepo, ICourseRepo } from "@l-p/courses/domain/contracts";
import { inject, injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { chapterRepoID, courseRepoID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { Chapter } from "@l-p/courses/domain/models";
import { CourseNotFoundException } from "@l-p/courses/domain/models/course/exceptions/CourseException";
import { IGetCourseChaptersHandler } from "./IGetCourseChaptersHandler";

@injectable()
export class GetCourseChaptersHandler implements IGetCourseChaptersHandler
{
  constructor(
    @inject(chapterRepoID) private readonly chapterRepo: IChapterRepo,
    @inject(courseRepoID) private readonly courseRepo: ICourseRepo
  ) {}

  async handle(query: GetCourseChaptersQuery): Promise<Chapter[]> {
    const course = await this.courseRepo.getById(query.courseId);
    if (!course) {
      throw new CourseNotFoundException(query.courseId);
    }

    return await this.chapterRepo.getByCourseId(query.courseId);
  }
}
