import { NextResponse } from "next/server";
import { sendTelegramMessage } from "@/lib/telegram";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { url, userAgent, type, message, location, referrer } = body;

        let text = "";

        if (type === "pageview") {
            text = `🚨 *New Portfolio Visit!*\n\n*Page:* ${url || "Unknown"}\n*Source:* ${referrer || "Direct Traffic"}\n*Location:* ${location || "Unknown"}\n*Device:* ${userAgent || "Unknown"}\n*Time:* ${new Date().toLocaleString()}`;
        } else if (type === "chat") {
            text = `💬 *New Chat Message!*\n\n*Message:* "${message}"\n*Time:* ${new Date().toLocaleString()}`;
        } else {
            text = `🔔 *New Notification:*\n\n${JSON.stringify(body, null, 2)}`;
        }

        const success = await sendTelegramMessage(text);

        if (success) {
            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json({ success: false, error: "Failed to send message" }, { status: 500 });
        }
    } catch (error) {
        // We intentionally don't crash, we just log and return success false
        console.error("Error in notify endpoint:", error);
        return NextResponse.json(
            { success: false, error: "Invalid request payload" },
            { status: 400 }
        );
    }
}
