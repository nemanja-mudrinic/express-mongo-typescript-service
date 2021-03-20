import {ExceptionType} from "../enums/exception.enum";

export class ResourceNotFound extends Error {
  type: ExceptionType = ExceptionType.ResourceNotFound;
}
