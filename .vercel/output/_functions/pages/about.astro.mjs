import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BejUaFnn.mjs';
import 'kleur/colors';
import { b as $$MainLayout } from '../chunks/MainLayout_CHfxH17T.mjs';
import { g as getEntry } from '../chunks/_astro_content_BtOjpRYy.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Bvy0HWwf.mjs';
import { m as myPhoto } from '../chunks/default-avatar_7y43PDUa.mjs';
import { $ as $$Separator } from '../chunks/Separator_Q5zqhHer.mjs';
import { $ as $$BreadCrumbs } from '../chunks/BreadCrumbs_CbAiUHrE.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const aboutUiContent = await getEntry(
    "about",
    "ui-content"
  );
  const { Content } = await aboutUiContent.render();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BreadCrumbs", $$BreadCrumbs, {})} ${maybeRenderHead()}<section class="flex flex-col justify-center items-center w-full"> <h1 class="mb-8 md:mb-12">About Me</h1> <div class="flex items-center justify-center"> ${renderComponent($$result2, "Image", $$Image, { "src": myPhoto, "class": "min-h-20 md:w-36 md:h-36 rounded-full w-24 h-24 shadow-lg", "alt": "Abdul Aliyev Photo", "width": 200, "height": 200 })} </div> <article id="about-me-content-section" class="leading-relaxed md:leading-loose max-w-3xl mt-8 md:mt-12"> ${renderComponent($$result2, "Content", Content, {})} </article> </section> ${renderComponent($$result2, "Separator", $$Separator, {})} ` })}`;
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
