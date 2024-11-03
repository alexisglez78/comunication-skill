function messageText(textResponse, number) {
    let numero = formatMexicanNumber(number);
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": numero,
        "text": {
            "body": textResponse
        },
        "type": "text"
    })

    return data;
}
function formatMexicanNumber(number) {
    return number.replace(/^521(\d{10})$/, '52$1');
}

module.exports = {
    messageText
}