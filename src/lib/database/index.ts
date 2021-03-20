import mongoose from 'mongoose';

import { logger } from '../utils/logger';
import { DATABASE_CONTEXT } from '../consts/context.constant';
import { environmentConfig } from '../config/environment.config';

const Logger = logger(DATABASE_CONTEXT);

const getMongoUrl = (): string => {
  if (environmentConfig.mongo.useAtlas) {
    return `mongodb+srv://${environmentConfig.mongo.user}:${environmentConfig.mongo.password}@${environmentConfig.mongo.host}/${environmentConfig.mongo.database}?retryWrites=true&w=majority`;
  }
  return `mongodb://${environmentConfig.mongo.host}:${environmentConfig.mongo.port}/${environmentConfig.mongo.database}`;
};

const connect = async () => {
  try {
    await mongoose.connect(getMongoUrl(), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.set('debug', environmentConfig.isDev);
    Logger.log('Connected to database');
  } catch (e) {
    Logger.error('Failed to connect to database ', e);
    process.exit(1);
  }
};

export const db = {
  connect,
  utils: {
    toObjectId: mongoose.Types.ObjectId,
  },
};
