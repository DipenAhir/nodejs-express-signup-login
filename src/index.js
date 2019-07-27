var hbs = require('hbs');
var path = require('path');
var express = require("express");
var bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();
app.use(express.static('public/'));
const PORT = 3000;
app.set('view engine', 'hbs');

const partialsPath = path.join(__dirname, "../views/partials");
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
    res.render("signup");
});

app.route("/signup")
    .get((req, res) => {
        res.render("signup");
    })
    .post(urlencodedParser, (req, res) => {
        require("./APIs/signup/Post")(req, res);
    })

app.route("/login")
    .get((req, res) => {
        res.render("login");
    })
    .post(urlencodedParser, (req, res) => {
        require("./APIs/login/Post")(req, res);
    });

app.route("/name")
    .post(urlencodedParser, (req, res) => {
        require("./APIs/name/Post")(req, res);
    })

app.route("/password")
    .post(urlencodedParser, (req, res) => {
        require("./APIs/password/Post")(req, res);
    })


app.listen(PORT, "localhost", () => {
    console.log("server is runnig on port : " + PORT)
})