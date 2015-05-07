var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
// c:\mongodb\server\3.0\bin\mongod.exe
// c:\mongodb\server\3.0\bin\mongo.ex
// Remember to connect to node server.js!


var app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res){
	res.send('hello');
});

var port = 8980;
var mongoUri = 'mongodb://localhost:27017/mini-birds-mongoose';

mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
	console.log('Connected to mongoDB at:', mongoUri);
});

app.listen(port, function(){
	console.log('Listening on port', port);
})