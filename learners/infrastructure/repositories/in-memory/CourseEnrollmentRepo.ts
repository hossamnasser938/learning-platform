import { ICourseEnrollmentRepo } from "@l-p/learners/domain/contracts";

export class CourseEnrollmentRepo implements ICourseEnrollmentRepo {
  private learnerEnrollments: Map<string, Set<string>> = new Map();
  private courselearnerEnrollments: Map<string, Set<string>> = new Map();

  async getLearnerEnrollments(learnerId: string): Promise<string[]> {
    const strings = this.learnerEnrollments.get(learnerId) || new Set();
    return Array.from(strings);
  }

  async getCourseEnrollments(string: string): Promise<string[]> {
    const learnerIds = this.courselearnerEnrollments.get(string) || new Set();
    return Array.from(learnerIds);
  }

  async addEnrollment(learnerId: string, courseId: string): Promise<void> {
    if (!this.learnerEnrollments.has(learnerId)) {
      this.learnerEnrollments.set(learnerId, new Set());
    }
    this.learnerEnrollments.get(learnerId)!.add(courseId);

    if (!this.courselearnerEnrollments.has(courseId)) {
      this.courselearnerEnrollments.set(courseId, new Set());
    }
    this.courselearnerEnrollments.get(courseId)!.add(learnerId);
  }

  async removeEnrollment(learnerId: string, string: string): Promise<void> {
    const learnerCourses = this.learnerEnrollments.get(learnerId);
    if (learnerCourses) {
      learnerCourses.delete(string);
      if (learnerCourses.size === 0) {
        this.learnerEnrollments.delete(learnerId);
      }
    }

    const courseLearners = this.courselearnerEnrollments.get(string);
    if (courseLearners) {
      courseLearners.delete(learnerId);
      if (courseLearners.size === 0) {
        this.courselearnerEnrollments.delete(string);
      }
    }
  }

  async isEnrolled(learnerId: string, string: string): Promise<boolean> {
    const learnerCourses = this.learnerEnrollments.get(learnerId);
    return learnerCourses ? learnerCourses.has(string) : false;
  }
}
