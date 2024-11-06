const io = require("../socket"); // Asegúrate de exportar tu socket desde un archivo de configuración

exports.processIncomingMessage = (from, text) => {
    // Aquí puedes realizar cualquier otra lógica que necesites, como guardar en base de datos
    console.log(`Nuevo mensaje de ${from}: ${text}`);

    // Emite el mensaje a los clientes conectados
    io.emit("newMessage", { from, text });
};
