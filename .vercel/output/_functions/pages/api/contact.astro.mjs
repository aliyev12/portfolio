import { g as getEntry } from '../../chunks/_astro_content_Cxmriuja.mjs';
import { z } from 'zod';
export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
  const { data: val } = await getEntry(
    "validation",
    "contact-form"
  );
  const schema = z.object({
    name: z.string().nonempty(val.name.required).min(2, { message: val.name.minLength }).max(100, { message: val.name.maxLength }),
    email: z.string().nonempty(val.email.required).email({ message: val.email.pattern }).max(64, { message: val.email.maxLength }),
    message: z.string().nonempty(val.message.required).min(20, { message: val.message.minLength }).max(500, { message: val.message.maxLength }),
    recaptchaResponse: z.string().nonempty(val.recaptcha.required).max(5e3, { message: val.recaptcha.maxLength })
  });
  try {
    const data = schema.parse(await request.json());
    console.log("data = ", data);
    const { name, email, message, recaptchaResponse } = data;
    const secretKey = "6Ldl-6AqAAAAAGAkraw7gM0fttWvtlra5YER5whG";
    const verificationResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: secretKey,
          response: recaptchaResponse
        })
      }
    );
    const verificationResult = await verificationResponse.json();
    if (!verificationResult.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "CAPTCHA verification failed"
        }),
        { status: 400 }
      );
    }
    console.log("Name received:", name);
    console.log("Email received:", email);
    console.log("Message received:", message);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Validation failed",
          details: error.errors
        }),
        { status: 400 }
      );
    }
    return new Response(
      JSON.stringify({ success: false, error: "An unexpected error occurred" }),
      { status: 500 }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
