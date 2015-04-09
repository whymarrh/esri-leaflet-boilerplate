"use strict";

require("leaflet/dist/leaflet.css");
require("../css/index.css");

require("leaflet");
require("esri-leaflet");

var oceanBasemap = L.esri.basemapLayer("Oceans", {
    detectRetina: true
});
var oceanLabels = L.esri.basemapLayer("OceansLabels");

var map = L.map("app");

map.setView([47.524189, -52.7134693], 10);
oceanBasemap.addTo(map);
oceanLabels.addTo(map);
