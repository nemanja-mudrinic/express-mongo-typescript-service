import { Request, Response } from 'express';
import { Joi, Segments } from 'celebrate';

import { signInUser } from '../services/auth.service';
import { SignInDTO } from '../dtos/request/sign-in.request';

const schema = {
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(20).required(),
  }),
};

const handler = async (req: Request, res: Response) => {
  const { body } = req;

  const user = await signInUser(SignInDTO(body));

  res.send(user);
};

export const signInHandler = {
  schema,
  handler,
};
