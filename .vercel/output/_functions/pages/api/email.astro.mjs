import 'nodemailer';
import '../../chunks/_astro_content_DKPDJ_-W.mjs';
export { renderers } from '../../renderers.mjs';

async function GET({ request }) {
  return new Response(
    JSON.stringify({ info: "This route is for testing emails." }),
    { status: 200 }
  );
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
