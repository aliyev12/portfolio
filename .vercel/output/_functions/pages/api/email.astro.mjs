import nodemailer from 'nodemailer';
import { g as getEntry } from '../../chunks/_astro_content_Cxmriuja.mjs';
export { renderers } from '../../renderers.mjs';

class SendEmail {
  recipients;
  transporter;
  constructor(recipients) {
    this.recipients = recipients.join(", ");
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
  async send() {
    const { data } = await getEntry(
      "email",
      "receipt"
    );
    console.log("data = ", data);
    const info = await this.transporter.sendMail({
      from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>',
      // sender address
      to: this.recipients,
      // list of receivers
      subject: "Howdy ✔",
      // Subject line
      text: "Hello world?",
      // plain text body
      html: "<b>Hello world?</b>"
      // html body
    });
    console.log("info = ", info);
  }
}

async function GET({ request }) {
  const sendEmail = new SendEmail(["john@email.com"]);
  const sendResult = await sendEmail.send();
  console.log("sendResult = ", sendResult);
  return new Response(
    JSON.stringify({ success: false, error: "An unexpected error occurred" }),
    { status: 500 }
  );
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
