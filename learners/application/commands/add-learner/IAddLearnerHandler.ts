import { Learner } from "../../../domain/models/learner/Learner";
import { ICommandHandler } from "@l-p/shared/domain/contracts";
import { AddLearnerCommand } from "./AddLearnerCommand";

export interface IAddLearnerHandler
  extends ICommandHandler<AddLearnerCommand, Learner> {}
