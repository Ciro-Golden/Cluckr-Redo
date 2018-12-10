const path = require("path");
const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

app.set("view engine", "ejs");
app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());


app.use((req, res, next) => {
    console.log("🍪 Cookies:", req.cookies);
})

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