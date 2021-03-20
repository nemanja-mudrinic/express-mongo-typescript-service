import { Document } from 'mongoose';

import { ITimestampDocument } from './common/timestamp.document';

export interface IUserDocument extends Document, ITimestampDocument {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}
