var Sighting = require('../models/Sighting');	// Doesn't need .js

module.exports = {
	create: function(req, res){
		var newSighting = new Sighting(req.body);
		newSighting.save(function(err, result){
			if (err) return res.status(500).send(err);
			else res.send(result);
		})
		// res.send('create test');
	},
	read: function(req, res){
		
		res.send('read test');
	},
	update: function(req, res){
		res.send('update test');
	},
	delete: function(req, res){
		res.send('delete test');
	}
}