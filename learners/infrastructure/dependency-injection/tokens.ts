import { ServiceIdentifier } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { ILearnersApi } from "@l-p/learners/api/ILearnersApi";
import { IEventBusConsumer } from "@l-p/shared/domain/contracts";
import { ILearnerRepo, ICourseEnrollmentRepo } from "../../domain/contracts";
import { IAddLearnerHandler } from "../../application/commands/add-learner";
import { IGetLearnersHandler } from "../../application/queries/get-learners";
import { IGetCourseLearnersHandler } from "../../application/queries/get-course-learners";
import { IEnrollLearnerInCourseHandler } from "../../application/commands/enroll-learner-in-course";
import { IGetLearnerCoursesHandler } from "../../application/queries/get-learner-courses";
import { ICourseEnrollmentService } from "../../domain/services";
import { ICoursesGateway } from "../gateway";

export const learnersApiID: ServiceIdentifier<ILearnersApi> =
  Symbol.for("LearnersApi");
export const eventBusConsumerID: ServiceIdentifier<IEventBusConsumer> =
  Symbol.for("EventBusConsumer");

export const addLearnerHandlerID: ServiceIdentifier<IAddLearnerHandler> =
  Symbol.for("IAddLearnerHandler");
export const getLearnersHandlerID: ServiceIdentifier<IGetLearnersHandler> =
  Symbol.for("IGetLearnersHandler");
export const getCourseLearnersHandlerID: ServiceIdentifier<IGetCourseLearnersHandler> =
  Symbol.for("IGetCourseLearnersHandler");
export const enrollLearnerInCourseHandlerID: ServiceIdentifier<IEnrollLearnerInCourseHandler> =
  Symbol.for("IEnrollLearnerInCourseHandler");
export const getLearnerCoursesHandlerID: ServiceIdentifier<IGetLearnerCoursesHandler> =
  Symbol.for("IGetLearnerCoursesHandler");
export const courseEnrollmentServiceID: ServiceIdentifier<ICourseEnrollmentService> =
  Symbol.for("ICourseEnrollmentService");
export const coursesGatewayID: ServiceIdentifier<ICoursesGateway> =
  Symbol.for("ICoursesGateway");
export const learnerRepoID: ServiceIdentifier<ILearnerRepo> = Symbol.for(
  "LearnerRepository"
);
export const courseEnrollmentRepoID: ServiceIdentifier<ICourseEnrollmentRepo> = Symbol.for(
  "CourseEnrollmentRepository"
);