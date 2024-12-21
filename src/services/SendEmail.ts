import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import { getEntry, type CollectionEntry } from "astro:content";

export class SendEmail {
  recipients: string;
  transporter: nodemailer.Transporter<
    SMTPTransport.SentMessageInfo,
    SMTPTransport.Options
  >;

  constructor(recipients: string[]) {
    this.recipients = recipients.join(", ");

    const MAIL_HOST = import.meta.env.MAIL_HOST;
    const MAIL_PORT = import.meta.env.MAIL_PORT;
    const MAIL_USERNAME = import.meta.env.MAIL_USERNAME;
    const MAIL_PASSWORD = import.meta.env.MAIL_PASSWORD;

    const transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      port: MAIL_PORT,
      auth: {
        user: MAIL_USERNAME,
        pass: MAIL_PASSWORD,
      },
    });

    this.transporter = transporter;
  }

  async send() {
    const { data }: CollectionEntry<"email"> = await getEntry(
      "email",
      "receipt"
    )!;

    console.log("data = ", data);

    const info = await this.transporter.sendMail({
      from: '"Abdul Aliyev" <dev7c4@gmail.com>', // sender address
      to: this.recipients, // list of receivers
      subject: "Howdy", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("info = ", info);

    /*
   info =  {
  accepted: [ 'john@email.com' ],
  rejected: [],
  ehlo: [
    'SIZE 5242880',
    'PIPELINING',
    'ENHANCEDSTATUSCODES',
    '8BITMIME',
    'DSN',
    'AUTH PLAIN LOGIN CRAM-MD5'
  ],
  envelopeTime: 33,
  messageTime: 58,
  messageSize: 640,
  response: '250 2.0.0 Ok: queued',
  envelope: { from: 'maddison53@ethereal.email', to: [ 'john@email.com' ] },
  messageId: '<407a7eca-cbb4-fb44-472d-971ffa95a0d3@ethereal.email>'
}
    */

    // prod
    // 7ea32c1078cddd9550c0ee7a17d6b9b1

    // demo
    // 035a6115a18c38c51695203d3bd6e039

    //
    // 3008513feabc65bb0852c865bd5d8d6c
  }
}
