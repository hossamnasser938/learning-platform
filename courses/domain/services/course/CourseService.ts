import { inject } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { IInstructorRepo } from "../../contracts/IInstructorRepo";
import { Course } from "../../models/course/Course";
import { instructorRepoID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { InstructorNotFoundException } from "./exceptions/CourseServiceExptions";
import { uniqueIDGeneratorId } from "@l-p/shared/infrastructure/dependency-injection/tokens";
import { IUniqueIDGenerator } from "@l-p/shared/domain/contracts";
import { Instructor } from "../../models/instructor/Instructor";

export class CourseService {
    constructor(
        @inject(instructorRepoID) private readonly instructorRepo: IInstructorRepo,
        @inject(uniqueIDGeneratorId) private readonly idGenerator: IUniqueIDGenerator) {}

    async createNewCourse(title: string, description: string, instructorId: string): Promise<{course: Course, instructor: Instructor}> {
        const instructor = await this.instructorRepo.getById(instructorId);
        const instructorExists = !!instructor;

        if (!instructorExists) {
            throw new InstructorNotFoundException(instructorId);
        }

        const courseId = this.idGenerator.generate();
        
        const course = Course.newCourse(courseId, title, description, instructorId);
        return {course, instructor};
    }
}