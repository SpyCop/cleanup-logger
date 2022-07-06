/*
 * Javascript for the Leaflet map
 * 6 July 2021, SpyCop
 */

var map = L.map('map').setView([52.045, 5.64], 17); // center map on home

// add tile layers from OSM with attribution
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);