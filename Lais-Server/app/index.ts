const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');

import mongoose from 'mongoose';
import routes from './src/routes';

mongoose.connect('mongodb://db:27017/users');

const app = new Koa();

app.use(bodyParser());
app.use(logger());
app.use(routes.routes());
app.use(routes.allowedMethods());

app.listen(3000);
