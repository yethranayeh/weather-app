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
