const express = require("express");
const logger = require("morgan");

const app = express();


app.use(logger("dev"));


app.get("/", (req, res) => {
    res.send("Hello World!");
});






const DOMAIN = 'localhost';
const PORT = '4200';
app.listen(PORT, DOMAIN, () => {
    console.log(`💻 Server listening on http://${DOMAIN}:${PORT}`);
});