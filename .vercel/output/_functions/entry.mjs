import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_8MeHGWqb.mjs';
import { manifest } from './manifest_DjuZSww5.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/api/email.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/maintenance.astro.mjs');
const _page6 = () => import('./pages/projects.astro.mjs');
const _page7 = () => import('./pages/projects/_---slug_.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/contact.ts", _page2],
    ["src/pages/api/email.ts", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/maintenance.astro", _page5],
    ["src/pages/projects/index.astro", _page6],
    ["src/pages/projects/[...slug].astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "594dd187-85b6-41db-abac-9de4f44106fd",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
