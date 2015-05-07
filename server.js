// DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
// c:\mongodb\server\3.0\bin\mongod.exe
// c:\mongodb\server\3.0\bin\mongo.ex
// Remember to connect to node server.js!

// CONTROLLERS
var SightingCtrl = require('./controllers/SightingCtrl');	// Don't need .js at the end

// SERVER VARIABLES
var app = express();

// EXPRESS MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());

// ENDPOINTS

// TEST ENDPOINT
// app.get('/', function(req, res){
// 	res.send('hello');
// });
app.post('/sighting', SightingCtrl.create);	// Referencing SightingCtrl.create in SightingCtrl.js
app.get('/sighting', SightingCtrl.read);
app.put('/sighting/:id', SightingCtrl.update);
app.delete('/sighting/:id', SightingCtrl.delete);

// CONNECTIONS
var port = 8980;
var mongoUri = 'mongodb://localhost:27017/mini-birds-mongoose';

mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
	console.log('Connected to mongoDB at:', mongoUri);
});

// LISTENING
app.listen(port, function(){
	console.log('Listening on port', port);
})