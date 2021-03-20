import chalk from 'chalk';

import { formatDate } from './date.utils';

export const logger = (name: string) => {
  const stdOut = (type: 'log' | 'error') => (...args: any[]) => {
    const d = new Date();
    const method = type === 'log' ? chalk.cyan : chalk.red;

    console[type](
      `${method(`Service Name [${name}] (processID: ${process.pid})`)} --  ${method(
        formatDate(d),
      )}`,
    );
    console[type](...args);
  };

  const log = stdOut('log');
  const error = stdOut('error');

  return { log, error };
};
