import { Router } from 'express';
import { celebrate, errors } from 'celebrate';

import { asyncHandler } from '../../../lib/utils/async-handler';
import { signUpHandler } from '../handlers/sign-up.handler';
import { Routes } from '../../../lib/routing/routes';
import { signInHandler } from '../handlers/sign-in.handler';

const authRouter = Router();

authRouter.post(
  Routes.auth.signUp,
  [celebrate(signUpHandler.schema), errors()],
  asyncHandler(signUpHandler.handler),
);

authRouter.post(
  Routes.auth.signIn,
  [celebrate(signInHandler.schema), errors()],
  asyncHandler(signInHandler.handler),
);

export default authRouter;
