var express = require("express");

// creating route handlers
var router = express.Router()

var burger = require("../models/burgers.js");

// middleware
router.get("/", function(req, res){
    burger.selectAll(function(data) {
        res.render("index", {burgers:data});
    })
});
