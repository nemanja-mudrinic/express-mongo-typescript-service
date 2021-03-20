import { ResourceNotFound } from './resource-not-found.exception';
import { BadRequest } from './bad-request.exception';
import { ExceptionType } from '../enums/exception.enum';

export type Index = Error & {
  type: ExceptionType;
};

export const resourceNotFound = (message: string) => new ResourceNotFound(message);

export const wrongCredentials = () => new BadRequest('Wrong credentials');
