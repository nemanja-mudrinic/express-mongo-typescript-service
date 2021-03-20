import { EnvironmentType } from '../types/context.type';
import { devEnv } from '../consts/envirnoment.constant';

export const isDevEnv = (env: EnvironmentType): boolean => env === devEnv;
