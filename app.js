document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById('get-weather');
    const output = document.getElementById('show-weather');

    function getWeather() {
        const zip = document.getElementById('zip-code').value;
        const dateBegin = document.getElementById('date-begin').value;
        const dateEnd = document.getElementById('date-end').value;
        console.log(dateBegin, dateEnd);
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zip}/${dateBegin}/${dateEnd}?unitGroup=metric&include=days&key=RRZU5QYJ5KQL4UP4ET4VVTU9M&contentType=json`
        let coordRequest = new XMLHttpRequest();

        coordRequest.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                const response = JSON.parse(this.responseText);
                getElements(response);
            }
        };

        coordRequest.open('GET', url, true);
        coordRequest.send();

        function getElements(response) {

            for (var item of response.days)
            {
                output.innerHTML += `<div class="weather-box"><h3>${item.datetime}:</h3><br><ul><li>High: ${item.tempmax}°C</li><li>Low: ${item.tempmin}°C</li><li>Conditions: ${item.description}</li></ul></div>`;
            }

        }
    }
    button.addEventListener('click', getWeather);
});