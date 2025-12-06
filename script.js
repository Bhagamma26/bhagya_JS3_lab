const apiKey = "02b608ee90792c25fc03fd31af1aac6d";

function getWeather() {
    const city = document.getElementById("city").value;

    console.log("City entered:", city);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    console.log("URL:", url);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("API Response:", data);

            if (data.cod !== 200) {
                alert(data.message);
                return;
            }

            document.getElementById("cityName").innerText = data.name;
            document.getElementById("temp").innerText =
                "Temperature: " + data.main.temp + " °C";
            document.getElementById("desc").innerText =
                "Weather: " + data.weather[0].description;
            document.getElementById("humidity").innerText =
                "Humidity: " + data.main.humidity + "%";
        })
        .catch(error => {
            console.error("Fetch error:", error);
            alert("Network or API error");
        });
}
