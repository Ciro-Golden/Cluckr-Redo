const path = require("path");
const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("/views");
});

app.get("/views", (req, res) => {
    res.render("sign-in");
});

app.get("/views", (req, res) => {
    res.render("partials/header");
});




const DOMAIN = 'localhost';
const PORT = '4200';
app.listen(PORT, DOMAIN, () => {
    console.log(`💻 Server listening on http://${DOMAIN}:${PORT}`);
});