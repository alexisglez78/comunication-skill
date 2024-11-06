/**
 * Formats a Mexican phone number by removing the country code if present.
 * @param {string} number - The phone number to be formatted.
 * @returns {string} - The formatted phone number with the country code '52' prefix.
 */
function formatMexicanNumber(number) {
    return number.replace(/^521(\d{10})$/, '52$1');
}

/**
 * Generates a WhatsApp message payload for sending a text message.
 * @param {string} textResponse - The text content of the message.
 * @param {string} number - The recipient's phone number.
 * @returns {string} - The JSON string representing the message payload for the WhatsApp API.
 */
function messageText(textResponse, number) {
    let numero = formatMexicanNumber(number);
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": numero,
        "text": {
            "body": textResponse
        },
        "type": "text"
    });

    return data;
}

module.exports = {
    messageText
};
