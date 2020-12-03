async function locationData() {
    let response = await axios.get('location.json');
    let response2 = response.data;
    let loca = response2
    for (let l in loca) {
        let locationMarker = L.marker([loca[l]["lat"], loca[l]["long"]], {icon:newMarker})
        locationMarker.addTo(map);
        locationMarker.bindPopup(`<h5 class='location'> ${loca[l]["location"]}</h5>
        <p style="font-size: 15px"> Class Timing </p>
        <ul> 
        <li style="font-size: 15px">
        ${loca[l]["time"]} 
        </li>
        </ul>
        <button id="book${l}"><a href="#location">Book</a></button>
        `)
        locationMarker.on("click", function () {
        document.querySelector(`#book${l}`).addEventListener("click", function () {
            document.querySelector('#location').innerHTML = loca[l]["location"]
        });
    });
    }
};

locationData();

// ++++++++++++++++++++++++++++++++++++++++++++++

let newMarker = L.icon({
    iconUrl: '/image/marker.png',

    iconSize:     [30, 65], 
});

//++++++++++++++++++++++++++++++++++++++++++++++++++
let input = document.querySelector('.input');
let name = document.querySelector('#name');
let number = document.querySelector('#number');
let email = document.querySelector('#email');

let button = document.querySelector('#apply');
button.addEventListener('click', function () {
    if (input.value === "") {
        alert('Please complete the form before submitting!')
    } else {
        alert("Class Successfully booked!")
    }
});



// map  related +++++++++++++++++++++++++++++++++++
let singapore = [1.3442,103.8125243];
let map = L.map('map',
    {
        scrollWheelZoom: false,
        trackResize: false
    }).setView(singapore, 12);
let link = document.querySelector('#form');



// setup the tile layers++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);