import { d as defineMiddleware, s as sequence } from './chunks/index_CzuH4uHz.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_DxKQJjf5.mjs';
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
