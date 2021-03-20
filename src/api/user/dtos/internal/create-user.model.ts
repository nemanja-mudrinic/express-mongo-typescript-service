import { ISignUpDTO } from '../../../auth/dtos/request/sign-up.request';

export interface ICreateUserDTO {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const CreateUserDTO = (createUser: ISignUpDTO): ICreateUserDTO => {
  if (!createUser) {
    return null;
  }

  const { firstName, lastName, email, password } = createUser;

  return {
    firstName,
    lastName,
    password,
    email,
  };
};
