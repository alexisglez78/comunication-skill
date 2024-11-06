/**
 * Sends a text message to a WhatsApp number.
 * 
 * @param {string} textResponse - The text content of the message.
 * @param {string} number - The phone number to send the message to (in the format 521XXXXXXXXXX).
 * @returns {string} The JSON string with the formatted message data.
 */
function sampleText(textResponse, number) {
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

/**
 * Formats the Mexican phone number by removing the country code and replacing it with the correct format.
 *
 * @param {string} number - The phone number to format.
 * @returns {string} The formatted phone number.
 */
function formatMexicanNumber(number) {
    return number.replace(/^521(\d{10})$/, '52$1');
}

/**
 * Sends an image to a WhatsApp number.
 * 
 * @param {string} number - The phone number to send the image to (in the format 521XXXXXXXXXX).
 * @returns {string} The JSON string with the image message data.
 */
function sampleImage(number) {
    let numero = formatMexicanNumber(number);
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": numero,
        "type": "image",
        "image": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/image_whatsapp.png"
        }
    });

    return data;
}

/**
 * Sends an audio message to a WhatsApp number.
 * 
 * @param {string} number - The phone number to send the audio to (in the format 521XXXXXXXXXX).
 * @returns {string} The JSON string with the audio message data.
 */
function sampleAudio(number) {
    let numero = formatMexicanNumber(number);
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": numero,
        "type": "audio",
        "audio": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/audio_whatsapp.mp3"
        }
    });

    return data;
}

/**
 * Sends a video message to a WhatsApp number.
 * 
 * @param {string} number - The phone number to send the video to (in the format 521XXXXXXXXXX).
 * @returns {string} The JSON string with the video message data.
 */
function sampleVideo(number) {
    let numero = formatMexicanNumber(number);
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": numero,
        "type": "video",
        "video": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/video_whatsapp.mp4"
        }
    });

    return data;
}

/**
 * Sends a document to a WhatsApp number.
 * 
 * @param {string} number - The phone number to send the document to (in the format 521XXXXXXXXXX).
 * @returns {string} The JSON string with the document message data.
 */
function sampleDocument(number) {
    let numero = formatMexicanNumber(number);
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": numero,
        "type": "document",
        "document": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/document_whatsapp.pdf"
        }
    });

    return data;
}

/**
 * Sends an interactive button message to a WhatsApp number.
 * 
 * @param {string} number - The phone number to send the buttons to (in the format 521XXXXXXXXXX).
 * @returns {string} The JSON string with the button message data.
 */
function sampleButtons(number) {
    let numero = formatMexicanNumber(number);
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": numero,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "Estas de acuerdo ?"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "001",
                            "title": "Si"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "002",
                            "title": "No"
                        }
                    }
                ]
            }
        }
    });

    return data;
}

/**
 * Sends an interactive list message to a WhatsApp number.
 * 
 * @param {string} number - The phone number to send the list to (in the format 521XXXXXXXXXX).
 * @returns {string} The JSON string with the list message data.
 */
function sampleList(number) {
    let numero = formatMexicanNumber(number);
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": numero,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "header": {
                "type": "text",
                "text": "tengo estas opciones"
            },
            "body": {
                "text": "<BODY_TEXT>"
            },
            "footer": {
                "text": "<FOOTER_TEXT>"
            },
            "action": {
                "button": "<BUTTON_TEXT>",
                "sections": [
                    {
                        "title": "<LIST_SECTION_1_TITLE>",
                        "rows": [
                            {
                                "id": "<LIST_SECTION_1_ROW_1_ID>",
                                "title": "<SECTION_1_ROW_1_TITLE>",
                                "description": "<SECTION_1_ROW_1_DESC>"
                            },
                            {
                                "id": "<LIST_SECTION_1_ROW_2_ID>",
                                "title": "<SECTION_1_ROW_2_TITLE>",
                                "description": "<SECTION_1_ROW_2_DESC>"
                            }
                        ]
                    },
                    {
                        "title": "<LIST_SECTION_2_TITLE>",
                        "rows": [
                            {
                                "id": "<LIST_SECTION_2_ROW_1_ID>",
                                "title": "<SECTION_2_ROW_1_TITLE>",
                                "description": "<SECTION_2_ROW_1_DESC>"
                            },
                            {
                                "id": "<LIST_SECTION_2_ROW_2_ID>",
                                "title": "<SECTION_2_ROW_2_TITLE>",
                                "description": "<SECTION_2_ROW_2_DESC>"
                            }
                        ]
                    }
                ]
            }
        }
    });

    return data;
}

/**
 * Sends a location message to a WhatsApp number.
 * 
 * @param {string} number - The phone number to send the location to (in the format 521XXXXXXXXXX).
 * @returns {string} The JSON string with the location message data.
 */
function sampleLocation(number) {
    let numero = formatMexicanNumber(number);
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": numero,
        "type": "location",
        "location": {
            "latitude": "19.5983829",
            "longitude": "-99.2824903",
            "name": "Clara Cordova Moran",
            "address": "Paulino Miranda 3, Clara Cordova Moran, 54474 Cdad. Nicolás Romero, Méx."
        }
    });

    return data;
}

module.exports = {
    sampleText,
    sampleImage,
    sampleAudio,
    sampleVideo,
    sampleDocument,
    sampleButtons,
    sampleList,
    sampleLocation
};
