import { NextResponse } from "next/server";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, age, message } = body;

        if (!name || !phone || !age) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        const text = [
            `🏃 <b>Новая заявка с сайта!</b>`,
            ``,
            `👤 <b>Имя:</b> ${name}`,
            `📞 <b>Телефон:</b> ${phone}`,
            `🎯 <b>Возрастная группа:</b> ${age}`,
            message ? `💬 <b>Сообщение:</b> ${message}` : "",
            ``,
            `⏰ ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}`,
        ]
            .filter(Boolean)
            .join("\n");

        const res = await fetch(
            `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text,
                    parse_mode: "HTML",
                }),
            }
        );

        if (!res.ok) {
            throw new Error("Telegram API error");
        }

        return NextResponse.json({ ok: true });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}