import { NextFunction, Request, Response } from 'express';
import Boom from 'boom';

import { logger } from '../utils/logger';
import { ERROR_HANDLER } from '../consts/context.constant';
import { Index } from '../exceptions';
import { ExceptionType } from '../enums/exception.enum';

const Logger = logger(ERROR_HANDLER);

type ExtendedResponse = Response & {
  boom: typeof Boom;
};

export const handleErrors = (err: Index, _: Request, res: ExtendedResponse, next: NextFunction) => {
  if (err.type === ExceptionType.UnauthorizedError) {
    res.boom.unauthorized();
    return;
  }

  if (err.type === ExceptionType.ResourceNotFound || err.type === ExceptionType.BadRequest) {
    res.boom.badRequest('Resource Not Found!', {
      payload: {
        message: err.message,
      },
    });
    return;
  }

  if (err) {
    Logger.error(err);
    res.boom.internal('Something Went Wrong', {
      payload: {
        message: 'The application has encountered an unknown error.',
      },
    });
    return;
  }
  next();
};
