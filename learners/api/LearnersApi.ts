import { container } from "@l-p/shared/infrastructure/dependency-injection";
import { ILearnersApi } from "./ILearnersApi";
import { IEventBusConsumer } from "@l-p/shared/domain/contracts";
import { eventBusConsumerID, addLearnerHandlerID } from "../infrastructure/dependency-injection/tokens";
import { AddLearnerCommand, IAddLearnerHandler } from "../application/commands/add-learner";
import { AddLearnerDTO } from "./request-dtos";
import { AddLearnerResponse } from "./responses";
import { EnumMapper } from "@l-p/shared/infrastructure/mappers";
import { Country, CourseCategory } from "../domain/models";
import { inject } from "@l-p/shared/infrastructure/dependency-injection/utils";

export class LearnersApi implements ILearnersApi {

  constructor(
    @inject(addLearnerHandlerID) private readonly addLearnerHandler: IAddLearnerHandler
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
}
