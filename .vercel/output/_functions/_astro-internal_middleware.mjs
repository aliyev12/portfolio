import { d as defineMiddleware, s as sequence } from './chunks/index_26tC8WH9.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_D0e3Nq7q.mjs';
import 'cookie';

const MAINTENANCE_PATH = "/maintenance";
const onRequest$1 = defineMiddleware((context, next) => {
  if (context.url.pathname === MAINTENANCE_PATH) {
    return Response.redirect(new URL("/", context.url), 302);
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
