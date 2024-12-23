import { ETemplate } from "../../lib/constants";
import { SendEmail } from "../../services/SendEmail";

export async function GET({ request }: any): Promise<Response> {
  //   const sendEmail = new SendEmail();

  //   const sendUserEmailResult = await sendEmail.send({
  //     recipients: ["aaa7c4@gmail.com"],
  //     emailTemplate: ETemplate.contactFollowUp,
  //     dynamicVals: [{ placeholder: "name", value: "John Doe" }],
  //   });

  //   /*

  // date
  // from
  // email
  // message
  //   */

  //   const contactSubmissionResult = await sendEmail.send({
  //     recipients: ["aaa7c4@gmail.com"],
  //     emailTemplate: ETemplate.contactNotification,
  //     dynamicVals: [
  //       { placeholder: "date", value: "January 1, 1970 14:35 ET" },
  //       { placeholder: "from", value: "John Doe" },
  //       { placeholder: "email", value: "john.doe@gmail.com" },
  //       {
  //         placeholder: "message",
  //         value: ``,
  //       },
  //     ],
  //   });

  //   console.log("sendUserEmailResult = ", sendUserEmailResult);
  //   console.log("contactSubmissionResult = ", contactSubmissionResult);
  return new Response(
    JSON.stringify({ info: "This route is for testing emails." }),
    { status: 200 }
  );
}
