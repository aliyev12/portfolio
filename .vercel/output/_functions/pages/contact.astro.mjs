import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../chunks/astro/server_BejUaFnn.mjs';
import 'kleur/colors';
import { $ as $$Separator } from '../chunks/Separator_Q5zqhHer.mjs';
import { f as $$SendIcon, b as $$MainLayout } from '../chunks/MainLayout_CHfxH17T.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
import React from 'react';
import { Info, AlertCircle, CheckCircle } from 'react-feather';
import { g as getEntry } from '../chunks/_astro_content_BtOjpRYy.mjs';
export { renderers } from '../renderers.mjs';

const pageAlert = atom({ show: false, type: "info", message: "" });

const Alert = () => {
  const [alertContent, setAlertContent] = React.useState({
    show: false,
    type: "",
    message: ""
  });
  const $pageAlert = useStore(pageAlert);
  const alertRef = React.useRef(null);
  React.useEffect(() => {
    if ($pageAlert.show) {
      if (alertRef?.current) {
        alertRef.current.style.maxHeight = "80px";
      }
      setAlertContent({
        show: $pageAlert.show,
        type: $pageAlert.type || "info",
        message: $pageAlert.message || ""
      });
      setTimeout(() => {
        if (alertRef?.current) {
          alertRef.current.style.maxHeight = "0px";
        }
        setAlertContent({
          show: false,
          type: "",
          message: ""
        });
      }, 5e3);
    } else {
      if (alertRef?.current) {
        alertRef.current.style.maxHeight = "0px";
      }
      setTimeout(() => {
        setAlertContent({
          show: $pageAlert.show,
          type: "",
          message: ""
        });
      }, 300);
    }
  }, [$pageAlert]);
  function getIcon() {
    if ($pageAlert.type === "info") {
      return /* @__PURE__ */ jsx(Info, {});
    } else if ($pageAlert.type === "error") {
      return /* @__PURE__ */ jsx(AlertCircle, {});
    } else if ($pageAlert.type === "success") {
      return /* @__PURE__ */ jsx(CheckCircle, {});
    } else {
      return /* @__PURE__ */ jsx(Info, {});
    }
  }
  function getColorClasses() {
    const alertTypeClasses = {
      info: "text-blue-800 border-blue-300  bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800",
      success: "text-green-800 border-green-300 bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800",
      error: "text-red-800 border-red-300 bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
    };
    return alertTypeClasses[$pageAlert.type || "info"];
  }
  return /* @__PURE__ */ jsx("div", { className: "space-y-5", children: /* @__PURE__ */ jsx(
    "section",
    {
      ref: alertRef,
      style: {
        maxHeight: 0,
        transition: "max-height 300ms ease-in-out"
      },
      className: `px-6 overflow-hidden w-full md:max-w-screen-md container mx-auto max-w-screen-xl flex justify-center items-center my-8`,
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: `w-full flex items-center p-4 mb-4 text-sm rounded-lg border ${getColorClasses()}`,
          role: "alert",
          children: [
            getIcon(),
            /* @__PURE__ */ jsxs("span", { className: "sr-only", children: [
              "$",
              alertContent.type
            ] }),
            /* @__PURE__ */ jsx("p", { className: "ml-3 text-foreground", children: alertContent.message })
          ]
        }
      )
    }
  ) });
};

const $$ContactFormLoading = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div role="status" class="w-full flex justify-start items-center flex-col animate-pulse"> <h1 class="mb-8">Get in Touch</h1> <div class="w-full md:max-w-md"> <!-- form --> <div> <div class="mb-2"> <div class="label">Name</div> <div class="h-[42px] bg-gray-200 rounded-lg dark:bg-gray-400 w-full"></div> <p class="invisible mt-2 text-sm text-red-600 dark:text-red-500 min-h-7">
X
</p> </div> <div class="mb-2"> <div class="label">Email</div> <div class="h-[42px] bg-gray-200 rounded-lg dark:bg-gray-400 w-full"></div> <p class="invisible mt-2 text-sm text-red-600 dark:text-red-500 min-h-7">
X
</p> </div> <div class="mb-2"> <div class="label">Message</div> <div class="h-[102px] bg-gray-200 rounded-lg dark:bg-gray-400 w-full"></div> <p class="invisible mt-2 text-sm text-red-600 dark:text-red-500 min-h-7">
X
</p> </div> <div class="mb-[34px] w-[302px] h-[76px] bg-gray-200 rounded-[3px] dark:bg-gray-400"></div> <button class="button" type="submit"${addAttribute(true, "disabled")}> <span class="mr-3">Send</span> ${renderComponent($$result, "SendIcon", $$SendIcon, { "size": 16 })} </button> <span class="sr-only">Loading...</span> </div> </div> </div>`;
}, "/Users/abdulaliyev/projects/portfolio/src/components/ContactFormLoading.astro", void 0);

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const RECAPTCHA_SITE_KEY = "6Ldl-6AqAAAAAI3ws-ZH-KeB0uAzmyI_nuDY6xAY";
  const validation = await getEntry(
    "validation",
    "contact-form"
  );
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Alert", Alert, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/common/Alert", "client:component-export": "Alert" })} ${maybeRenderHead()}<section class="w-full flex flex-col justify-center items-center"> ${renderComponent($$result2, "ContactForm", null, { "client:only": "react", "recaptchaSiteKey": RECAPTCHA_SITE_KEY, "validation": validation, "client:component-hydration": "only", "client:component-path": "@/components/ContactForm.tsx", "client:component-export": "default" }, { "fallback": ($$result3) => renderTemplate`${renderComponent($$result3, "ContactFormLoading", $$ContactFormLoading, { "slot": "fallback" })}` })} </section> ${renderComponent($$result2, "Separator", $$Separator, {})} ` })}`;
}, "/Users/abdulaliyev/projects/portfolio/src/pages/contact.astro", void 0);
const $$file = "/Users/abdulaliyev/projects/portfolio/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
