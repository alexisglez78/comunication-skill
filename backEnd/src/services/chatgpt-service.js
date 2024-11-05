const OpenAI = require("openai");

const openai = new OpenAI({
    organization: "",
    project: "",
    apiKey: ""
});

async function GetMessageChatGPT(text) {
    try {
        // Send a completion request to OpenAI
        const completion = await openai.chat.completions.create({
            model: "text-davinci-003",  // Use "gpt-4" or the model you prefer
            messages: [
                { role: "user", content: text }
            ]
        });

        // Return the response content
        return completion.choices[0].message.content;
    } catch (error) {
        console.error("Error with OpenAI API:", error);
        return null;
    }
}

module.exports = {GetMessageChatGPT};
