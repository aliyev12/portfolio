import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from './astro/server_BejUaFnn.mjs';
import 'kleur/colors';
import { N as NON_CAPITALIZABLE_WORDS } from './constants_CokkER5w.mjs';
import { $ as $$HomeIcon, a as $$ChevronRightIcon } from './MainLayout_CHfxH17T.mjs';

const $$Astro = createAstro("https://www.aaliyev.com");
const $$BreadCrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BreadCrumbs;
  const path = Astro2.url.pathname;
  const splitPath = path.split("/");
  if (path.endsWith("/")) splitPath.pop();
  let combinedPath = "/";
  const breadcrumbs = splitPath.map(
    (pathItem, i, arr) => {
      if (i === 0) {
        return { title: "Home", path: combinedPath };
      }
      const prefix = i === 1 ? "" : "/";
      combinedPath = combinedPath + prefix + pathItem;
      let pathname = pathItem.split("-");
      const pathTitle = pathname.map((x) => {
        if (NON_CAPITALIZABLE_WORDS.includes(x)) {
          return x;
        }
        return x.charAt(0).toUpperCase() + x.slice(1);
      }).join(" ");
      if (i === arr.length - 1) {
        return { title: pathTitle, path: null };
      }
      return { title: pathTitle, path: combinedPath };
    }
  );
  return renderTemplate`${maybeRenderHead()}<nav class="flex mb-8 md:mb-20" aria-label="Breadcrumb"> <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"> ${breadcrumbs.map((breadcrumb) => {
    if (breadcrumb.path === "/") {
      return renderTemplate`<li class="inline-flex items-center"> <a${addAttribute(breadcrumb.path, "href")} class="inline-flex items-center text-sm font-medium  hover:underline"> <span class=" me-2.5"> ${renderComponent($$result, "HomeIcon", $$HomeIcon, { "size": 16 })} </span> <span>${breadcrumb.title}</span> </a> </li>`;
    } else if (breadcrumb.path === null) {
      return renderTemplate`<li class="inline-flex items-center" aria-current="page"> <div class="flex items-center"> <span class="mx-1"> ${renderComponent($$result, "ChevronRightIcon", $$ChevronRightIcon, { "size": 16 })} </span> <span class="ms-1 text-sm font-bold md:ms-2"> ${breadcrumb.title} </span> </div> </li>`;
    } else {
      return renderTemplate`<li> <div class="flex items-center"> <span class=" mx-1"> ${renderComponent($$result, "ChevronRightIcon", $$ChevronRightIcon, { "size": 16 })} </span> <a${addAttribute(breadcrumb.path, "href")} class="ms-1 text-sm font-medium hover:underline md:ms-2"> <span>${breadcrumb.title}</span> </a> </div> </li>`;
    }
  })} </ol> </nav>`;
}, "/Users/abdulaliyev/projects/portfolio/src/components/common/BreadCrumbs.astro", void 0);

export { $$BreadCrumbs as $ };
