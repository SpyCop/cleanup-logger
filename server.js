var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require(path.join(__dirname, '/middleware.js'));

app.use(middleware.logger);

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(PORT, function () {
	console.log('Express server started on port: ' + PORT);
});