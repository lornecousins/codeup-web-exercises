"use strict";

var lat = 29.41;
var lng = -98.49;

mapboxgl.accessToken = MAPBOX_API_TOKEN;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.4916, 29.4252,],
    zoom: 9
});
weatherMap()
function weatherMap() {

    $.get('https://api.openweathermap.org/data/2.5/onecall', {
        lat: lat,
        lon: lng,
        appid: WEATHER_TOKEN,
        exclude: 'minutely,hourly,current,alerts',
        units: 'imperial'
    }).done(function (data) {
        function createHTML(data) {
            var html = ''
            for (var i = 0; i < 5; i++) {
                var dateData = data.daily[i].dt;
                var date = new Date(dateData * 1000).toDateString()
                var maxTemp = data.daily[i].temp.max;
                var minTemp = data.daily[i].temp.min;
                var humidity = data.daily[i].humidity;
                var windSpeed = data.daily[i].wind_speed;
                html +=
                    '<div class="card" style="width: 18rem;">' +
                    '<div class="card-header">' +
                    date +
                    '</div>' +
                    '<ul class="list-group list-group-flush">' +
                    ' <li class="list-group-item">' + 'High/Low: ' + maxTemp + '/' + minTemp + '</li>' +
                    '<li class="list-group-item">' + 'Humidity: ' + humidity + '</li>' +
                    '<li class="list-group-item">' + 'Wind Speed: ' + windSpeed + 'mph' + '</li>' +
                    '</ul>' +
                    '</div>'
            }
            return html;
        }

        $('#dailyWeather').html(createHTML(data))
        // $('#userInput').click(function() {
        //     $(#userInput).html(createHTML(data))
        // })
    });
}

var coordinates = document.getElementById('coordinates');
var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([lng, lat])
    .addTo(map);

function onDragEnd() {
    var lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
    lng = lngLat.lng;
    lat = lngLat.lat;
    reverseGeocode(lngLat, MAPBOX_API_TOKEN).then(function(data) {
    })
    weatherMap()

}
marker.on('dragend', onDragEnd);

// var geocoder = new MapboxGeocoder({
//     accessToken: mapboxgl.accessToken,
//     mapboxgl: mapboxgl
// });
//
// document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
// $('button').click(function() {
//     $('#userInput').click();
// })