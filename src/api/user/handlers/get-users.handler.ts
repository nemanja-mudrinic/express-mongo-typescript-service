import { Request, Response } from 'express';
import { getUsers } from '../services/user-query/user-query.service';

const handler = async (req: Request, res: Response) => {
  const users = await getUsers();
  res.json(users);
};

export const getUsersHandler = {
  handler,
};
