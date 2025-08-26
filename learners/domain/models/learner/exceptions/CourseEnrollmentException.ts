import { DomainException, ExceptionType } from "@l-p/shared/domain/exceptions";

export class CourseEnrollmentException extends DomainException {
  constructor(message: string, exceptionType: ExceptionType = ExceptionType.INVALID_DATA) {
    super(message, exceptionType);
  }
}

export class LearnerAlreadyEnrolledException extends CourseEnrollmentException {
  constructor(learnerId: string, courseId: string) {
    super(`Learner ${learnerId} is already enrolled in course ${courseId}`, ExceptionType.INVALID_DATA);
  }
}
