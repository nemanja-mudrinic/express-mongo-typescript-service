import { compare } from 'bcrypt';

import { IUserResponse, UserResponseDTO } from '../../user/dtos/response/user-response';
import { getUserDocument } from '../../user/services/user-query/user-query.service';
import { wrongCredentials } from '../../../lib/exceptions';
import { CreateUserDTO } from '../../user/dtos/internal/create-user.model';
import { createUser } from '../../user/services/user-service/user.service';
import { ISignInDTO } from '../dtos/request/sign-in.request';
import { ISignUpDTO } from '../dtos/request/sign-up.request';

export const signInUser = async (signInDto: ISignInDTO): Promise<IUserResponse> => {
  const { email, password } = signInDto;
  const user = await getUserDocument({ email })();

  const isValid = await compare(password, user.password);

  if (!isValid) {
    return Promise.reject(wrongCredentials());
  }

  return UserResponseDTO(user);
};

export const signUpUser = async (signUpDTO: ISignUpDTO): Promise<IUserResponse> =>
  createUser(CreateUserDTO(signUpDTO));
