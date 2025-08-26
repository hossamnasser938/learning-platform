export interface ICourseEnrollmentRepo {
  getLearnerEnrollments(learnerId: string): Promise<string[]>;
  getCourseEnrollments(courseId: string): Promise<string[]>;
  addEnrollment(learnerId: string, courseId: string): Promise<void>;
  removeEnrollment(learnerId: string, courseId: string): Promise<void>;
  isEnrolled(learnerId: string, courseId: string): Promise<boolean>;
}
