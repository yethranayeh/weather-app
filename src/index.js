/** @format */

import "./reset.css";
import "./style.css";
import PubSub from "pubsub-js";
import DOM from "./DOM.js";

DOM.init();

const Events = {
	LANGUAGE_CHANGED: "language-changed",
	SEARCH_SUBMITTED: "search_submitted",
	WEATHER_LOADED: "weather_loaded",
	WEATHER_ERROR: "weather_error"
};

/**
 * @param {string} apiProxy - The proxy to use for the API call
 * @param {string} input - City name
 * @param {string} units - Unit (metric or imperial)
 * @param {string} lang - Language (en or fr)
 */
async function getWeather(apiProxy, city, units, lang) {
	const response = await fetch(`${apiProxy}?q=${city}&units=${units}&lang=${lang}`, { mode: "cors" });
	const data = await response.json();
	return data;
}

// Start: Development
let tempData = {
	coord: { lon: 2.3488, lat: 48.8534 },
	weather: [{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" }],
	base: "stations",
	main: { temp: 9.06, feels_like: 8.76, temp_min: 7.99, temp_max: 9.87, pressure: 1032, humidity: 95 },
	visibility: 10000,
	wind: { speed: 1.34, deg: 270, gust: 3.13 },
	clouds: { all: 100 },
	dt: 1643494604,
	sys: { type: 2, id: 2041230, country: "FR", sunrise: 1643441096, sunset: 1643474537 },
	timezone: 3600,
	id: 2988507,
	name: "Paris",
	cod: 200
};

DOM.displayWeather(tempData);

let weather = [
	"Clouds",
	"Rain",
	"Snow",
	"Clear",
	"Thunderstorm",
	"Drizzle",
	"Mist",
	"Smoke",
	"Fog",
	"Haze",
	"Dust",
	"Sand",
	"Ash",
	"Squall",
	"Tornado"
];
let time = ["d", "n"];

const sleep = (milliseconds) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function loop() {
	let body = document.querySelector("body");
	for (let t of time) {
		for (let w of weather) {
			body.setAttribute("data-weather", w);
			body.setAttribute("data-time", t);
			await sleep(1000);
		}
	}
}

loop();
// End: Development

// Development
const apiProxy = "http://localhost:5000/weather";
// Production
// const apiProxy = "https://aa-api-proxy.herokuapp.com/weather";

const form = {
	self: document.querySelector("form"),
	input: document.querySelector("input"),
	button: document.querySelector(".search-area i"),
	units: document.querySelectorAll("[type=radio]"),
	unit: document.querySelector("[name=units]:checked"),
	lang: document.querySelector("select")
};

// Event publishing and event listeners
form.lang.addEventListener("change", (event) => {
	PubSub.publish(Events.LANGUAGE_CHANGED, event.target.value);
});

form.self.addEventListener("submit", (event) => {
	event.preventDefault();
	PubSub.publish(Events.SEARCH_SUBMITTED, form.input.value);
	form.input.value = "";
});

form.button.addEventListener("click", (event) => {
	if (form.self.checkValidity()) {
		PubSub.publish(Events.SEARCH_SUBMITTED, form.input.value);
	}
});

form.units.forEach((unit) => {
	unit.addEventListener("change", (event) => {
		form.unit = event.target;
	});
});

// Event subscriptions
PubSub.subscribe(Events.SEARCH_SUBMITTED, (topic, input) => {
	DOM.displayLoading();

	getWeather(apiProxy, input, form.unit.id, form.lang.value)
		.then((data) => {
			// If the data is valid, publish the weather data
			// if it returns 404, publish and throw an error
			if (data.cod === "404") {
				throw new Error(data.message);
			} else {
				PubSub.publish(Events.WEATHER_LOADED, data);
				console.log(data);
			}
		})
		.catch((error) => {
			console.warn("There was an error while fetching the data:" + error.message);
			PubSub.publish(Events.WEATHER_ERROR, error.message);
		});
});

PubSub.subscribe(Events.WEATHER_ERROR, (topic, error) => {
	DOM.displayError(error);
});

PubSub.subscribe(Events.WEATHER_LOADED, (topic, data) => {
	DOM.displayWeather(data);
	document.querySelector("body").setAttribute("data-weather", data.weather[0].main);
	document.querySelector("body").setAttribute("data-time", data.weather[0].icon[data.weather[0].icon.length - 1]);
});
