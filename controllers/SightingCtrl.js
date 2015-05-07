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
		Sighting
		.find(req.query)
		.exec(function(err, result){
			if (err) return res.status(500).send(err);
			else res.send(result);
		});	
		// res.send('read test');
	},
	update: function(req, res){
		Sighting
		.findByIdAndUpdate(req.params.id, req.body, function(err, result){
				if (err) return res.status(500).send(err);
				else res.send(result);
		});
		// res.send('update test');
	},
	delete: function(req, res){
		Sighting
		.findByIdAndRemove(req.params.id, function(err, result){
				if (err) return res.status(500).send(err);
				else res.send(result);
		});
		// res.send('delete test');
	}
}