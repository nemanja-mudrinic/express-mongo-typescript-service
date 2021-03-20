import { FilterQuery } from 'mongoose';

import { UserModel } from '../../../../lib/database/models';
import { IUserResponse, UserResponseDTO } from '../../dtos/response/user-response';
import { IUserDocument } from '../../../../lib/database/documents/user.document';
import { defaultDbCallback, lazyPick } from '../../../../lib/utils/function.utils';

const getUserFilters = lazyPick<IUserDocument>(['_id', 'email']);

export const getUserDocument = (criteria) => (callback = defaultDbCallback<IUserDocument>()) =>
  UserModel.findOne(criteria).then(callback);

export const getUserDocuments = (filters: FilterQuery<IUserDocument> = {}) => (
  callback = defaultDbCallback<IUserDocument[]>(),
) => UserModel.find(filters).then(callback);

export const getUsers = async (): Promise<IUserResponse[]> =>
  getUserDocuments()((users) => users.map((user) => UserResponseDTO(user)));

export const getUser = async (
  findBy: Partial<IUserDocument> = {},
  skipError = false,
): Promise<IUserResponse> => {
  const filter = getUserFilters(findBy);
  return getUserDocument(filter)((user) => UserResponseDTO(user, skipError));
};
