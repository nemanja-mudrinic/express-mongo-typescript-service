import * as dotEnv from 'dotenv';
import { isDevEnv } from '../utils/environment.utils';
import { EnvironmentType } from '../types/context.type';

dotEnv.config();

type ServiceEnvironment = {
  serviceName: string;
  port: number;
  apiPrefix: string;
  apiVersion: string;
  apiSalt: number;
  isDev: boolean;
  mongo: {
    user: string;
    password: string;
    host: string;
    port: number;
    database: string;
    useAtlas: boolean;
  };
};

export const environmentConfig: ServiceEnvironment = {
  serviceName: process.env.SERVICE_NAME || 'Nucleus-Mongo-Express-Boilerplate',
  port: +process.env.SERVICE_PORT || 3000,
  apiPrefix: process.env.API_PREFIX || '/api',
  apiVersion: process.env.API_VERSION || 'v1',
  apiSalt: +process.env.API_SALT || 10,
  isDev: isDevEnv(process.env.NODE_ENV as EnvironmentType) || true,
  mongo: {
    user: process.env.MONGO_USER || 'Please enter mongo user',
    password: process.env.MONGO_PASSWORD || 'Please enter mongo password',
    host: process.env.MONGO_HOST || 'localhost',
    port: +process.env.MONGO_PORT || 27017,
    database: process.env.MONGO_DATABASE || 'Please enter database name',
    useAtlas: process.env.MONGO_USE_ATLAS === 'true',
  },
};

// eslint-disable-next-line no-unused-expressions
environmentConfig.isDev && console.log(environmentConfig);
