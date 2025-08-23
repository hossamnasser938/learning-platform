import {
  inject,
  injectable,
} from "@l-p/shared/infrastructure/dependency-injection/utils";
import { IInstructorRepo, ICourseRepo } from "../../contracts";
import { Course } from "../../models";
import {
  instructorRepoID,
  courseRepoID,
} from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { uniqueIDGeneratorID } from "@l-p/shared/infrastructure/dependency-injection/tokens";
import { IUniqueIDGenerator } from "@l-p/shared/domain/contracts";
import { ICourseService } from "./ICourseService";
import { InstructorNotFoundException } from "../../models/instructor/exceptions";
import { CourseNotFoundException } from "../../models/course/exceptions";

@injectable()
export class CourseService implements ICourseService {
  constructor(
    @inject(instructorRepoID) private readonly instructorRepo: IInstructorRepo,
    @inject(courseRepoID) private readonly courseRepo: ICourseRepo,
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

  async publishCourse(courseId: string): Promise<Course> {
    const course = await this.assertCourseExists(courseId);

    course.publish();

    return course;
  }

  async archiveCourse(courseId: string): Promise<Course> {
    const course = await this.assertCourseExists(courseId);

    course.archive();

    return course;
  }
}
