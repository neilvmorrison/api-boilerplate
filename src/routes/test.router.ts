import Router from "koa-router";
import testService from "../services/test.service";

const router = new Router({ prefix: "/test" });

router.get("/", async (ctx) => {
  ctx.body = "Test!";
});

router.post("/", async (ctx) => {
  const { body } = ctx.request;
  ctx.body = await testService.create(body);
});

export default router.routes();
