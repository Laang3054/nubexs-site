import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await resend.emails.send({
      from: "Nubexs <info@nubexs.com>",
      to: "developer@nubexs.com",
      subject: `New Project Brief from ${body.name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Company:</strong> ${body.company}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Budget:</strong> ${body.budget}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ success: false });
  }
}
