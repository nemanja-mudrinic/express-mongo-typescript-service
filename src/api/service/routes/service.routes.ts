import { Router, Request, Response } from 'express';
import os from 'os';
import util from 'util';
import { exec } from 'child_process';

import { environmentConfig } from '../../../lib/config/environment.config';
import { formatDate } from '../../../lib/utils/date.utils';
import { Routes } from '../../../lib/routing/routes';
import { asyncHandler } from '../../../lib/utils/async-handler';

const serviceRouter = Router();

const started = formatDate(new Date());

const healthCheck = async (req: Request, res: Response) => {
  const execCommand = util.promisify(exec);

  const connections = {};
  const { stdout: exposedPort } = await execCommand('netstat -an | grep :80 | wc -l');
  connections['80'] = parseInt(exposedPort, 10);

  const { stdout: serverPort } = await execCommand(
    `netstat -an | grep :${environmentConfig.port} | wc -l`,
  );
  connections[environmentConfig.port] = parseInt(serverPort, 10);

  const { stdout: swap } = await execCommand(
    'vmstat -SM -s | grep "used swap" | sed -E "s/[^0-9]*([0-9]{1,8}).*/\\1/"',
  );

  res.send({
    status: 'up',
    version: environmentConfig.apiVersion,
    startedAt: started,
    node: {
      version: process.version,
      memoryUsage: `${Math.round(process.memoryUsage().rss / 1024 / 1024)}M`,
      uptime: process.uptime(),
    },
    system: {
      loadavg: os.loadavg(),
      freeMemory: `${Math.round(os.freemem() / 1024 / 1024)}M`,
    },
    env: process.env.NODE_ENV,
    hostname: os.hostname(),
    connections,
    swap,
  });
};

serviceRouter.get(Routes.service.healthCheck, asyncHandler(healthCheck));

export default serviceRouter;
