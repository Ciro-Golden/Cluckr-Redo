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

app.use(cookieParser());


// app.get("/", (req, res) => {
//     res.send("/views");
// });

app.use((req, res, next) => {
    console.log("🍪 Cookies:", req.cookies);

    const username = req.cookies.username;

    res.locals.username = "";
    if (username) {
        res.locals.username = username;
        console.log(`😎 Signed in as ${username}`);
    }
    next();
});

app.get("/sign-in", (req, res) => {
    res.render("sign-in");
});

// Routes 

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7;
app.post("/sign-in", (req, res) => {
    const username = req.body.username;

    res.cookie("username", username, { maxAge: COOKIE_MAX_AGE });

    res.redirect("/views");

});

app.post("/sign_out", (req, res) => {
    res.clearCookie("username");
    res.redirect("/views");
});

app.get("/views", (req, res) => {
    res.render("sign-in");
});

app.get("/views/partials", (req, res) => {
    res.render("partials/header");
});






const DOMAIN = 'localhost';
const PORT = '4200';
app.listen(PORT, DOMAIN, () => {
    console.log(`💻 Server listening on http://${DOMAIN}:${PORT}`);
});