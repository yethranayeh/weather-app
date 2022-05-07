/** @format */

import { model } from "../store/";
import { createStore } from "easy-peasy";

it("should change themes correctly", () => {
	const store = createStore(model);
	store.getActions().setWeatherTheme("dark");
	expect(store.getState().weatherTheme).toBe("dark");
	store.getActions().setWeatherTheme("light");
	expect(store.getState().weatherTheme).toBe("light");
});

it("should update weather data accordingly", () => {
	const newWeatherData = {
		coord: { lon: 34.9115, lat: 39.059 },
		weather: [{ id: 500, main: "Rain", description: "light rain", icon: "10d" }],
		base: "stations",
		main: {
			temp: 17.4,
			feels_like: 16.32,
			temp_min: 17.4,
			temp_max: 17.4,
			pressure: 1004,
			humidity: 43,
			sea_level: 1004,
			grnd_level: 876
		},
		visibility: 10000,
		wind: { speed: 8.52, deg: 307, gust: 8.55 },
		rain: { "1h": 0.13 },
		clouds: { all: 33 },
		dt: 1651670701,
		sys: { type: 1, id: 6964, country: "TR", sunrise: 1651631938, sunset: 1651682114 },
		timezone: 10800,
		id: 298795,
		name: "Turkey",
		cod: 200
	};

	const store = createStore(model);

	// act
	store.getActions().setWeatherData(newWeatherData);

	// assert
	expect(store.getState().weatherData).toEqual(newWeatherData);
});

describe("Coordinates", () => {
	it("should set coordinates correctly", () => {
		const newCoordinates = {
			lat: 34.9115,
			lon: 39.059
		};

		const store = createStore(model);

		// act
		store.getActions().setPosition(newCoordinates);

		// assert
		expect(store.getState().position).toEqual(newCoordinates);
	});

	it("should not change state if the received object does not have lat and lon propreties", () => {
		const store = createStore(model);

		// act
		store.getActions().setPosition({});

		// assert
		expect(store.getState().position).toEqual(null);
	});
});

it("should change units correctly", () => {
	const store = createStore(model);

	// act
	store.getActions().setUnit("imperial");

	// assert
	expect(store.getState().unit).toBe("imperial");
});

describe("Error handling", () => {
	it("allows error to be assigned type 'null'", () => {
		const store = createStore(model);

		// act
		store.getActions().setError(null);

		// assert
		expect(store.getState().error).toBeNull();
	});
});
