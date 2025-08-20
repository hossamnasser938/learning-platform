import { ILearnersApi } from "@l-p/learners/api/ILearnersApi";
import { ServiceIdentifier } from "@l-p/shared/infrastructure/dependency-injection/utils";

export const learnersApiID: ServiceIdentifier<ILearnersApi> =
  Symbol.for("LearnersApi");
