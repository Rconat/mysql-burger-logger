var express = require("express");

// creating route handlers
const router = express.Router()

const burger = require("../models/burger.js");

// middleware
// Router Get
router.get("/", function(req, res){
    burger.selectAll(function(data) {
        res.render("index", {burgers:data});
    })
});

// Router Post
router.post("/", function(req, res) {
    burger.insertOne("burger_name", req.body.burger_name, function(data) {
        res.status(200).send
    })
})

//Router Put
router.put("/:id", function(req, res) {
    const id = req.params.id
    burger.selectOne({id: id}, function(data) {
        const selectedBurger = data[0]

        if (selectedBurger === 0) {
            selectedBurger.devoured = 1
        } else {
            selectedBurger.devoured = 0
        }

        burger.updateOne("devoured", selectedBurger.devoured, {id:id}, function(data) {
            res.status(200).end()
        })
    })
})

module.exports = router;