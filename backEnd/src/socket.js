const { Server } = require("socket.io");
const { v4: uuidv4 } = require('uuid');

let io;

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

function getSocket() {
    if (!io) throw new Error("Socket.io no está inicializado");
    return io;
}

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
