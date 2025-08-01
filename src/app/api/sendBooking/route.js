// src/app/api/sendBooking/route.js

export async function POST(request) {
  const body = await request.json();

  const {
    name,
    email,
    phone,
    pickup,
    dropoff,
    date,
    time
  } = body;

  const BOT_TOKEN = '7580706390:AAHfgjtJh7GulLQX9-3KSaUifJ82lw6aXWc'; // 🔒 Replace with your real bot token
  const CHAT_IDS = ['6685264794', '5450898328']; // ✅ Array of chat IDs

  const message = `
🧳 *New Booking Received!*

👤 *Name:* ${name}
📧 *Email:* ${email}
📞 *Phone:* ${phone}
📍 *Pickup:* ${pickup}
🎯 *Drop-off:* ${dropoff}
📅 *Date:* ${date}
⏰ *Time:* ${time}
  `;

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    // Send the message to each chat ID
    for (const chatId of CHAT_IDS) {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown'
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error('Telegram API error:', errorData);
        throw new Error(`Failed to send message to chat ID: ${chatId}`);
      }
    }

    return new Response(JSON.stringify({ success: true, message: "Booking sent to all chats!" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
