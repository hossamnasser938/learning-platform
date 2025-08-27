import { container } from "@l-p/shared/infrastructure/dependency-injection";
import { ILearnersApi } from "./ILearnersApi";
import { IEventBusConsumer } from "@l-p/shared/domain/contracts";
import { eventBusConsumerID, addLearnerHandlerID, getLearnersHandlerID, enrollLearnerInCourseHandlerID, getLearnerCoursesHandlerID } from "../infrastructure/dependency-injection/tokens";
import { AddLearnerCommand, IAddLearnerHandler } from "../application/commands/add-learner";
import { GetLearnersQuery, IGetLearnersHandler } from "../application/queries/get-learners";
import { EnrollLearnerInCourseCommand, IEnrollLearnerInCourseHandler } from "../application/commands/enroll-learner-in-course";
import { GetLearnerCoursesQuery, IGetLearnerCoursesHandler } from "../application/queries/get-learner-courses";
import { AddLearnerDTO, EnrollLearnerInCourseDTO, GetLearnerCoursesDTO } from "./request-dtos";
import { AddLearnerResponse, GetLearnersResponse, EnrollLearnerInCourseResponse } from "./responses";
import { GetCoursesResponse } from "@l-p/courses/api/responses";
import { EnumMapper } from "@l-p/shared/infrastructure/mappers";
import { Country, CourseCategory } from "../domain/models";
import { inject } from "@l-p/shared/infrastructure/dependency-injection/utils";

export class LearnersApi implements ILearnersApi {

  constructor(
    @inject(addLearnerHandlerID) private readonly addLearnerHandler: IAddLearnerHandler,
    @inject(getLearnersHandlerID) private readonly getLearnersHandler: IGetLearnersHandler,
    @inject(enrollLearnerInCourseHandlerID) private readonly enrollLearnerInCourseHandler: IEnrollLearnerInCourseHandler,
    @inject(getLearnerCoursesHandlerID) private readonly getLearnerCoursesHandler: IGetLearnerCoursesHandler
  ) {}

  async healthCheck(): Promise<boolean> {
    return true;
  }

  async startService(): Promise<void> {
    const eventBusConsumer = container.get<IEventBusConsumer>(eventBusConsumerID);
    eventBusConsumer.start();
  }

  async addLearner(dto: AddLearnerDTO): Promise<AddLearnerResponse> {
    const country = EnumMapper.map(dto.country, Country);
    const courseCategories = EnumMapper.mapArray(dto.preferredCourseCategories, CourseCategory);

    const command = new AddLearnerCommand(dto.name, dto.age, country, courseCategories);

    const learner = await this.addLearnerHandler.handle(command);
    
    return AddLearnerResponse.fromDomain(learner);
  }

  async getLearners(getLearnersQuery: GetLearnersQuery): Promise<GetLearnersResponse> {
    const learners = await this.getLearnersHandler.handle(getLearnersQuery);
    return GetLearnersResponse.fromDomain(learners);
  }

  async enrollLearnerInCourse(dto: EnrollLearnerInCourseDTO): Promise<EnrollLearnerInCourseResponse> {
    const command = new EnrollLearnerInCourseCommand(dto.learnerId, dto.courseId);
    
    await this.enrollLearnerInCourseHandler.handle(command);

    return new EnrollLearnerInCourseResponse();
  }

  async getLearnerCourses(dto: GetLearnerCoursesDTO): Promise<GetCoursesResponse> {
    const query = new GetLearnerCoursesQuery(dto.learnerId);
    
    return await this.getLearnerCoursesHandler.handle(query);
  }
}
