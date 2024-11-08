const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const processMessage = require("../shared/processMessage");
const { sendToSocket } = require("../socket");

/**
 * Verifica el token de autenticación de la solicitud y responde con el desafío si el token es válido.
 * 
 * Este endpoint se utiliza para la validación del webhook de Facebook. Recibe un token y un desafío 
 * desde la solicitud y si el token coincide con el esperado, devuelve el desafío, lo que valida el webhook.
 * 
 * @function
 * @param {Object} req - El objeto de solicitud HTTP que contiene los parámetros `hub.verify_token` y `hub.challenge`.
 * @param {Object} res - El objeto de respuesta HTTP utilizado para enviar la respuesta al cliente.
 * @returns {void} Responde con el desafío si el token es válido, o un error 400 si no lo es.
 */
exports.verifyToken = (req, res) => {
    try {
        var accesToken = "Tknjjgasdo87436";
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];

        // Verifica si el token es correcto y responde con el desafío
        if (challenge != null && token != null && token == accesToken) {
            res.send(challenge);
        } else {
            res.status(400).send();  // Si el token no es válido, responde con un error
        }

    } catch (error) {
        res.status(400).send();  // Si ocurre un error, responde con un error
    }
};

/**
 * Recibe el mensaje de la solicitud y lo procesa.
 * 
 * Este endpoint maneja los mensajes entrantes desde WhatsApp, extrae el número y el contenido del mensaje,
 * y luego envía el mensaje a través de WebSocket.
 * 
 * @function
 * @async
 * @param {Object} req - El objeto de solicitud HTTP que contiene los datos del mensaje recibido.
 * @param {Object} res - El objeto de respuesta HTTP utilizado para enviar una respuesta al cliente.
 * @returns {void} Responde con el mensaje "EVENT_RECEIVED" para confirmar la recepción del evento.
 */
exports.receiveMessage = async (req, res) => {
    try {
        var entry = (req.body["entry"])[0];
        var changes = (entry["changes"])[0];
        var value = changes["value"];
        var messageObject = value["messages"];

        if (typeof messageObject != "undefined") {
            var messages = messageObject[0];
            var number = messages["from"];
            var text = getTextUser(messages);

            if (text != "") {
                // Procesa el mensaje y lo envía a través de WebSocket
                try {
                    sendToSocket(number, text);
                } catch (error) {
                    console.log(error,"error socket");
                }
            }
        }

        res.send("EVENT_RECEIVED");  // Responde con un mensaje de éxito
    } catch (error) {
        myConsole.log(error);  // Registra el error en el archivo de log
        res.send("EVENT_RECEIVED");  // Responde con un mensaje de éxito incluso si hubo un error
    }
};

/**
 * Extrae el texto de un mensaje recibido de WhatsApp.
 * 
 * Este método analiza el tipo de mensaje (texto o interactivo) y extrae el contenido de acuerdo con el tipo.
 * 
 * @function
 * @param {Object} messages - El objeto que contiene el mensaje recibido.
 * @returns {string} El texto extraído del mensaje. Si no se encuentra texto, retorna una cadena vacía.
 */
function getTextUser(messages) {
    var text = "";
    var typeMessage = messages["type"];

    // Dependiendo del tipo de mensaje, extrae el texto
    if (typeMessage == "text") {
        text = (messages["text"])["body"];
    }
    else if (typeMessage == "interactive") {

        var interactiveObject = messages["interactive"];
        var typeInteractive = interactiveObject["type"];

        if (typeInteractive == "button_reply") {
            text = (interactiveObject["button_reply"])["title"];
        }
        else if (typeInteractive == "list_reply") {
            text = (interactiveObject["list_reply"])["title"];
        }
        else {
            myConsole.log("sin mensaje");
        }
    } else {
        myConsole.log("sin mensaje");
    }
    return text;
}
