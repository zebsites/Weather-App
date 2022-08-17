document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById('get-weather');

    function getWeather() {
        const zip = document.getElementById('zip-code').value;
        console.log(zip);
    }

    button.addEventListener('click', getWeather);


    console.log("Hello World!");
});