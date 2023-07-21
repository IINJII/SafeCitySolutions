var map = L.map('map').setView([39.3271900000, -76.6094200000], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


L.Routing.control({
    waypoints: [
        L.latLng(39.3271900000, -76.6094200000),
        L.latLng(localStorage.getItem('location').split(',')[0], localStorage.getItem('location').split(',')[1])
    ]
}).addTo(map);