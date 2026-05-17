import { NextResponse } from "next/server";
import { contactFormSchema } from "@/components/contact-form/types";
import { sendContactEmail } from "@/lib/email/send-contact-email";

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);

  if (!json) {
    return NextResponse.json({ message: "Invalid request payload." }, { status: 400 });
  }

  const parseResult = contactFormSchema.safeParse(json);

  if (!parseResult.success) {
    return NextResponse.json({ message: parseResult.error.issues[0]?.message ?? "Invalid form data." }, { status: 400 });
  }

  if (parseResult.data.honeypot) {
    return NextResponse.json({ message: "Spam detected." }, { status: 204 });
  }

  try {
    await sendContactEmail(parseResult.data);
    return NextResponse.json({ status: "ok" });
  } catch (error) {
    return NextResponse.json({ message: "Failed to send contact notification." }, { status: 500 });
  }
}
