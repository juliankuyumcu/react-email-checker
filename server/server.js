const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

app.use(cors({origin: ["http://localhost:3000"]}));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
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