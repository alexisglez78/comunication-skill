const express = require("express");
const http = require("http");
const webhookRoutes = require("./routes/webhook");
const apiRoute = require("./routes/routes");
const { initializeSocket } = require("./socket");

const app = express();
const PORT = process.env.PORT || 3000;

// Crear el servidor HTTP
const server = http.createServer(app);

// Inicializar Socket.IO
initializeSocket(server);

// Middleware para parsear JSON
app.use(express.json());

// Configurar rutas
app.use(webhookRoutes);        // Rutas para el webhook de WhatsApp
app.use("/whatsapp", apiRoute); // Otras rutas de la API

// Iniciar el servidor
server.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto " + PORT);
});
