import { hash } from 'bcrypt';

import { ICreateUserDTO } from '../../dtos/internal/create-user.model';
import { IUserResponse, UserResponseDTO } from '../../dtos/response/user.response';
import { getUser } from '../user-query/user-query.service';
import { UserModel } from '../../../../lib/database/models';
import { wrongCredentials } from '../../../../lib/exceptions';
import { environmentConfig } from '../../../../lib/config/environment.config';

export const createUser = async (createUserDto: ICreateUserDTO): Promise<IUserResponse> => {
  const { email } = createUserDto;
  const user = await getUser({ email }, true);

  if (user) {
    return Promise.reject(wrongCredentials());
  }

  return UserModel.create({
    ...createUserDto,
    password: await hash(createUserDto.password, environmentConfig.apiSalt),
  }).then(UserResponseDTO);
};
