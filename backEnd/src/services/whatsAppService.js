const https = require("https");

/**
 * Envía un mensaje a través de la API de WhatsApp utilizando el endpoint de la plataforma de Facebook Graph.
 * 
 * Este método realiza una solicitud HTTP POST a la API de WhatsApp para enviar el mensaje a un número determinado.
 * 
 * @function sendMessageWhatsapp
 * @param {object} data - El objeto de datos que contiene la información del mensaje que se va a enviar.
 * @param {string} data.to - El número de teléfono del destinatario del mensaje.
 * @param {string} data.message - El contenido del mensaje que se va a enviar.
 * @param {string} data.mediaUrl - (Opcional) URL del medio (imagen, video, etc.) que se va a enviar.
 */
function sendMessageWhatsapp(data) {
    const options = {
        host: "graph.facebook.com",
        path: "/v20.0/457997114067394/messages",
        method: "POST",
        body: data,
        headers: {
            "content-type": "application/json",
            "Authorization": "Bearer EAAMZC6MKb7bQBO79Uhevuzp6H1n42z4i4vrZCQfg9aefT4CrQCTsAVK73pHF5JfXUCuFndpO8qC8GMR55KrKZCmZC6CxmkBvU0LqjjI8HGbrDCr465QlCcmqf3hdbjAsjEdNVovafobR4ba0GoqyXiKUZCXNUZCuZBIkvKUDlLJgdv6dozREBPrQcEETRUh71h9mpxrvAk7tqqxNhX9x0TQGUSnCDg1iAZDZD"
        }
    };

    const req = https.request(options, res => {
        res.on("data", d => {
            process.stdout.write(d);
        });
    });

    req.on("error", e => {
        console.error(e);
    });

    req.write(data);
    req.end();
};

module.exports = {
    sendMessageWhatsapp
};
