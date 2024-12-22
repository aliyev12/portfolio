import { getCurrentFormattedDate, sanitizeInput } from "../../lib/utils";
import { ETemplate } from "../../lib/constants";
import { SendEmail } from "../../services/SendEmail";
import { getEntry, type CollectionEntry } from "astro:content";
import { z } from "zod";

export async function POST({ request }: any): Promise<Response> {
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
    const rawData = await request.json();

    const sanitizedData = {
      name: sanitizeInput(rawData.name),
      email: sanitizeInput(rawData.email),
      message: sanitizeInput(rawData.message),
      recaptchaResponse: rawData.recaptchaResponse, // Recaptcha doesn't need sanitization
    };

    // Parse and validate the incoming request data
    const data = schema.parse(sanitizedData);

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

    const sendEmail = new SendEmail();

    const sendUserEmailResult = await sendEmail.send({
      recipients: [email],
      emailTemplate: ETemplate.contactFollowUp,
      dynamicVals: [{ placeholder: "name", value: name }],
    });

    const MY_EMAIL_ADDRESS = import.meta.env.MY_EMAIL_ADDRESS;
    const formattedDate = getCurrentFormattedDate();
    const sanitizedName = name.replace(/[\r\n]+/g, " ");

    const contactSubmissionResult = await sendEmail.send({
      recipients: [MY_EMAIL_ADDRESS],
      emailTemplate: ETemplate.contactNotification,
      dynamicVals: [
        { placeholder: "date", value: formattedDate },
        { placeholder: "from", value: sanitizedName },
        { placeholder: "email", value: email },
        { placeholder: "message", value: message },
      ],
    });

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
