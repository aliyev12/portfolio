import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C9GTjA-t.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_CNWx2KeK.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>About page</h1> ` })}`;
}, "/Users/abdulaliyev/projects/portfolio/src/pages/about.astro", void 0);

const $$file = "/Users/abdulaliyev/projects/portfolio/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
