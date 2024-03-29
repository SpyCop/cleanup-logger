/*
 * Javascript for the Leaflet map client
 * 14 Sept 2021, SpyCop
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

var newestPolygon; // temp variable for saving last drawn layer

// listen to when a layer is finished
map.on('pm:create', function (event) {
    newestPolygon = event.layer;

    toggleModal(); // show modal for user input
});

// shows or hides the form modal
function toggleModal () {
    mdl = document.getElementById("modalContainer");
    mdl.style.visibility = (mdl.style.visibility == "visible") ? "hidden" : "visible";
}

// cancel the form and drawing action
function cancelForm () {
    toggleModal(); // hide the form modal
    var form = document.getElementById('userDataForm');
    form.reset(); // reset the form fields

    // also remove drawn layer
    map.removeLayer(newestPolygon);
}

// simulate post behavior of form, preventing redirect
function sendPolygonData (submitEvent) {
    submitEvent.preventDefault();
    toggleModal(); // hide modal

    var form = document.getElementById('userDataForm');

    var polygonJSON = newestPolygon.toGeoJSON();
    polygonJSON.properties.name = form.elements.name.value;
    polygonJSON.properties.amount = form.elements.amount.value;
    polygonJSON.properties.notes = form.elements.notes.value;
    polygonJSON.properties.datetime = new Date();

    // POST the polygon to the backend
    axios({
        method: 'post',
        url: '/api/add_polygon',
        data: polygonJSON
    }).then(function (res) {
        // TODO: catch server side validation errors here
        // on fail: retoggle the modal, don't reset the form and display the error
        // on success: reset form and
        // TODO: add properties to the drawn layer and add click event to display them
        form.reset();
        console.log(res);
    }).catch(function (err) {
        console.log(err);
    });
}

// find form and add submit listener
var form = document.getElementById("userDataForm");
form.addEventListener("submit", sendPolygonData, true);