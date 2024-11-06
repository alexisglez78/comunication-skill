const expres = require("express");
const router = expres.Router();
const whatsappController = require("../controllers/whatsappControllers");
const webhookController = require("../controllers/webhookController");

/**
 * Define las rutas del enrutador para manejar las solicitudes de la API de WhatsApp.
 * 
 * Este archivo configura las rutas de los endpoints para verificar el token y recibir mensajes de WhatsApp,
 * así como manejar el webhook para los eventos de WhatsApp.
 * 
 * @module routes/whatsappRoutes
 */

/**
 * Ruta para verificar el token de autenticación y responder con el desafío.
 * 
 * Este endpoint se utiliza para la validación del webhook de WhatsApp. Recibe un token y un desafío 
 * desde la solicitud y si el token es válido, responde con el desafío.
 * 
 * @name GET /
 * @function
 * @memberof module:routes/whatsappRoutes
 * @param {Object} req - El objeto de solicitud HTTP que contiene el token y el desafío.
 * @param {Object} res - El objeto de respuesta HTTP utilizado para enviar la respuesta al cliente.
 */
router.get("/", whatsappController.verifyToken);

/**
 * Ruta para recibir un mensaje de WhatsApp y procesarlo.
 * 
 * Este endpoint maneja los mensajes entrantes desde WhatsApp, extrae el número y el contenido del mensaje,
 * y luego lo procesa para enviarlo a través de WebSocket.
 * 
 * @name POST /
 * @function
 * @memberof module:routes/whatsappRoutes
 * @param {Object} req - El objeto de solicitud HTTP que contiene los datos del mensaje recibido.
 * @param {Object} res - El objeto de respuesta HTTP utilizado para enviar una respuesta al cliente.
 * @returns {void} Responde con el mensaje "EVENT_RECEIVED" para confirmar la recepción del evento.
 */
router.post("/", whatsappController.receiveMessage);

/**
 * Ruta para manejar los eventos de webhook de WhatsApp.
 * 
 * Este endpoint recibe los eventos enviados por WhatsApp y ejecuta el controlador correspondiente
 * para procesar la información del evento.
 * 
 * @name POST /webhook
 * @function
 * @memberof module:routes/whatsappRoutes
 * @param {Object} req - El objeto de solicitud HTTP que contiene los datos del evento de webhook.
 * @param {Object} res - El objeto de respuesta HTTP utilizado para enviar una respuesta al cliente.
 * @returns {void} Responde con un estado 200 al recibir un evento.
 */
router.post("/webhook", webhookController.handleWebhook);

module.exports = router;
