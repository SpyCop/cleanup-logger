/*
 * Javascript for the application server
 * 14 Sept 2021, SpyCop
 */

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require(path.join(__dirname, 'middleware.js'));

app.use(express.json()); // use JSON parser for GeoJSON
app.use(express.urlencoded()); // for encoded form data
app.use(middleware.logger);
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
	res.redirect('index.html');
});

/* POST /api/add_polygon
{
  feature: '{"type":"Feature","properties":{
    name: 'R2D2',
    amount: '42',
    notes: 'The Answer',
    datetime: '2022-09-17T10:31:05.484Z'
  },"geometry":{"type":"Polygon","coordinates":[Array]}}',
}
*/
app.post('/api/add_polygon', function (req, res) {
	polygonJSON = req.body;
	console.log(polygonJSON);
	// TODO: save feature, picker, amount, notes and datetime to database
	// TODO: add validation for properties, using response status for feedback to client
	res.send("Polygon added!");
});

app.listen(PORT, function () {
	console.log('Express server started on port: ' + PORT);
});