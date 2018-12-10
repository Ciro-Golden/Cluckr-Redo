const express = require("express");
const logger = require("morgan");

const app = express();

app.set("view engine", "ejs");
app.use(logger("dev"));


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/views", (req, res) => {
    res.render("index");
});

app.get("/views/partials", (req, res) => {
    res.render("partials/header");
});




const DOMAIN = 'localhost';
const PORT = '4200';
app.listen(PORT, DOMAIN, () => {
    console.log(`💻 Server listening on http://${DOMAIN}:${PORT}`);
});