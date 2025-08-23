export class CourseServiceException extends Error {
    constructor(message: string) {
        super(message);
    }
}

export class InstructorNotFoundException extends CourseServiceException {
    constructor(instructorId: string) {
        super(`Instructor with id ${instructorId} not found`);
    }
}