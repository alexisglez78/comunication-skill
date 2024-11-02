// backend/server.js
const express = require("express");
const bodyParser = require("body-parser");
const whatsappController = require("./controllers/whatsappController");

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// Webhook para recibir mensajes de WhatsApp
app.post("/webhook", whatsappController.handleWebhook);

// Verificación del webhook
app.get("/webhook", whatsappController.verifyWebhook);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
