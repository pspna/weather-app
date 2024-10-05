const apiKey = "3608139485d18da869caf5ec0af2946e";
async function checkWeather(e) {
  e.preventDefault();
  const city = document.querySelector("#search").value;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humy").innerHTML = data.main.humidity + "%";
    document.querySelector(".speed").innerHTML = data.wind.speed + " km/h";
    document.querySelector(
      ".weather"
    ).src = `./images/${data.weather[0].main}.png`;
    document.querySelector(".temp").innerHTML = `${Math.round(
      data.main.temp
    )}°C`;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
document.querySelector("form").addEventListener("submit", checkWeather);
