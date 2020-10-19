import Router from "koa-router";
import { generateToken, verifyToken } from "../functions/auth/token";

const auth = new Router({ prefix: "/auth" });

auth.get("/", async (ctx) => {
  ctx.body = await generateToken("12345");
});

auth.post("/:token", async (ctx) => {
  const { token } = ctx.params;
  try {
    ctx.body = await verifyToken(token);
  } catch (err) {
    ctx.error = 401;
  }
});

export default auth;
