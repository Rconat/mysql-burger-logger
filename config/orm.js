const connection = require("./connection.js")

// data
const orm = {
    selectAll: function(tableData, callBack) {
        var queryAll= "SELECT * FROM ??"
 
        connection.query(queryAll, [tableData], function(err, result) {
            if (err) { throw err }
            callBack(result)
        })
    },
 
    selectOne: function(tableData, condition, callBack) {
        var queryOne= "SELECT * FROM ?? WHERE ? ;"
 
        connection.query(queryOne, [tableData, condition], function(err, result) {
            if (err) { throw err }
            callBack(result)
        })
    },
 
    insertOne: function(column, columnVal, callBack) {
        var queryInsert = "INSERT INTO burgers ?? VALUES ?;"
 
        connection.query(queryInsert, [column, columnVal], function(err, result) {
            if (err) { throw err }
            callBack(result)
        })
    },
 
    updateOne: function(column, columnVal, callBack) {
        var queryUpdate = "UPDATE burgers SET ?? = ? WHERE ?;"
 
        connection.query(queryUpdate, [column, columnVal, condition], function (err, result) {
            if (err) { throw err}
            callBack(result)
        })
    }
}

module.exports = orm;