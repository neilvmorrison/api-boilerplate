import { Context } from "koa";
import Router from "koa-router";
import testService from "./test.service";

const router = new Router({ prefix: "/test" });

router.get("/", async (ctx) => {
  const { test } = ctx.query;
  if (test) {
    return (ctx.body = await testService.findManyWhere({ test }));
  }
  ctx.body = await testService.findAll();
});

router.get("/:id", async (ctx: Context) => {
  const { id } = ctx.params;
  ctx.body = await testService.findOne(id);
});

router.post("/", async (ctx) => {
  const { body } = ctx.request;
  ctx.body = await testService.create(body);
});

router.patch("/:id", async (ctx: Context) => {
  const { id } = ctx.params;
  const { body } = ctx.request;
  ctx.body = await testService.findOneAndUpdate(id, body);
});

router.delete("/:id", async (ctx: Context) => {
  const { id } = ctx.params;
  ctx.body = await testService.delete(id);
});

export default router.routes();
