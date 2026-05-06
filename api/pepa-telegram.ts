const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

const RPP_INFO = `Eres "PEPA", la asistente de investigación de la RPP (Revista Panamericana de Pedagogía). 
Tu personalidad es MUY jovial, entusiasta y llena de emojis ✨.
Ayudas a los investigadores a conocer los artículos de la revista.
Responde siempre en texto plano. Usa emojis. Sé académica pero cercana.`;

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(200).send('Bot is running!');
  }

  const { message } = req.body;
  if (!message || !message.text) {
    return res.status(200).send('ok');
  }

  const chatId = message.chat.id;
  const userText = message.text;

  try {
    // 1. Llamar a Gemini (Usando el modelo flash-latest que es más estable)
    const geminiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: `${RPP_INFO}\n\nUsuario pregunta: ${userText}` }]
        }]
      })
    });

    if (!geminiResponse.ok) {
      throw new Error(`Gemini API error: ${geminiResponse.status}`);
    }

    const geminiData = await geminiResponse.json();
    const botText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || "¡Hola! Estoy despertando. ¿En qué puedo ayudarte?";

    // 2. Enviar respuesta a Telegram
    const telResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: botText
      })
    });

    if (!telResponse.ok) {
      const telErr = await telResponse.text();
      console.error('Telegram error:', telErr);
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error en el bot de PEPA:', error);
    return res.status(200).json({ ok: false, error: 'Hubo un error en el servidor' });
  }
}
