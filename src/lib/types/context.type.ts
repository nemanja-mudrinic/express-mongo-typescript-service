import { devEnv, prodEnv } from '../consts/envirnoment.constant';

export type EnvironmentType = typeof devEnv | typeof prodEnv;
