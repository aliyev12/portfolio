import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../chunks/astro/server_C9GTjA-t.mjs';
import 'kleur/colors';
import { a as $$ExternalLinkIcon, b as $$ArrowRightIcon, $ as $$MainLayout } from '../chunks/MainLayout_CNWx2KeK.mjs';
import { g as getEntry, a as getCollection } from '../chunks/_astro_content_DKPDJ_-W.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_zQk-sZkf.mjs';
import { $ as $$Separator } from '../chunks/Separator_C65nxuVg.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.aaliyev.com");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { project } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="lg:w-[360px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> <a${addAttribute("/projects/" + project.slug, "href")}> <img${addAttribute("/images/" + project.data.thumbnail.url, "src")}${addAttribute(project.data.thumbnail.alt, "alt")} class="rounded-t-lg"> </a> <div class="p-5"> <a${addAttribute("/projects/" + project.slug, "href")}> <h5 class="mb-2 text-2xl font-bold tracking-tight text-foreground dark:text-foreground"> ${project.data.title} </h5> </a> <p class="mb-4 font-normal text-foreground dark:text-foreground"> ${project.data.excerpt} </p> <a${addAttribute(project.data.projectURL, "href")} title="Visit project website" class="button inline-flex mr-5"> <span class="mr-2">Visit</span> ${renderComponent($$result, "ExternalLinkIcon", $$ExternalLinkIcon, { "size": 16 })} </a> <a${addAttribute(`/projects/${project.slug}`, "href")} title="Go to project details page" class="button inline-flex"> <span class="mr-2">Read more</span> ${renderComponent($$result, "ArrowRightIcon", $$ArrowRightIcon, { "size": 16 })} </a> </div> </div>`;
}, "/Users/abdulaliyev/projects/portfolio/src/components/ProjectCard.astro", void 0);

const myPhoto = new Proxy({"src":"/_astro/default-avatar.CJ4KLmxL.png","width":256,"height":256,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/abdulaliyev/projects/portfolio/src/images/default-avatar.png";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const homeUiContent = await getEntry("ui", "home");
  const allProjects = (await getCollection("project")).sort(
    (a, b) => b.data.weight.valueOf() - a.data.weight.valueOf()
  );
  const { mainTitle } = homeUiContent.data;
  const { Content } = await homeUiContent.render();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="grid grid-cols-1 gap-5 lg:grid-cols-2"> <div class="w-full flex justify-center items-center md:mb-0"> <div class="flex items-center justify-center"> ${renderComponent($$result2, "Image", $$Image, { "src": myPhoto, "class": "min-h-20 md:w-36 md:h-36 rounded-full w-24 h-24 shadow-lg", "alt": "Abdul Aliyev Photo", "width": 200, "height": 200 })} </div> </div> <div> <h1 class="mb-5 md:mb-8 md:leading-relaxed text-center">${mainTitle}</h1> <article class="leading-relaxed md:leading-loose">${renderComponent($$result2, "Content", Content, {})}</article> </div> </section> ${renderComponent($$result2, "Separator", $$Separator, {})} <section class="flex flex-col justify-center items-center w-full"> <h1 class="mb-8 md:mb-12">My Projects</h1> <div class="grid grid-cols-1 gap-8 sm:gap-12 md:gap-16 lg:grid-cols-2 xl:grid-cols-3 place-items-center w-full"> ${allProjects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "project": project })}`)} </div> </section> ${renderComponent($$result2, "Separator", $$Separator, {})} ` })}`;
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
