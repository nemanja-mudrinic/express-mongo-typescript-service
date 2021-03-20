import { model, Schema } from 'mongoose';
import { IUserDocument } from '../documents/user.document';

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    minlength: 3,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
  },
}, { timestamps: true });

userSchema.index({ email: 1 });

const userModel = model<IUserDocument>('users', userSchema);

export default userModel;
