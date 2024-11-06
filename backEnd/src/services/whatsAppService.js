const https = require("https");


function sendMessageWhatsapp(data){


    const options = {
        host: "graph.facebook.com",
        path: "/v20.0/457997114067394/messages",
        method: "POST",
        body: data,
        headers: {
            "content-type":"application/json",
            "Authorization": "Bearer EAAMZC6MKb7bQBOy1UTaNMaIjufJkFQMZCqlW5lxXcAvi5zZCcdOTT6aGIPZBTnIiWc4PJFMzz9Md7cwe9BsowTdGnqcRu3YWSVPvDzo9RuwNEJcw0g5fmvbLmCxwC6Yp36q8FFowMVlspZBoGmwXF8lnJ9ZAgCdF7qL6bisrvISmEoT8PpkLLMJrWAlWBZBRV89YYHFeCb3KzZAxZBINlfLZCKCJR9F20ZD"
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