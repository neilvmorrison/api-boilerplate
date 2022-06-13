import Router from "koa-router";
import testRouter from "../resources/test/test.router";

const router = new Router();

router.use(testRouter);

export default router.routes();
