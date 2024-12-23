import { a as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_BejUaFnn.mjs';
import 'kleur/colors';
import { $ as $$Projects } from '../chunks/Projects_B2DQz_IG.mjs';
import { $ as $$BreadCrumbs } from '../chunks/BreadCrumbs_CbAiUHrE.mjs';
import { $ as $$Separator } from '../chunks/Separator_Q5zqhHer.mjs';
import { b as $$MainLayout } from '../chunks/MainLayout_CHfxH17T.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BreadCrumbs", $$BreadCrumbs, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Separator", $$Separator, {})} ` })}`;
}, "/Users/abdulaliyev/projects/portfolio/src/pages/projects/index.astro", void 0);

const $$file = "/Users/abdulaliyev/projects/portfolio/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
