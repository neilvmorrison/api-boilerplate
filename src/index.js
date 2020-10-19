import Koa from 'koa';
import logger from 'koa-logger';
import dotenv from 'dotenv';
import bodyParser from 'koa-bodyparser';

import router from './router';
import protectedRoutes from './middleware/protectedRoutes';
import handleErrors from './middleware/errorHandling';

dotenv.config();
const app = new Koa();
const PORT = process.env.PORT || 4000;

app.use(bodyParser());
app.use((ctx, next) => handleErrors(ctx, next));
app.use((ctx, next) => protectedRoutes(ctx, next));
app.use(logger());
app.use(router());

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log("Listening on port: ", PORT);
});
