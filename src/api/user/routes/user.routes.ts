import { Router } from 'express';
import { celebrate, errors } from 'celebrate';

import { Routes } from '../../../lib/routing/routes';
import { asyncHandler } from '../../../lib/utils/async-handler';
import { getUsersHandler } from '../handlers/get-users.handler';
import { getUserHandler } from '../handlers/get-user.handler';

const userRouter = Router();

userRouter.get(Routes.users.getUsers, asyncHandler(getUsersHandler.handler));
userRouter.get(
  Routes.users.getUser,
  [celebrate(getUserHandler.schema), errors()],
  asyncHandler(getUserHandler.handler),
);

export default userRouter;
