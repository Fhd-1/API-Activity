const apiKey = '2dcee87748f44ec7813113851241710';

document.getElementById('search-btn').addEventListener('click', searchWeather);
document.getElementById('city-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        searchWeather();
    }
});

function searchWeather() {
    const city = document.getElementById('city-input').value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    // Fetching the forecast data
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const forecast = data.forecast.forecastday[0].day;
            document.getElementById('high-temp').textContent = `High: ${forecast.maxtemp_c}°C`;
            document.getElementById('low-temp').textContent = `Low: ${forecast.mintemp_c}°C`;
            document.getElementById('wind-speed').textContent = `Wind Speed: ${data.current.wind_kph} kph`;
        })
        .catch(error => {
            alert('Failed. Please try again.');
            console.log(error);
        });
}

