mapboxgl.accessToken = mapToken;
let camp = JSON.parse(cmpGeometry);
const coordinates = camp.coordinates;
const campTitle = JSON.parse(cmpTitle);
const campLocation = JSON.parse(cmpLocation);

console.log(coordinates)
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: coordinates, //[-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());
new mapboxgl.Marker()
    .setLngLat(coordinates)//[-74.5, 40])
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
        .setHTML(
           ` <h3>${campTitle}</h3>
            <p>${campLocation}/p>`
        )
    )
    .addTo(map)