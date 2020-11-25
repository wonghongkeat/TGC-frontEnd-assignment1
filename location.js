async function locationData() {
    let response = await axios.get('location.json');
    let response2 = response.data;
    let loca = response2
    for (let l in loca) {
        let locationMarker = L.marker([loca[l]["lat"], loca[l]["long"]])
        locationMarker.addTo(map);
        locationMarker.bindPopup(`<h5> ${loca[l]["location"]}</h5>
        <p style="font-size: 15px"> Class Timing </p>
        <ul> 
        <li style="font-size: 15px">
        ${loca[l]["time"]} 
        </li>
        </ul>
        <button><a href="#location">Book</a></button>
        `)
        // let button = document.querySelector('#book');
        // button.addEventListener("click", function () {
        //     alert('hello')
        // location.href = document.querySelector('#location');
        // document.querySelector('#location').innerHTML = document.querySelector('h5').innerHTML
        // });
        // locationMarker.on("click", function (event) {
        //     document.querySelector("#book").addEventListener("click", function (event) {
        //         location.href = "location.html?#form";
        //         document.querySelector('#location').innerHTML = document.querySelector('h5').innerHTML
        //     });
    };
};

locationData();

// ++++++++++++++++++++++++++++++++++++++++++++++



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
let singapore = [1.29, 103.85];
let map = L.map('map',
    {
        scrollWheelZoom: false,
        // dragging: false,
        trackResize: false
    }).setView(singapore, 12);
let link = document.querySelector('#form');

//markers
// let location1 = L.marker([1.3470481, 103.8738599]);
// location1.addTo(map);
// location1.bindPopup(`<h2 id='location1'>Serangoon Sunshine Park<h2>
// <p>Classes available</p>
// <ul>
// <li>1600</li>
// </ul>
// <button id='book'>Book</button>
// `);

// location1.on("click", function (event) {
//     document.querySelector("#book").addEventListener("click", function (event) {
//         location.href = "location.html?#form";
//         document.querySelector('#location').innerHTML = document.querySelector('#location1').innerHTML;

//     });
// });


// let location2 = L.marker([1.3158251, 103.8561832]);
// location2.addTo(map);
// location2.bindPopup(`<h2>Groundup SG<h2>
// <p>Classes available</p>
// <ul>
//     <li>Tue 1600</li>
// </ul>`);

// setup the tile layers++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
}).addTo(map);