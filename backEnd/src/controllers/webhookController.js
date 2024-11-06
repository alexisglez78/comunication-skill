const messageService = require("../services/messageService");

/**
 * Maneja las solicitudes entrantes de Webhook y procesa los mensajes.
 * 
 * Esta función procesa los datos recibidos desde el Webhook, extrae la información del mensaje
 * (como el número de teléfono y el contenido del mensaje) y llama al servicio correspondiente 
 * para procesar el mensaje entrante.
 * 
 * @function
 * @param {Object} req - El objeto de solicitud HTTP. Se espera que contenga un cuerpo con la información del mensaje.
 * @param {Object} res - El objeto de respuesta HTTP. Se utiliza para enviar una respuesta al cliente.
 * @returns {void} Responde con un estado 200 si se procesó correctamente la solicitud.
 */
exports.handleWebhook = (req, res) => {
    const { entry } = req.body;

    // Verifica que la entrada esté presente y tenga cambios
    if (entry && entry.length > 0) {
        const changes = entry[0].changes;
        // Verifica que los cambios contengan mensajes
        if (changes && changes.length > 0) {
            const messages = changes[0].value.messages;
            // Verifica que haya mensajes para procesar
            if (messages && messages.length > 0) {
                const message = messages[0];
                const from = message.from;  // Número de teléfono del remitente
                const text = message.text?.body;  // Contenido del mensaje

                // Llama al servicio para procesar el mensaje
                messageService.processIncomingMessage(from, text);
            }
        }
    }

    // Envía una respuesta con el estado 200 (OK)
    res.sendStatus(200);
};
