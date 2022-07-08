/*
 * Javascript for the Leaflet map
 * 7 July 2021, SpyCop
 */

var map = L.map('map').setView([52.045, 5.64], 17); // center map on home

// add tile layers from OSM with attribution
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// add Leaflet-Geoman controls with some options to the map
map.pm.addControls({
  position: 'topleft',
  drawMarker: false,
  drawCircleMarker: false,
  drawPolyline: false,
  drawRectangle: false,
  drawCircle: false,
  drawText: false,
  cutPolygon: false,
  rotateMode: false,
  // remove following line when implementing editing
  editControls: false
});