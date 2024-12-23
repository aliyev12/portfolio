import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from './astro/server_BejUaFnn.mjs';
import 'kleur/colors';
import { a as getCollection } from './_astro_content_BtOjpRYy.mjs';
import { c as $$ExternalLinkIcon, d as $$ArrowRightIcon } from './MainLayout_CHfxH17T.mjs';

const $$Astro = createAstro("https://www.aaliyev.com");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { project } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="lg:w-[360px] bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"> <a${addAttribute("/projects/" + project.slug, "href")}> <img${addAttribute("/images/" + project.data.thumbnail.url, "src")}${addAttribute(project.data.thumbnail.alt, "alt")} class="rounded-t-lg"> </a> <div class="p-5"> <a${addAttribute("/projects/" + project.slug, "href")}> <h5 class="mb-2 text-2xl font-bold tracking-tight text-foreground dark:text-foreground"> ${project.data.title} </h5> </a> <p class="mb-4 font-normal text-foreground dark:text-foreground"> ${project.data.excerpt} </p> <a${addAttribute(project.data.projectURL, "href")} title="Visit project website" class="button inline-flex mr-5"> <span class="mr-2">Visit</span> ${renderComponent($$result, "ExternalLinkIcon", $$ExternalLinkIcon, { "size": 16 })} </a> <a${addAttribute(`/projects/${project.slug}`, "href")} title="Go to project details page" class="button inline-flex"> <span class="mr-2">Read more</span> ${renderComponent($$result, "ArrowRightIcon", $$ArrowRightIcon, { "size": 16 })} </a> </div> </div>`;
}, "/Users/abdulaliyev/projects/portfolio/src/components/ProjectCard.astro", void 0);

const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const allProjects = (await getCollection("project")).sort(
    (a, b) => b.data.weight.valueOf() - a.data.weight.valueOf()
  );
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col justify-center items-center w-full"> <h1 class="mb-8 md:mb-12">My Projects</h1> <div${addAttribute(`grid grid-cols-1 ${allProjects.length === 2 && "lg:grid-cols-2"} ${allProjects.length >= 3 && "xl:grid-cols-3"} gap-8 sm:gap-12 md:gap-16 place-items-center w-full`, "class")}> ${allProjects.map((project) => renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, { "project": project })}`)} </div> </section>`;
}, "/Users/abdulaliyev/projects/portfolio/src/components/Projects.astro", void 0);

export { $$Projects as $ };
