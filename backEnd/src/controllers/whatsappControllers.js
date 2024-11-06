const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const processMessage = require("../shared/processMessage");
const { sendToSocket } = require("../socket");

exports.verifyToken = (req, res) => {
    try {
        var accesToken = "Tknjjgasdo87436";
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];

        if (challenge != null && token != null && token == accesToken) {
            res.send(challenge);
        } else {
            res.status(400).send();
        }

    } catch (error) {
        res.status(400).send();
    }
};

exports.receiveMessage = async (req, res) => {
    try {
        var entry = (req.body["entry"])[0];
        var changes = (entry["changes"])[0];
        var value = changes["value"];
        var messageObject = value["messages"];

        if (typeof messageObject != "undefined") {
            var messages = messageObject[0];
            var number = messages["from"];
            var text = getTextUser(messages);

            if (text != "") {
                await processMessage.process(text, number);
                try {
                    sendToSocket(number, text);
                } catch (error) {
                    console.log(error,"error socket");
                }
            }

        }

        res.send("EVENT_RECEIVED");
    } catch (error) {
        myConsole.log(error);
        res.send("EVENT_RECEIVED");
    }
};

function getTextUser(messages) {
    var text = "";
    var typeMessage = messages["type"];

    console.log(typeMessage);

    if (typeMessage == "text") {
        text = (messages["text"])["body"];
    }
    else if (typeMessage == "interactive") {

        var interactiveObject = messages["interactive"];
        var typeInteractive = interactiveObject["type"];

        if (typeInteractive == "button_reply") {
            text = (interactiveObject["button_reply"])["title"];
        }
        else if (typeInteractive == "list_reply") {
            text = (interactiveObject["list_reply"])["title"];
        }
        else {
            myConsole.log("sin mensaje");
        }
    } else {
        myConsole.log("sin mensaje");
    }
    return text;
}
