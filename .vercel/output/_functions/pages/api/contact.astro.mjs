import sanitizeHtml from 'sanitize-html';
import nodemailer from 'nodemailer';
import { g as getEntry } from '../../chunks/_astro_content_DKPDJ_-W.mjs';
import { z } from 'zod';
export { renderers } from '../../renderers.mjs';

function sanitizeInput(input) {
  return sanitizeHtml(input, {
    allowedTags: [],
    // No HTML tags allowed
    allowedAttributes: {}
    // No attributes allowed
  }).trim();
}
function placeDynamicValues(str, dynamicVals) {
  let result = str;
  dynamicVals.forEach(({ placeholder, value }) => {
    result = result.replaceAll(`{${placeholder}}`, value);
  });
  return result;
}
function getCurrentFormattedDate() {
  const date = /* @__PURE__ */ new Date();
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  const formattedDate = dateFormatter.format(date);
  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZone: "America/New_York"
    // Adjust this to your preferred timezone
  });
  const formattedTime = timeFormatter.format(date);
  const timezone = "ET";
  return `${formattedDate} ${formattedTime} ${timezone}`;
}

var ETemplate = /* @__PURE__ */ ((ETemplate2) => {
  ETemplate2["contactFollowUp"] = "contact-follow-up";
  ETemplate2["contactNotification"] = "contact-notification";
  return ETemplate2;
})(ETemplate || {});

class SendEmail {
  transporter;
  constructor() {
    const MAIL_HOST = "sandbox.smtp.mailtrap.io";
    const MAIL_PORT = "2525";
    const MAIL_USERNAME = "72e3bad39f1b2a";
    const MAIL_PASSWORD = "6411178136be68";
    const transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      port: MAIL_PORT,
      auth: {
        user: MAIL_USERNAME,
        pass: MAIL_PASSWORD
      }
    });
    this.transporter = transporter;
  }
  async send({
    recipients,
    emailTemplate,
    dynamicVals
  }) {
    const recipientsCS = recipients.join(", ");
    const contactFollowUpContent = await getEntry(
      "email",
      emailTemplate
    );
    const processedSubject = dynamicVals ? placeDynamicValues(contactFollowUpContent.data.subject, dynamicVals) : contactFollowUpContent.data.subject;
    const processedText = dynamicVals ? placeDynamicValues(contactFollowUpContent.data.text, dynamicVals) : contactFollowUpContent.data.text;
    const processedHtml = dynamicVals ? placeDynamicValues(contactFollowUpContent.rendered.html, dynamicVals) : contactFollowUpContent.rendered.html;
    const emailSendResult = await this.transporter.sendMail({
      from: `"${contactFollowUpContent.data.from.name}" <${contactFollowUpContent.data.from.email}>`,
      // sender address
      to: recipientsCS,
      // list of receivers
      subject: processedSubject,
      // Subject line
      text: processedText,
      // plain text body
      html: processedHtml
      // html body
    });
    return emailSendResult;
  }
}

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
    const rawData = await request.json();
    const sanitizedData = {
      name: sanitizeInput(rawData.name),
      email: sanitizeInput(rawData.email),
      message: sanitizeInput(rawData.message),
      recaptchaResponse: rawData.recaptchaResponse
      // Recaptcha doesn't need sanitization
    };
    const data = schema.parse(sanitizedData);
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
    const sendEmail = new SendEmail();
    const sendUserEmailResult = await sendEmail.send({
      recipients: [email],
      emailTemplate: ETemplate.contactFollowUp,
      dynamicVals: [{ placeholder: "name", value: name }]
    });
    const MY_EMAIL_ADDRESS = "aaa7c4@gmail.com";
    const formattedDate = getCurrentFormattedDate();
    const sanitizedName = name.replace(/[\r\n]+/g, " ");
    const contactSubmissionResult = await sendEmail.send({
      recipients: [MY_EMAIL_ADDRESS],
      emailTemplate: ETemplate.contactNotification,
      dynamicVals: [
        { placeholder: "date", value: formattedDate },
        { placeholder: "from", value: sanitizedName },
        { placeholder: "email", value: email },
        { placeholder: "message", value: message }
      ]
    });
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
