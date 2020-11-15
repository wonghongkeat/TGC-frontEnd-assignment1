let singapore = [ 1.29,103.85];
let map = L.map('map').setView(singapore, 12); 

//markers
let location1 = L.marker([1.3470481,103.8738599]);
location1.addTo(map);
location1.bindPopup(`<h2>Serangoon Sunhine Park<h2>
<p>Classes available</p>
<ul>
<li>Tue 1600</li>
</ul>`);

let location2 = L.marker([1.3158251,103.8561832]);
location2.addTo(map);
location2.bindPopup(`<h2>Groundup SG<h2>
<p>Classes available</p>
<ul>
    <li>Tue 1600</li>
</ul>`);

// setup the tile layers
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
}).addTo(map);