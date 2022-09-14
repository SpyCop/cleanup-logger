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
app.use(middleware.logger);
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
	res.redirect('index.html');
});

/* POST /api/add_polygon
{
  type: 'Feature',
  properties: {},
  geometry: { type: 'Polygon', coordinates: [ [Array] ] }
}
*/
app.post('/api/add_polygon', function (req, res) {
	polygon = req.body;
	console.log(polygon);
	// TODO: save polygon to database
	res.send("Polygon added!");
});

app.listen(PORT, function () {
	console.log('Express server started on port: ' + PORT);
});