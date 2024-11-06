const { Server } = require("socket.io");
const { v4: uuidv4 } = require('uuid');

let io;

/**
 * Inicializa el servidor de Socket.IO y establece la configuración.
 * 
 * Esta función crea una nueva instancia de Socket.IO y establece las configuraciones de CORS,
 * como el origen permitido y los métodos HTTP habilitados. Además, maneja la conexión de los clientes
 * y los eventos de mensajes de chat.
 * 
 * @function
 * @param {http.Server} server - El servidor HTTP que se pasará a Socket.IO.
 * @returns {void}
 */
function initializeSocket(server) {
    io = new Server(server, {
        cors: {
            origin: "*", // Define el origen permitido, si es necesario
            methods: ["GET", "POST"],
        },
    });

    io.on("connection", (socket) => {
        console.log("Usuario conectado");

        socket.on('chat message', (msg) => {
            console.log('Mensaje recibido: ' + msg);
            io.emit('chat message', msg);  // Emitir el mensaje a todos los clientes conectados
        });

        socket.on("disconnect", () => {
            console.log("Usuario desconectado");
        });
    });
}

/**
 * Obtiene la instancia actual de Socket.IO.
 * 
 * Esta función devuelve la instancia de Socket.IO si está inicializada. En caso contrario,
 * lanza un error indicando que Socket.IO no está inicializado.
 * 
 * @function
 * @throws {Error} Si Socket.IO no está inicializado.
 * @returns {Server} La instancia de Socket.IO.
 */
function getSocket() {
    if (!io) throw new Error("Socket.io no está inicializado");
    return io;
}

/**
 * Envía un mensaje a todos los clientes conectados a través de Socket.IO.
 * 
 * Esta función emite un mensaje con los datos de WhatsApp, que incluye el número de teléfono,
 * el texto del mensaje, el ID del mensaje y la marca de tiempo. El mensaje será recibido por todos
 * los clientes conectados.
 * 
 * @function
 * @param {string} number - El número de teléfono del remitente.
 * @param {string} text - El texto del mensaje a enviar.
 * @returns {void}
 */
function sendToSocket(number, text) {
    if (!io) {
        console.error('Socket.io no está inicializado correctamente');
        return;
    }

    console.log("Emitiendo mensaje a los clientes", number, text);
    io.emit('whatsapp message', {
        from: number,
        message: text,
        message_id: uuidv4(),
        timestamp: new Date().toISOString()
    });
};

module.exports = { initializeSocket, getSocket, sendToSocket };
