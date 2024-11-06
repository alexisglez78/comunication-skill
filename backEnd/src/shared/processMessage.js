const whatsappModel = require("../shared/whatsappModels");
const whatsAppService = require("../services/whatsAppService");
const chatgptService = require("../services/chatgpt-service");

/**
 * Procesa un mensaje entrante y determina la respuesta apropiada basada en el texto del mensaje.
 * Dependiendo del contenido del mensaje, se genera una respuesta predefinida o se utiliza el servicio de ChatGPT para generar una respuesta más compleja.
 * 
 * @function process
 * @param {string} text - El texto del mensaje recibido.
 * @param {string} number - El número de teléfono del remitente.
 * 
 * @returns {Promise<void>} - Una promesa que indica que el mensaje ha sido procesado y la respuesta ha sido enviada.
 */
async function process(text, number) {
    text = text.toLowerCase();
    var models = [];

    // #region sin chatgpt
    if (text.includes("hola")) {
        var model = whatsappModel.messageText("Hola, un gusto saludarte", number);
        models.push(model);
    }
    else if (text.includes("gracias")) {
        var model = whatsappModel.messageText("Gracias a ti por escribirme", number);
        models.push(model);
    }
    else {
        var model = whatsappModel.messageText("No entiendo lo que dices", number);
        models.push(model);
    }
    // #endregion

    // #region con chatgpt
    // const resultChatgpt = await chatgptService.GetMessageChatGPT(text);

    // if (resultChatgpt != null) {
    //     var model = whatsappModel.messageText(resultChatgpt, number);
    //     models.push(model);
    // } else {
    //     var model = whatsappModel.messageText("Algo salió mal, intenta más tarde", number);
    //     models.push(model);
    // }
    // #endregion

    models.forEach(model => {
        whatsAppService.sendMessageWhatsapp(model);
    });
}

module.exports = {
    process
};
