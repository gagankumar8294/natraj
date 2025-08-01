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
  const CHAT_ID = ['6685264794', '5450898328'];

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
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
      }),
    });

    if (!response.ok) {
      throw new Error('Telegram API error');
    }

    return new Response(JSON.stringify({ success: true, message: "Booking sent!" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
