const orm = require('../config/orm.js')

// data
var burgers = {
    selectAll: function(callBack) {
        orm.selectAll("burgers", condition, function(res) {
            callBack(res)
        })
    },
    selectOne: function(condition, callBack) {
        orm.selectOne("burgers", condition, function(res) {
            callBack(res)
        })
    },
    insertOne: function(column, columnVal, callBack) {
        orm.insertOne(column, columnVal, function(res) {
            callBack(res)
        })
    },
    updateOne: function(column, columnVal, condition, callBack) {
        orm.updateOne(column, columnVal, condition, function(res) {
            callBack(res)
        })
    }
}

module.exports = burgers