document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById('get-weather');

    function getWeather() {
        const zip = document.getElementById('zip-code').value;
        console.log(zip);
        // let coordRequest = new XMLHttpRequest();
        // const url = `https://api.openweathermap.org/data/2.5/weather?q=${zip}&appid=17abed46c26a1d3232c55db9a7274603`;
        let request = new XMLHttpRequest();
        request.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${zip}&appid=17abed46c26a1d3232c55db9a7274603`);
        request.send();
        request.onload = ()=>{
            console.log(JSON.parse(request.response));
        }

    }

    button.addEventListener('click', getWeather);


    // console.log("Hello World!");
});