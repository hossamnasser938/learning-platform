import { Container } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { LearnersApi } from "@l-p/learners/api/LearnersApi";
import { EventBusConsumer } from "@l-p/learners/infrastructure/event-bus-consumer";
import { LearnerRepo } from "../repositories/in-memory/LearnerRepo";
import { CourseEnrollmentRepo } from "../repositories/in-memory/CourseEnrollmentRepo";
import { AddLearnerHandler } from "../../application/commands/add-learner/AddLearnerHandler";
import { GetLearnersHandler } from "../../application/queries/get-learners/GetLearnersHandler";
import { EnrollLearnerInCourseHandler } from "../../application/commands/enroll-learner-in-course/EnrollLearnerInCourseHandler";
import { CourseEnrollmentService } from "../../domain/services/course-enrollment/CourseEnrollmentService";
import {
  learnerRepoID,
  addLearnerHandlerID,
  learnersApiID, 
  eventBusConsumerID,
  getLearnersHandlerID,
  courseEnrollmentRepoID,
  enrollLearnerInCourseHandlerID,
  courseEnrollmentServiceID
} from "./tokens";

export function bindDependencies(container: Container) {
  container.bind(learnersApiID).to(LearnersApi);
  
  container.bind(eventBusConsumerID).to(EventBusConsumer);

  container.bind(addLearnerHandlerID).to(AddLearnerHandler);
  container.bind(getLearnersHandlerID).to(GetLearnersHandler);
  container.bind(enrollLearnerInCourseHandlerID).to(EnrollLearnerInCourseHandler);
  container.bind(courseEnrollmentServiceID).to(CourseEnrollmentService);
  container.bind(learnerRepoID).to(LearnerRepo).inSingletonScope();
  container.bind(courseEnrollmentRepoID).to(CourseEnrollmentRepo).inSingletonScope();
}