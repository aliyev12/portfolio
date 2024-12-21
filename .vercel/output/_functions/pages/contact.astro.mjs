import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_sT88spq4.mjs';
import 'kleur/colors';
import { $ as $$Separator, a as $$MainLayout } from '../chunks/MainLayout_CCpSfbxS.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
import React from 'react';
import { Info, AlertCircle, CheckCircle } from 'react-feather';
import { g as getEntry } from '../chunks/_astro_content_DEXzNKYa.mjs';
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
        alertRef.current.style.maxHeight = "60px";
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
      info: "text-blue-800 bg-blue-50 dark:bg-gray-900 dark:text-blue-100",
      success: "bg-green-50 dark:bg-gray-900 dark:text-green-200",
      error: "bg-red-50 dark:bg-gray-900 dark:text-red-200"
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
          className: `w-full flex items-center p-4 text-sm rounded-lg ${getColorClasses()}`,
          role: "alert",
          children: [
            getIcon(),
            /* @__PURE__ */ jsxs("span", { className: "sr-only", children: [
              "$",
              alertContent.type
            ] }),
            /* @__PURE__ */ jsx("p", { className: "ml-3", children: alertContent.message })
          ]
        }
      )
    }
  ) });
};

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const RECAPTCHA_SITE_KEY = "6Ldl-6AqAAAAAI3ws-ZH-KeB0uAzmyI_nuDY6xAY";
  const validation = await getEntry(
    "validation",
    "contact-form"
  );
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Alert", Alert, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/common/Alert", "client:component-export": "Alert" })} ${maybeRenderHead()}<section class="w-full flex flex-col justify-center items-center"> ${renderComponent($$result2, "ContactForm", null, { "client:only": true, "recaptchaSiteKey": RECAPTCHA_SITE_KEY, "validation": validation, "client:component-hydration": "only", "client:component-path": "@/components/ContactForm.tsx", "client:component-export": "default" })} </section> ${renderComponent($$result2, "Separator", $$Separator, {})} ` })}`;
}, "/Users/abdulaliyev/projects/portfolio/src/pages/contact/index.astro", void 0);
const $$file = "/Users/abdulaliyev/projects/portfolio/src/pages/contact/index.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
