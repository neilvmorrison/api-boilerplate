import combineRouters from "koa-combine-routers";
import Router from "koa-router";
import testFunc from "../functions/testFunc";
import auth from "./auth";

const router = new Router({ prefix: "/test" });

router.get("/", async (ctx) => {
  ctx.body = testFunc();
});

export default combineRouters(router, auth);
