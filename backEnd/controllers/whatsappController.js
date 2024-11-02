// backend/controllers/whatsappController.js
const axios = require("axios");

const verifyWebhook = (req, res) => {
    const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN;
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode && token === VERIFY_TOKEN) {
        res.status(200).send(challenge);
    } else {
        res.status(403).send("Verification failed");
    }
};

const handleWebhook = async (req, res) => {
    const message = req.body.entry[0].changes[0].value.messages[0];
    const senderId = message.from;

    // Lógica de procesamiento del mensaje
    if (message.text) {
        const reply = "¡Hola! ¿En qué puedo ayudarte?";
        await sendMessage(senderId, reply);
    }

    res.sendStatus(200);
};

const sendMessage = async (recipientId, text) => {
    const url = `https://graph.facebook.com/v16.0/${process.env.WHATSAPP_PHONE_ID}/messages`;
    await axios.post(
        url,
        {
            messaging_product: "whatsapp",
            to: recipientId,
            type: "text",
            text: { body: text },
        },
        { headers: { Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}` } }
    );
};

module.exports = { verifyWebhook, handleWebhook };
