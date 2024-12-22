import { SendEmail } from "../../services/SendEmail";

export async function GET({ request }: any): Promise<Response> {
  const sendEmail = new SendEmail(["aaa7c4@gmail.com"]);

  const sendResult = await sendEmail.send();

  console.log("sendResult = ", sendResult);
  return new Response(
    JSON.stringify({ success: false, error: "An unexpected error occurred" }),
    { status: 500 }
  );
}
