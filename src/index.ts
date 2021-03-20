import configureApp from './lib/config/app.config';
import { environmentConfig } from './lib/config/environment.config';
import { db } from './lib/database';
import { configureApiRoutes } from './lib/routing/configure-api.routes';
import { logger } from './lib/utils/logger';
import { APPLICATION_CONTEXT } from './lib/consts/context.constant';

const Logger = logger(APPLICATION_CONTEXT);

(async () => {
  const server = configureApp();
  await db.connect();
  configureApiRoutes(server);
  server.listen(environmentConfig.port, () => Logger.log('Server is up'));
})();
