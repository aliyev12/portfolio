import { defineMiddleware } from "astro/middleware";

const MAINTENANCE_PATH = "/maintenance";

export const onRequest = defineMiddleware((context, next) => {
  const isMaintenance =
    import.meta.env.MAINTENANCE_MODE === "true" ||
    import.meta.env.MAINTENANCE_MODE === true;
  console.log(
    "@@ in middleware and import.meta.env.MAINTENANCE_MODE = ",
    import.meta.env.MAINTENANCE_MODE
  );
  console.log(
    "@@ typeof import.meta.env.MAINTENANCE_MODE = ",
    typeof import.meta.env.MAINTENANCE_MODE
  );

  const check1 =
    import.meta.env.MAINTENANCE_MODE === "true" ||
    import.meta.env.MAINTENANCE_MODE === true;

  console.log("@@ check1 = ", check1);

  console.log("@@ context.url.pathname = ", context.url.pathname);

  const check2 =
    (import.meta.env.MAINTENANCE_MODE === "true" ||
      import.meta.env.MAINTENANCE_MODE === true) &&
    context.url.pathname !== MAINTENANCE_PATH;

  console.log("@@ check2 = ", check2);

  //   console.log('context = ', context);

  if (
    (import.meta.env.MAINTENANCE_MODE === "true" ||
      import.meta.env.MAINTENANCE_MODE === true) &&
    context.url.pathname !== MAINTENANCE_PATH
  ) {
    console.log(
      "@@ redirecting, context.url.pathname = ",
      context.url.pathname
    );
    return Response.redirect(new URL("/maintenance", context.url), 302);
  }

  return next();
});
