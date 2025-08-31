import { Container } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { LearnersApi } from "@l-p/learners/api/LearnersApi";
import { EventBusConsumer } from "@l-p/learners/infrastructure/event-bus-consumer";
import { LearnerRepo } from "../repositories/in-memory/LearnerRepo";
import { CourseEnrollmentRepo } from "../repositories/in-memory/CourseEnrollmentRepo";
import { AddLearnerHandler } from "../../application/commands/add-learner/AddLearnerHandler";
import { GetLearnersHandler } from "../../application/queries/get-learners/GetLearnersHandler";
import { GetCourseLearnersHandler } from "../../application/queries/get-course-learners/GetCourseLearnersHandler";
import { EnrollLearnerInCourseHandler } from "../../application/commands/enroll-learner-in-course/EnrollLearnerInCourseHandler";
import { GetLearnerCoursesHandler } from "../../application/queries/get-learner-courses/GetLearnerCoursesHandler";
import { CourseEnrollmentService } from "../../domain/services/course-enrollment/CourseEnrollmentService";
import { CoursesGateway } from "../gateway/CoursesGateway";
import {
  learnerRepoID,
  addLearnerHandlerID,
  learnersApiID, 
  eventBusConsumerID,
  getLearnersHandlerID,
  getCourseLearnersHandlerID,
  courseEnrollmentRepoID,
  enrollLearnerInCourseHandlerID,
  courseEnrollmentServiceID,
  getLearnerCoursesHandlerID,
  coursesGatewayID
} from "./tokens";

export function bindDependencies(container: Container) {
  container.bind(learnersApiID).to(LearnersApi);
  
  container.bind(eventBusConsumerID).to(EventBusConsumer);

  container.bind(addLearnerHandlerID).to(AddLearnerHandler);
  container.bind(getLearnersHandlerID).to(GetLearnersHandler);
  container.bind(getCourseLearnersHandlerID).to(GetCourseLearnersHandler);
  container.bind(enrollLearnerInCourseHandlerID).to(EnrollLearnerInCourseHandler);
  container.bind(getLearnerCoursesHandlerID).to(GetLearnerCoursesHandler);
  container.bind(courseEnrollmentServiceID).to(CourseEnrollmentService);
  container.bind(coursesGatewayID).to(CoursesGateway);
  container.bind(learnerRepoID).to(LearnerRepo).inSingletonScope();
  container.bind(courseEnrollmentRepoID).to(CourseEnrollmentRepo).inSingletonScope();
}