document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById('get-weather');

    function getWeather() {
        const zip = document.getElementById('zip-code').value;
        let coordRequest = new XMLHttpRequest();
        coordRequest.open('GET', `https://api.openweathermap.org/geo/1.0/zip?zip=${zip},US&appid=17abed46c26a1d3232c55db9a7274603`);
        coordRequest.send();
        coordRequest.onload = ()=>{
            var lat = coordRequest.response.lat;
            var lon = coordRequest.response.lon;
            console.log(lat, lon)
        }


        let weatherRequest = new XMLHttpRequest();
        weatherRequest.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${zip}&appid=17abed46c26a1d3232c55db9a7274603`);
        weatherRequest.send();
        // weatherRequest.onload = ()=>{
        //     console.log(JSON.parse(weatherRequest.response));
        // }
    }

    button.addEventListener('click', getWeather);
});