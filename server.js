const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// set static content to public folder
app.use(express.static("public"));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//connection to JAWSDB
// const connection = mysql.createConnection(process.env.JAWSDB_URL)

// mysql connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3000,
    user: 'root',
    password: 'root',
    database: 'burger_db'
})

// data
var burgers = []

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

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