const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');

import routes from './src/routes';

const app = new Koa();

app.use(bodyParser());
app.use(logger());
app.use(routes.routes());
app.use(routes.allowedMethods());

app.listen(3000);
