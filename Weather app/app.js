function getWeather() {
    const cityInput = document.getElementById("cityInput");
    const weatherInfo = document.getElementById("weatherInfo");

    // Check if the input is not empty
    if (cityInput.value.trim() !== "") {
        const apiKey = "04f2bb000ec94f7cb5a104349241901"; // Replace with your WeatherAPI key
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput.value}`;

        // Fetch weather data from the WeatherAPI
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    // Handle API errors
                    weatherInfo.innerHTML = `Error: ${data.error.message}`;
                } else {
                    const temperature = data.current.temp_c;
                    const description = data.current.condition.text;

                    // Display the weather information
                    weatherInfo.innerHTML = `<p>Temperature: ${temperature} °C</p>${description}`;
                }
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                weatherInfo.innerHTML = "Error fetching weather data. Please try again.";
            });
    }
}
