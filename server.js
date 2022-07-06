var express = require('express');
var path = require('path');
var favicon = require('serve-favicon')

var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require(path.join(__dirname, 'middleware.js'));

app.use(middleware.logger);
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
	res.redirect(' index.html');
});

app.listen(PORT, function () {
	console.log('Express server started on port: ' + PORT);
});