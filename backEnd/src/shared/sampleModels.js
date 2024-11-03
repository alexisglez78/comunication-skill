function sampleText(textResponse, number) {
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
function sampleImage(number) {
    let numero = formatMexicanNumber(number);
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": numero,
        "type": "image",
        "image": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/image_whatsapp.png"
        }
    })

    return data;
}
function sampleAudio(number) {
    let numero = formatMexicanNumber(number);
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": numero,
        "type": "audio",
        "audio": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/audio_whatsapp.mp3"
        }
    })

    return data;
}
function sampleVideo(number) {
    let numero = formatMexicanNumber(number);
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": numero,
        "type": "video",
        "video": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/video_whatsapp.mp4"
        }
    })

    return data;
}
function sampleDocument(number) {
    let numero = formatMexicanNumber(number);
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": numero,
        "type": "document",
        "document": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/document_whatsapp.pdf"
        }
    })

    return data;
}
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
    })

    return data;
}
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
    })

    return data;
}
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

    })

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
}

