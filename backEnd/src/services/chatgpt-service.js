const OpenAI = require("openai");

const openai = new OpenAI({
    organization: "",
    project: "",
    apiKey: ""
});

/**
 * Obtiene la respuesta de ChatGPT para un texto dado.
 * 
 * Realiza una solicitud de completado a la API de OpenAI utilizando el modelo
 * especificado y devuelve la respuesta generada.
 * 
 * @async
 * @function GetMessageChatGPT
 * @param {string} text - El texto de entrada para el cual se solicita la respuesta de ChatGPT.
 * @returns {Promise<string|null>} La respuesta generada por el modelo o null en caso de error.
 */
async function GetMessageChatGPT(text) {
    try {
        const completion = await openai.chat.completions.create({
            model: "text-davinci-003",
            messages: [
                { role: "user", content: text }
            ]
        });

        return completion.choices[0].message.content;
    } catch (error) {
        console.error("Error with OpenAI API:", error);
        return null;
    }
}

module.exports = { GetMessageChatGPT };
