import { inject, injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { IInstructorRepo } from "../../contracts/IInstructorRepo";
import { Course } from "../../models/course/Course";
import { instructorRepoID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { InstructorNotFoundException } from "./exceptions/CourseServiceExptions";
import { uniqueIDGeneratorId } from "@l-p/shared/infrastructure/dependency-injection/tokens";
import { IUniqueIDGenerator } from "@l-p/shared/domain/contracts";
import { ICourseService } from "./ICourseService";

@injectable()
export class CourseService implements ICourseService {
    constructor(
        @inject(instructorRepoID) private readonly instructorRepo: IInstructorRepo,
        @inject(uniqueIDGeneratorId) private readonly idGenerator: IUniqueIDGenerator) {}

    async createNewCourse(title: string, description: string, instructorId: string): Promise<Course> {
        const instructor = await this.instructorRepo.getById(instructorId);
        
        const instructorExists = !!instructor;
        if (!instructorExists) {
            throw new InstructorNotFoundException(instructorId);
        }

        const courseId = this.idGenerator.generate();
        
        const course = Course.newCourse(courseId, title, description, instructorId);

        instructor.addCourse(course);

        return course;
    }
}