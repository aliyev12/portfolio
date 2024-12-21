import { defineMiddleware } from "astro/middleware";

const MAINTENANCE_PATH = "/maintenance";

export const onRequest = defineMiddleware((context, next) => {
  const isMaintenance = import.meta.env.MAINTENANCE_MODE === "true";
  console.log(
    "@@ in middleware and import.meta.env.MAINTENANCE_MODE = ",
    import.meta.env.MAINTENANCE_MODE
  );
  console.log(
    "@@ typeof import.meta.env.MAINTENANCE_MODE = ",
    typeof import.meta.env.MAINTENANCE_MODE
  );

  if (isMaintenance && context.url.pathname !== MAINTENANCE_PATH) {
    console.log(
      "@@ redirecting, context.url.pathname = ",
      context.url.pathname
    );
    return Response.redirect(new URL("/maintenance", context.url), 302);
  }

  return next();
});
