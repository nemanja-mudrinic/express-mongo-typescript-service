import { Document } from 'mongoose';

export interface ITimestampDocument extends Partial<Document> {
  createdAt: Date;
  updatedAt: Date;
}
