import { Request, Response } from 'express';
import { Joi, Segments } from 'celebrate';

import { signUpUser } from '../services/auth.service';
import { SignUpDTO } from '../dtos/request/sign-up.request';

const schema = {
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(20).required(),
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
  }),
};

const handler = async (req: Request, res: Response) => {
  const { body } = req;

  const createdUser = await signUpUser(SignUpDTO(body));

  res.status(201).send(createdUser);
};

export const signUpHandler = {
  schema,
  handler,
};
