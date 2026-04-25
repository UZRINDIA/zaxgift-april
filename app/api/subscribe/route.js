import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return new Response(JSON.stringify({ message: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.SUBSCRIBE_RECEIVER, // like uzrindia2020@gmail.com
      subject: "New Newsletter Subscription",
      text: `New user subscribed with email: ${email}`,
    });

    return new Response(
      JSON.stringify({ message: "You have subscribed to the newsletter." }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Subscription error:", error);
    return new Response(
      JSON.stringify({ message: "Subscription failed. Try again." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
