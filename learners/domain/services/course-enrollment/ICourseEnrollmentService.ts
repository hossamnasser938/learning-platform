import { Learner } from "../../models";

export interface ICourseEnrollmentService {
  enrollLearnerInCourse(learnerId: string, courseId: string): Promise<Learner>;
}
