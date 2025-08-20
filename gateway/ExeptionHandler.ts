import {
  EntityNotFoundException,
  InvalidDataException,
} from "@l-p/shared/domain/exceptions";
import { STATUS_CODES } from "./StatusCodes";

export class ExceptionHandler {
  static handle(error: any) {
    if (error instanceof InvalidDataException) {
      return {
        code: STATUS_CODES.GENERIC_CLIENT_ERROR,
        message: error.message,
      };
    }
    if (error instanceof EntityNotFoundException) {
      return {
        code: STATUS_CODES.NOT_FOUND,
        message: error.message,
      };
    }
    return {
      code: STATUS_CODES.GENERIC_SERVER_ERROR,
      message: error.message,
    };
  }
}
