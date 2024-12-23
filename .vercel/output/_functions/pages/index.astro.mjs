import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BejUaFnn.mjs';
import 'kleur/colors';
import { $ as $$Projects } from '../chunks/Projects_B2DQz_IG.mjs';
import { b as $$MainLayout } from '../chunks/MainLayout_CHfxH17T.mjs';
import { g as getEntry, a as getCollection } from '../chunks/_astro_content_BtOjpRYy.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Bvy0HWwf.mjs';
import { m as myPhoto } from '../chunks/default-avatar_7y43PDUa.mjs';
import { $ as $$Separator } from '../chunks/Separator_Q5zqhHer.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const homeUiContent = await getEntry(
    "home",
    "ui-content"
  );
  (await getCollection("project")).sort(
    (a, b) => b.data.weight.valueOf() - a.data.weight.valueOf()
  );
  const { mainTitle } = homeUiContent.data;
  const { Content } = await homeUiContent.render();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="grid grid-cols-1 gap-5 lg:grid-cols-2"> <div class="w-full flex justify-center items-center md:mb-0"> <div class="flex items-center justify-center"> ${renderComponent($$result2, "Image", $$Image, { "src": myPhoto, "class": "min-h-20 md:w-36 md:h-36 rounded-full w-24 h-24 shadow-lg", "alt": "Abdul Aliyev Photo", "width": 200, "height": 200 })} </div> </div> <div> <h1 class="mb-5 md:mb-8 md:leading-relaxed text-center">${mainTitle}</h1> <article class="leading-relaxed md:leading-loose">${renderComponent($$result2, "Content", Content, {})}</article> </div> </section> ${renderComponent($$result2, "Separator", $$Separator, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Separator", $$Separator, {})} ` })}`;
}, "/Users/abdulaliyev/projects/portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/abdulaliyev/projects/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
