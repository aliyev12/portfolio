import { defineMiddleware } from "astro/middleware";

const MAINTENANCE_PATH = "/maintenance";

export const onRequest = defineMiddleware((context, next) => {
  const isMaintenance = import.meta.env.MAINTENANCE_MODE === "true";

  if (isMaintenance && context.url.pathname !== MAINTENANCE_PATH) {
    return Response.redirect(new URL("/maintenance", context.url), 302);
  }

  return next();
});
