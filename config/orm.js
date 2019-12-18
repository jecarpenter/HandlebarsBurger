var connection = require("./connection.js");

var orm = {
	selectAll: function (cb) {
		connection.query("select * from burgers", function(err, res){
			if (err) {
				console.log(err);
			}
			cb(res);
		})
	},
	insertOne: function(burgerName, cb) {
		connection.query("insert into burgers (burger_name) values ('" + burgerName + "')", function(err, res){
			if (err) {
				console.log(err);
			}
			cb(res);
		});
	},
	updateOne: function(devoured, id, cb) {
		connection.query("update burgers set devoured = " + devoured + " where id = " + id, function(err, res){
			if (err) {
				console.log(err);
			}
			cb(res);
		})
	}
}

module.exports = orm;