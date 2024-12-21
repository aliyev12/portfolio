import { getEntry, type CollectionEntry } from "astro:content";
import { z } from "zod";

export async function POST({ request }: any): Promise<Response> {
  // const x = () => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve("ok");
  //     }, 5000);
  //   });
  // };

  // await x();

  // const temp = await request.json();
  // console.log(temp);

  const { data: val }: CollectionEntry<"validation"> = await getEntry(
    "validation",
    "contact-form"
  )!;

  const schema = z.object({
    name: z
      .string()
      .nonempty(val.name.required)
      .min(2, { message: val.name.minLength })
      .max(100, { message: val.name.maxLength }),
    email: z
      .string()
      .nonempty(val.email.required)
      .email({ message: val.email.pattern })
      .max(64, { message: val.email.maxLength }),
    message: z
      .string()
      .nonempty(val.message.required)
      .min(20, { message: val.message.minLength })
      .max(500, { message: val.message.maxLength }),
    recaptchaResponse: z
      .string()
      .nonempty(val.recaptcha.required)
      .max(5000, { message: val.recaptcha.maxLength }),
  });

  try {
    // Parse and validate the incoming request data
    const data = schema.parse(await request.json());

    console.log("data = ", data);

    const { name, email, message, recaptchaResponse } = data;

    // CAPTCHA verification
    const secretKey = import.meta.env.RECAPTCHA_SECRET_KEY;
    const verificationResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: secretKey,
          response: recaptchaResponse,
        }),
      }
    );

    const verificationResult = await verificationResponse.json();

    if (!verificationResult.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "CAPTCHA verification failed",
        }),
        { status: 400 }
      );
    }

    console.log("Name received:", name);
    console.log("Email received:", email);
    console.log("Message received:", message);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Validation failed",
          details: error.errors,
        }),
        { status: 400 }
      );
    }

    // Handle other unexpected errors
    return new Response(
      JSON.stringify({ success: false, error: "An unexpected error occurred" }),
      { status: 500 }
    );
  }
}

// import { z } from "zod";

// export async function POST({ request }: any): Promise<Response> {
//     // Define a Zod schema for validation
//     const schema = z.object({
//       name: z
//         .string()
//         .min(1, { message: "Name is required" })
//         .max(100, { message: "Name must be less than 100 characters" }),
//       email: z
//         .string()
//         .email({ message: "Invalid email address" }),
//       message: z
//         .string()
//         .min(20, { message: "Message must be at least 20 characters" })
//         .max(500, { message: "Message must be less than 500 characters" }),
//       recaptchaResponse: z.string().nonempty("CAPTCHA response is required"),
//     });

//   const data = await request.json();
//   // console.log("data = ", data);
//   // return new Response(JSON.stringify({ success: true }), { status: 200 });

//   const name = data.name;
//   const email = data.email;
//   const message = data.message;
//   const recaptchaResponse = data.recaptchaResponse;

//   if (!recaptchaResponse) {
//     return new Response(
//       JSON.stringify({ success: false, error: "CAPTCHA missing" }),
//       { status: 400 }
//     );
//   }

//   const secretKey = import.meta.env.RECAPTCHA_SECRET_KEY;
//   const verificationResponse = await fetch(
//     `https://www.google.com/recaptcha/api/siteverify`,
//     {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: new URLSearchParams({
//         secret: secretKey,
//         response: recaptchaResponse,
//       }),
//     }
//   );

//   const verificationResult = await verificationResponse.json();

//   if (!verificationResult.success) {
//     return new Response(
//       JSON.stringify({ success: false, error: "CAPTCHA verification failed" }),
//       { status: 400 }
//     );
//   }

//   console.log("Name received:", name);
//   console.log("Email received:", email);
//   console.log("Message received:", message);

//   return new Response(JSON.stringify({ success: true }), { status: 200 });
// }
