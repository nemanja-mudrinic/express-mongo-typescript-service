import {ExceptionType} from "../enums/exception.enum";

export class BadRequest extends Error {
  type: ExceptionType = ExceptionType.BadRequest;
}
