import { ICommandQueryHandler } from "./ICommandQueryHandler";

export interface ICommandHandler<TCommand, TResult = void>
  extends ICommandQueryHandler<TCommand, TResult> {}
