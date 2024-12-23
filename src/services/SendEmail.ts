import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import { getEntry, type CollectionEntry } from "astro:content";
import type { ETemplate, IDynamicVal } from "../lib/constants";
import { placeDynamicValues } from "../lib/utils";

export interface ISendProps {
  recipients: string[];
  emailTemplate: ETemplate;
  dynamicVals?: IDynamicVal[];
}

export class SendEmail {
  transporter: nodemailer.Transporter<
    SMTPTransport.SentMessageInfo,
    SMTPTransport.Options
  >;

  constructor() {
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

  async send({
    recipients,
    emailTemplate,
    dynamicVals,
  }: ISendProps): Promise<SMTPTransport.SentMessageInfo> {
    const recipientsCS = recipients.join(", ");

    const contactFollowUpContent: CollectionEntry<"email"> = await getEntry(
      "email",
      emailTemplate
    )!;

    const processedSubject = dynamicVals
      ? placeDynamicValues(contactFollowUpContent.data.subject, dynamicVals)
      : contactFollowUpContent.data.subject;
    const processedText = dynamicVals
      ? placeDynamicValues(contactFollowUpContent.data.text, dynamicVals)
      : contactFollowUpContent.data.text;
    const processedHtml = dynamicVals
      ? placeDynamicValues(contactFollowUpContent.rendered!.html, dynamicVals)
      : contactFollowUpContent.rendered!.html;

    const emailSendResult = await this.transporter.sendMail({
      from: `"${contactFollowUpContent.data.from.name}" <${contactFollowUpContent.data.from.email}>`, // sender address
      to: recipientsCS, // list of receivers
      subject: processedSubject, // Subject line
      text: processedText, // plain text body
      html: processedHtml, // html body
    });

    return emailSendResult;
  }
}
