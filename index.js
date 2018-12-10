const express = require("express");

const app = express();






app.get("/", (req, res) => {
    res.send("Hello World!");
});




const DOMAIN = 'localhost';
const PORT = '4200';
app.listen(PORT, DOMAIN, () => {
    console.log(`💻 Server listening on http://${DOMAIN}:${PORT}`);
});