const io = require("../socket");

/**
 * Procesa un mensaje entrante y lo emite a los clientes conectados.
 * 
 * Este método puede realizar cualquier lógica adicional, como guardar el mensaje en una base de datos.
 * Luego, emite el mensaje a los clientes conectados mediante WebSocket.
 * 
 * @function processIncomingMessage
 * @param {string} from - El número de teléfono o identificador del remitente.
 * @param {string} text - El contenido del mensaje enviado por el remitente.
 */
exports.processIncomingMessage = (from, text) => {
    console.log(`Nuevo mensaje de ${from}: ${text}`);

    // Emite el mensaje a los clientes conectados
    io.emit("newMessage", { from, text });
};
