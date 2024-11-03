const OpenAI = require("openai");

// Initialize OpenAI with the API key
// const openai = new OpenAI({
//     apiKey: "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"
// });
const openai = new OpenAI({
    organization: "org-TBVxyGgtQlGDua2XTwbnLgyv",
    project: "proj_15fvveQcVBwwUMOk0tCFWtST",
    apiKey: "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"
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
