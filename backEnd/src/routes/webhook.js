const express = require("express");
const router = express.Router();
const webhookController = require("../controllers/webhookController");

/**
 * Ruta para manejar los eventos de webhook.
 * 
 * Este endpoint recibe los eventos enviados y ejecuta el controlador correspondiente
 * para procesar la información del evento.
 * 
 * @name POST /webhook
 * @function
 * @memberof module:routes/webhookRoutes
 * @param {Object} req - El objeto de solicitud HTTP que contiene los datos del evento.
 * @param {Object} res - El objeto de respuesta HTTP utilizado para enviar una respuesta al cliente.
 * @returns {void} Responde con un estado 200 al recibir un evento.
 */
router.post("/webhook", webhookController.handleWebhook);

module.exports = router;
