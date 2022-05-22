import Koa from "koa";
import dotenv from "dotenv";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
import "reflect-metadata";
import { AppDataSource } from "./data-source";

import router from "./routes";

dotenv.config();

AppDataSource.initialize()
  .then(async () => {
    const app: Koa = new Koa();
    const PORT: number = parseInt(process.env.PORT) || 4000;

    app.use(logger());
    app.use(bodyParser());
    app.use(router);

    app.listen(PORT, () => {
      console.log("Listening on port: ", PORT);
    });
  })
  .catch((error) => console.log(error));
