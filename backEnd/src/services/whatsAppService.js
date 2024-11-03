const https = require("https");


function sendMessageWhatsapp(data){


    const options = {
        host: "graph.facebook.com",
        path: "/v20.0/457997114067394/messages",
        method: "POST",
        body: data,
        headers: {
            "content-type":"application/json",
            "Authorization": "Bearer EAAMZC6MKb7bQBOZCdAioFEW9RzB1RRWs8rZBVjPfjDhozhXfobcT5vHCmBmWKvsRJZBB7ZAa6afSPeqobr9hDt1K0vu1ZB5m7EtoM5Fqj9LXaLI1xK819Cb96g4xa805Qd1KwOyUHBgzVZC9rvG1kFoB7N5l4dv9NbKV3gWrMmLuwJmr1j5A0S4UlO3kcUwYsrJwbDOhkSueiIJQCQU45g3RhXtKQ4ZD"
        }

    }
    const req = https.request(options, res => {
        res.on("data",d => {
            process.stdout.write(d);
        });
    });

    req.on("error",e => {
        console.error(e);
    })

    req.write(data);
    req.end();

};

module.exports = {
    sendMessageWhatsapp
}