const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiY2hhd2VzIiwiYSI6ImNqZ28zaDg3NzBvdW8ycXIxbTd1cGgxb2QifQ.qqh3iNQQkCywkfa8ozkMmg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.639, 41.8954], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 15, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerElement = document.createElement('div');
markerElement.style.width = "15px";
markerElement.style.height = "15px";
markerElement.style.backgroundColor = "red";

new mapboxgl.Marker(markerElement).setLngLat([-87.639, 41.8954]).addTo(map);
