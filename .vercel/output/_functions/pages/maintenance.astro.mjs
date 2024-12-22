import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C9GTjA-t.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_CNWx2KeK.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_zQk-sZkf.mjs';
export { renderers } from '../renderers.mjs';

const $$Maintenance = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "showNav": false, "showFooter": false }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex flex-col justify-center items-center leading-10"> <h1 class="mb-8">Thank you for visiting!</h1> <p>My website is under construction. 🚧</p> <p>Check back soon!</p> <div class="mt-8"> ${renderComponent($$result2, "Image", $$Image, { "src": `/images/under_construction.png`, "class": "rounded-lg", "alt": "Website Construction", "width": 640, "height": 457 })} </div> </section> ` })}`;
}, "/Users/abdulaliyev/projects/portfolio/src/pages/maintenance.astro", void 0);

const $$file = "/Users/abdulaliyev/projects/portfolio/src/pages/maintenance.astro";
const $$url = "/maintenance";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Maintenance,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
