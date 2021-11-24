const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const PORT = 5000;

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/build')));

app.post('/api/test', (req, res) => {
    if(req.body.firstName.includes("<"))
        res.status(400).json("Bad request!")

    res.json("Your name is: " + req.body.firstName + " " + req.body.lastName);
});

app.post('/api/emailCheck', (req, res) => {
    if(/^[\w\.]+\@[^ \@]+\.[A-z]{2,4}$/.test(req.body.email)) {
        res.json("valid");
    } else {
        res.json("invalid");
    }
});

app.listen(PORT, () => {
    console.log("Listening on port: " + PORT);
})