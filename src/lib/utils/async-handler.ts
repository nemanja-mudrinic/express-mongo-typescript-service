import { Request, Response, NextFunction, RequestHandler } from 'express';
import { handleErrors } from '../middlewares/handle-error.middleware';

export const asyncHandler = (fn: Function): RequestHandler =>
  ([
    (req: Request, res: Response, next: NextFunction) =>
      Promise.resolve(fn(req, res, next)).catch(next),
    handleErrors,
  ] as unknown) as RequestHandler;
