let express = require('express');
let app = express();
require('dotenv').config();

app.get("/json", (req, res) => {
    if( !process.env['MESSAGE_STYLE'] == 'uppercase'){
            res.json({
        message: "Hello json"
        });
    }
    res.json({
        message: "HELLO JSON"
    });
});

app.use('/public', express.static(__dirname+ '/public'));

app.get("/", (req,res) => {
    absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
})



































 module.exports = app;
