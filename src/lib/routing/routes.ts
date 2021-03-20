import { environmentConfig } from '../config/environment.config';

const baseApiRoute = (path = '') =>
  `${environmentConfig.apiPrefix}/${environmentConfig.apiVersion}${path}`;

const serviceStatusRoute = () => baseApiRoute('/status');
const usersRoute = () => baseApiRoute('/users');
const authRoute = () => baseApiRoute('/auth');

export const Routes = Object.freeze({
  service: {
    root: serviceStatusRoute(),
    healthCheck: '/health-check',
  },
  users: {
    root: usersRoute(),
    getUsers: '/',
    getUser: '/:id',
  },
  auth: {
    root: authRoute(),
    signUp: '/sign-up',
    signIn: '/sign-in',
  },
  wildCard: '*',
});
