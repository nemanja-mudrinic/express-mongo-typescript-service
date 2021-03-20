import { Request, Response } from 'express';
import { Joi, Segments } from 'celebrate';

import { getUser } from '../services/user-query/user-query.service';

const schema = {
  [Segments.PARAMS]: Joi.object().keys({ id: Joi.string().uuid().required() }),
};

const handler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getUser({ _id: id });
  res.json(user);
};

export const getUserHandler = {
  handler,
  schema,
};
