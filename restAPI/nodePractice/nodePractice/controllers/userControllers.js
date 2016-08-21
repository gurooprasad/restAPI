var helpers = require('../config/helperFunctions.js');

var users = {};
var max_user_id = 0;

module.exports = function(server) {

	server.get("/", function(req, res, next){
		helpers.success(res, next, users);
	});

	server.post("/adduser", function(req, res, next){

		var user = req.params;
		max_user_id++;
		user.id = max_user_id;
		users[user.id] = user;
		helpers.success(res, next, user);
	});

	server.put("/adduser/:id", function(req, res, next){

		if(typeof(users[req.params.id] === 'undefined')){
			helpers.failure (res, next, 'user not found', 404);
		}
		var user = users[parseInt(req.params.id)];
		var updates = req.params;
		for (var field in updates){
			user[field] = updates[field];
		}
		helpers.success(res, next, user);
	});

	server.del("/adduser/:id", function(req, res, next){

		if(typeof(users[req.params.id] === 'undefined')){
			helpers.failure (res, next, 'user not found', 404);
		}

		delete users[parseInt(req.params.id)];
		helpers.success(res, next, []);
	});


}

