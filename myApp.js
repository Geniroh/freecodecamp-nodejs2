let express = require('express');
let app = express();
require('dotenv').config();

app.get("/json", (req, res) => {
    let reply
    if (process.env.MESSAGE_STYLE === "uppercase") {
        reply = "Hello json".toUpperCase();
    } else {
        reply = "Hello json";
    }
    res.json({
        message: reply
    })
});

app.use('/public', express.static(__dirname+ '/public'));

app.get("/", (req,res) => {
    absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
})



































 module.exports = app;
