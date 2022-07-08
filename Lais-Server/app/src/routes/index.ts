import * as Router from 'koa-router';

import { signIn, getUsers, addUser, deleteUser } from '../controllers/users';

const routes = new Router();

routes
  .put('/users', signIn)
  .get('/users', getUsers)
  .post('/users', addUser)
  .delete('/users/:_id', deleteUser)

export default routes;
