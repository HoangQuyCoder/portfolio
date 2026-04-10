import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic validation
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Resend free tier requires sending from an onboarding address
        // Replace with your verified domain once you set one up
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["hoangquyle11@gmail.com"],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1e3a5f, #0f172a); padding: 32px; border-radius: 12px 12px 0 0;">
              <h1 style="color: #60a5fa; margin: 0; font-size: 24px;">New Message from Portfolio</h1>
            </div>
            <div style="background: #0f172a; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #1e293b;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #1e293b;">
                    <span style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">From</span><br/>
                    <span style="color: #f1f5f9; font-size: 16px; font-weight: 600;">${name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #1e293b;">
                    <span style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Reply-to Email</span><br/>
                    <a href="mailto:${email}" style="color: #60a5fa; font-size: 16px;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #1e293b;">
                    <span style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Subject</span><br/>
                    <span style="color: #f1f5f9; font-size: 16px; font-weight: 600;">${subject}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0;">
                    <span style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</span><br/>
                    <p style="color: #cbd5e1; font-size: 15px; line-height: 1.7; margin: 8px 0 0;">${message.replace(/\n/g, "<br/>")}</p>
                  </td>
                </tr>
              </table>
              <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #1e293b;">
                <p style="color: #475569; font-size: 12px; margin: 0;">Sent from your portfolio contact form at hoangquy.vercel.app</p>
              </div>
            </div>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      console.error("Resend API error:", error);
      return Response.json(
        { error: "Failed to send email. Please try again later." },
        { status: 502 }
      );
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact route error:", err);
    return Response.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
