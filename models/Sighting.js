var mongoose = require('mongoose');
var sightingSchema = new mongoose.Schema({
	name: { type: String, lowercase: true },
	order: { type: String, lowercase: true, maxLength: 20 },
	status: { type: String, lowercase: true, enum: 
		['extinct', 'endangered', 'least concern'] },
	confirmed: { type: Boolean, default: false },
	numberSeen: { type: Number, min: 1 }
});

module.exports = mongoose.model('Sighting', sightingSchema);