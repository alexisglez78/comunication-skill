const whatsappModel = require("../shared/whatsappModels");
const whatsAppService = require("../services/whatsAppService");

const chatgptService = require("../services/chatgpt-service")


async function process(text, number) {
    text = text.toLowerCase();
    var models = [];


    //#region sin chatgpt
     if (text.includes("hola")) {
         var model = whatsappModel.messageText("Hola, un gusto saludarte", number);
         models.push(model);
     }
     else if(text.includes("gracias")){
         var model = whatsappModel.messageText("Gracias a ti por escribirme", number);
         models.push(model);
     }
     else{
         var model = whatsappModel.messageText("No entiendo lo que dices", number);
         models.push(model);
     }
    // #endregion

    // #region con chatgpt
    // const resultChatgpt = await chatgptService.GetMessageChatGPT(text);

    // if (resultChatgpt != null) {
    //     var model = whatsappModel.messageText(resultChatgpt,number)
    //     models.push(model);

    // }else{
    //     var model = whatsappModel.messageText("Algo salio mal, intenta mas tarde",number)
    //     models.push(model);
    // }

    // #endregion
    models.forEach(model => {
        whatsAppService.sendMessageWhatsapp(model)
    });

}

module.exports = {
    process
}