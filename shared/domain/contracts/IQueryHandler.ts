import { ICommandQueryHandler } from "./ICommandQueryHandler";

export interface IQueryHandler<TQuery, TResult = void>
  extends ICommandQueryHandler<TQuery, TResult> {}
