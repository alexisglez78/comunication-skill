/**
 * Módulo principal de la aplicación.
 * 
 * Este archivo configura y ejecuta el servidor HTTP utilizando Express,
 * inicializa WebSockets y define las rutas para la API y los webhooks de WhatsApp.
 * 
 * @module app
 */

const express = require("express");
const http = require("http");
const webhookRoutes = require("./routes/webhook");
const apiRoute = require("./routes/routes");
const { initializeSocket } = require("./socket");

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * Crea el servidor HTTP utilizando Express.
 * 
 * @type {http.Server}
 */
const server = http.createServer(app);

/**
 * Inicializa la conexión de Socket.IO con el servidor.
 * Esta función establece la comunicación en tiempo real con los clientes.
 * 
 * @function
 * @param {http.Server} server - El servidor HTTP donde se ejecutará Socket.IO.
 */
initializeSocket(server);

// Middleware para parsear JSON
app.use(express.json());

/**
 * Define las rutas de la aplicación.
 * 
 * Rutas para los webhooks de WhatsApp y la API.
 * 
 * @example
 * // Ruta para los webhooks
 * app.use(webhookRoutes);
 * 
 * // Otras rutas de la API
 * app.use("/whatsapp", apiRoute);
 */
app.use(webhookRoutes);        // Rutas para el webhook de WhatsApp
app.use("/whatsapp", apiRoute); // Otras rutas de la API

/**
 * Inicia el servidor en el puerto especificado.
 * 
 * @function
 * @param {number} PORT - El puerto en el que el servidor escuchará las conexiones.
 * @returns {void}
 */
server.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto " + PORT);
});
