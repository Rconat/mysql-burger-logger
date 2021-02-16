const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// set static content to public folder
app.use(express.static("public"));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// data
var burgers = []


// routes
// get route
app.get("/", function(req, res) {
    res.render("index", burgers)
});

// post route
app.post("/", function(req, res) {
    res.send('POST request to the homepage')
})


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    console.log("server is listening on: http://localhost:" + PORT);
});