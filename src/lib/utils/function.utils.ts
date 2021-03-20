import { pick } from 'ramda';

export const lazyPick = <T>(keys: Array<keyof T>) => (data: T | Partial<T>) => pick(keys, data);
export const defaultDbCallback = <T>() => (document: T): any => document;
