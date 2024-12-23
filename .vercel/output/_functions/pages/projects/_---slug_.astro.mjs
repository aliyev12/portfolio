import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as addAttribute } from '../../chunks/astro/server_BejUaFnn.mjs';
import 'kleur/colors';
import { $ as $$BreadCrumbs } from '../../chunks/BreadCrumbs_CbAiUHrE.mjs';
import { $ as $$Separator } from '../../chunks/Separator_Q5zqhHer.mjs';
import 'clsx';
import { c as $$ExternalLinkIcon, e as $$GithubIcon, b as $$MainLayout } from '../../chunks/MainLayout_CHfxH17T.mjs';
import { g as getEntry } from '../../chunks/_astro_content_BtOjpRYy.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://www.aaliyev.com");
const $$Tags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Tags;
  const { tags } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap gap-2 my-8 :md:my-12"> ${tags.map((tag, index) => renderTemplate`<span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"> ${tag} </span>`)} </div>`;
}, "/Users/abdulaliyev/projects/portfolio/src/components/Tags.astro", void 0);

const $$Astro = createAstro("https://www.aaliyev.com");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  if (slug === void 0) {
    throw new Error("Slug is required");
  }
  const entry = await getEntry("project", slug);
  if (entry === void 0) {
    return Astro2.redirect("/404");
  }
  console.log("entry.data.githubRepoLinks = ", entry.data.githubRepoLinks.length);
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BreadCrumbs", $$BreadCrumbs, {})} ${maybeRenderHead()}<section class="w-full flex flex-col justify-center items-center"> <h1 class="mb-5 md:mb-8 md:leading-relaxed text-center"> ${entry.data.title} </h1> <figure class="max-w-3xl"> <img class="h-auto max-w-full rounded-lg shadow-lg"${addAttribute("/images/" + entry.data.mainImage.url, "src")}${addAttribute(entry.data.mainImage.alt, "alt")}> </figure> ${renderComponent($$result2, "Tags", $$Tags, { "tags": entry.data.tags })} <div class="max-w-lg justify-center flex flex-col space-y-7"> <div class="flex flex-col md:flex-row"> <span class="font-medium">Visit the project:</span> <a class="link flex ml-2"${addAttribute(entry.data.projectURL, "href")}>${entry.data.projectURL.replace("https://", "")}${renderComponent($$result2, "ExternalLinkIcon", $$ExternalLinkIcon, { "customClasses": "ml-2 hidden sm:block" })}</a> </div> <div> <span class="font-medium">Check out project repo${entry.data.githubRepoLinks.length > 1 ? "s" : ""}:</span>${entry.data.githubRepoLinks.length > 1 ? renderTemplate`<div class="ml-3 mt-2 flex flex-col space-y-3"> ${entry.data.githubRepoLinks.map((repo) => {
    return renderTemplate`<a class="link flex items-center"${addAttribute(repo, "href")}> ${repo.replace("https://", "")} ${renderComponent($$result2, "GithubIcon", $$GithubIcon, { "customClasses": "ml-2 hidden sm:block" })} </a>`;
  })} </div>` : renderTemplate`<a class="link inline-flex items-center ml-2"${addAttribute(entry.data.githubRepoLinks[0], "href")}> ${entry.data.githubRepoLinks[0].replace("https://", "")} ${renderComponent($$result2, "GithubIcon", $$GithubIcon, { "customClasses": "ml-2 hidden sm:block" })} </a>`} </div> </div> <article id="project-description-content-section" class="leading-relaxed md:leading-loose max-w-3xl mt-8 md:mt-12"> ${renderComponent($$result2, "Content", Content, {})} </article> </section> ${renderComponent($$result2, "Separator", $$Separator, {})} ` })}`;
}, "/Users/abdulaliyev/projects/portfolio/src/pages/projects/[...slug].astro", void 0);

const $$file = "/Users/abdulaliyev/projects/portfolio/src/pages/projects/[...slug].astro";
const $$url = "/projects/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
