/** @format */

import "./style.css";
import PubSub from "pubsub-js";

const Events = {
	SEARCH_SUBMITTED: "search_submitted",
	WEATHER_LOADED: "weather_loaded",
	WEATHER_ERROR: "weather_error"
};

async function getWeather(apiProxy, city, units) {
	const response = await fetch(`${apiProxy}?q=${city}&units=${units}`);
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
	button: document.querySelector(".btn-search i"),
	units: document.querySelectorAll("[type=radio]"),
	unit: document.querySelector("[name=units]:checked")
};

// Event publishing and event listeners
form.self.addEventListener("submit", (event) => {
	event.preventDefault();
	PubSub.publish(Events.SEARCH_SUBMITTED, form.input.value);
});

form.button.addEventListener("click", (event) => {
	if (form.self.checkValidity()) {
		PubSub.publish(Events.SEARCH_SUBMITTED, form.input.value);
	}
});

form.units.forEach((unit) => {
	unit.addEventListener("change", (event) => {
		form.unit = event.target;
		console.log("New form unit:", form.unit.id);
	});
});

// Event subscriptions
PubSub.subscribe(Events.SEARCH_SUBMITTED, (topic, input) => {
	console.log("Searching for: " + input);
	/**
	 * @param {string} input - City name
	 * @param {string} units - Unit (metric or imperial)
	 */
	getWeather(apiProxy, input, form.unit.id)
		.then((data) => {
			// If the data is valid, publish the weather data
			// if it returns 404, publish and throw an error
			if (data.cod === "404") {
				PubSub.publish(Events.WEATHER_ERROR, data.message);
				throw new Error(data.message);
			} else {
				PubSub.publish(Events.WEATHER_LOADED, data);
			}
		})
		.catch((error) => {
			console.warn("There was an error while fetching the data:\n" + error);
			PubSub.publish(Events.WEATHER_ERROR, error);
		});
});
