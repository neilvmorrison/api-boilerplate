import { verifyToken } from "../functions/auth/token";

const protectedUrls = [""];

function isProtectedRoute(url) {
  return protectedUrls.includes(url);
}

async function tokenIsValid(token) {
  return verifyToken(token);
}

async function protectedRoutes(ctx, next) {
  const { request } = ctx;
  const { header, url } = request;
  if (!isProtectedRoute(url)) {
    return next();
  }
  const bearer = header.authorization;
  const token = bearer.split("Bearer ")[1];
  return (await tokenIsValid(token)) && next();
}

export default protectedRoutes;
