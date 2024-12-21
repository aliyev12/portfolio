import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent, d as createAstro } from '../chunks/astro/server_DZSLA_yu.mjs';
import 'kleur/colors';
import { b as $$ExternalLinkIcon, $ as $$Separator, a as $$MainLayout } from '../chunks/MainLayout_DPpbCi1w.mjs';
import { g as getEntry, a as getCollection } from '../chunks/_astro_content_jES5Kt6i.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_D1ct15YD.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { project } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full md:max-w-md mx-auto overflow-hidden shadow-lg dark:border dark:border-foreground"> <div class="border border-foreground mx-6 mt-6 flex items-center justify-center"> <a${addAttribute("/projects/" + project.slug, "href")}> <img${addAttribute("/images/" + project.data.thumbnail.url, "src")}${addAttribute(project.data.thumbnail.alt, "alt")} class="w-full h-48 object-cover hover:opacity-75 transition duration-300 ease-in-out p-1"> </a> </div> <div class="p-6"> <h3 class="mb-6"> <a class="link"${addAttribute("/projects/" + project.slug, "href")}>${project.data.title}</a> </h3> <p class="mb-6 leading-8">${project.data.excerpt}</p> <ul class="flex space-x-6 items-center"> <li> <a${addAttribute(`/projects/${project.slug}`, "href")} class="flex items-center button" title="Go to project details page">
Details
</a> </li> <li> <a${addAttribute(project.data.githubRepoLinks[0], "href")} class="flex items-center button" title="Visit project website"> <span class="mr-2">Visit</span> ${renderComponent($$result, "ExternalLinkIcon", $$ExternalLinkIcon, { "size": 16 })} </a> </li> </ul> </div> </div>`;
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
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="grid grid-cols-1 gap-5 lg:grid-cols-2"> <div class="w-full flex justify-center items-center md:mb-0"> <div class="rounded-full p-1 border border-foreground flex items-center justify-center"> ${renderComponent($$result2, "Image", $$Image, { "src": myPhoto, "class": "w-20 min-h-20 md:w-36 md:h-36 rounded-full", "alt": "Abdul Aliyev Photo", "width": 200, "height": 200 })} </div> </div> <div> <h1 class="mb-5 text-center">${mainTitle}</h1> <article class="leading-relaxed">${renderComponent($$result2, "Content", Content, {})}</article> </div> </section> ${renderComponent($$result2, "Separator", $$Separator, {})} <section class="flex flex-col justify-center items-center w-full"> <h1 class="mb-8">My Projects</h1> <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full"> ${allProjects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "project": project })}`)} </div> </section> ${renderComponent($$result2, "Separator", $$Separator, {})} ` })}`;
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
