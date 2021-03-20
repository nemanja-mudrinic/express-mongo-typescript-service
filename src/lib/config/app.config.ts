import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import boom from 'express-boom';

const configureApp = (): Application => {
  const app = express();
  app.use(cors());
  app.use(helmet());
  app.use(express.json());
  app.use(hpp());
  app.use(boom());

  return app;
};

export default configureApp;
