import { Application, Response } from 'express';

import { Routes } from './routes';
import serviceRouter from '../../api/service/routes/service.routes';
import userRouter from '../../api/user/routes/user.routes';
import authRouter from '../../api/auth/routes/auth.routes';

export const configureApiRoutes = (app: Application) => {
  app.use(Routes.service.root, serviceRouter);
  app.use(Routes.users.root, userRouter);
  app.use(Routes.auth.root, authRouter);
  app.use(Routes.wildCard, (_, res: Response & { boom: any }) => res.boom.notFound());
};
