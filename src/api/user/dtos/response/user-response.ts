import { IUserDocument } from '../../../../lib/database/documents/user.document';
import { resourceNotFound } from '../../../../lib/exceptions';

export interface IUserResponse {
  email: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
}

export const UserResponseDTO = (user: IUserDocument, skipError = false): Promise<IUserResponse> =>
  new Promise((resolve, reject) => {
    if (!user) {
      if (!skipError) {
        reject(resourceNotFound('User not found'));
      }
      return resolve(null);
    }

    const { firstName, createdAt, updatedAt, email, lastName } = user;

    return resolve({
      firstName,
      lastName,
      email,
      createdAt,
      updatedAt,
    });
  });
