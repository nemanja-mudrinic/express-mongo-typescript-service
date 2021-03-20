import { ITimestampDocument } from './common/timestamp.document';

export interface IUserDocument extends ITimestampDocument {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}
