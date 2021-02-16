const mysql = require("mysql");

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

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;