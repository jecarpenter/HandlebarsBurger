var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res){
	burger.selectAll(function(data){
		var hbsObject = {
			burgers: data
		};
		res.render("index", hbsObject);
	});
});

router.post("/burgers/create", function(req, res){
	burger.insertOne(req.body.burger_name, function(){
		res.redirect("/");
	});
})

router.put("/burgers/update/:id", function(req, res){
	var condition = req.params.id;
	console.log(req.body.devoured);
	burger.updateOne(req.body.devoured, condition, function(){
		res.redirect("/");
	})
})

module.exports = router;