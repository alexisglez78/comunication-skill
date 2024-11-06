const messageService = require("../services/messageService");

exports.handleWebhook = (req, res) => {
    const { entry } = req.body;

    if (entry && entry.length > 0) {
        const changes = entry[0].changes;
        if (changes && changes.length > 0) {
            const messages = changes[0].value.messages;
            if (messages && messages.length > 0) {
                const message = messages[0];
                const from = message.from;
                const text = message.text?.body;

                // Llama al servicio para procesar el mensaje
                messageService.processIncomingMessage(from, text);
            }
        }
    }
    res.sendStatus(200);
};
