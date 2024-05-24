const apiKey = "8f5f783d0052cefe5a4e5af06b7508ff";
const apiUrl =
	"https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchBar = document.querySelector(".searchBar input");
const button = document.querySelector(".searchBar button");
const weatherIcon = document.querySelector(".weatherIcon");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");

async function checkWeather(cityName) {
	const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);

	if (response.status == 404) {
		error.style.display = "block";
		weather.style.display = "none";
	} else {
		let data = await response.json();

		city.innerHTML = data.name;
		temp.innerHTML = Math.round(data.main.temp) + " °C";
		humidity.innerHTML = data.main.humidity + " %";
		wind.innerHTML = data.wind.speed + " Km/H";

		if (data.weather[0].main == "Clouds") {
			weatherIcon.src = "images/cloud.svg";
		} else if (data.weather[0].main == "Clear") {
			weatherIcon.src = "images/clear.svg";
		} else if (data.weather[0].main == "Rain") {
			weatherIcon.src = "images/rainy.svg";
		} else if (data.weather[0].main == "Drizzle") {
			weatherIcon.src = "images/drizzle.svg";
		} else if (data.weather[0].main == "Mist") {
			weatherIcon.src = "images/mist.svg";
		} else if (data.weather[0].main == "Snow") {
			weatherIcon.src = "images/snow.svg";
		}

		weather.style.display = "block";
		error.style.display = "none";
	}
}

button.addEventListener("click", () => {
	checkWeather(searchBar.value);
});
