/** @format */

import { action } from "easy-peasy";
import { StoreModel } from "../interfaces/StoreModel";
import { WeatherType } from "../interfaces";

export const setTimeTheme = action<StoreModel, "default" | "d" | "n">((state, payload) => {
	state.timeTheme = payload;
});

export const setWeatherTheme = action<StoreModel, string>((state, payload) => {
	state.weatherTheme = payload;
});

export const setWeatherData = action<StoreModel, WeatherType>((state, payload) => {
	state.weatherData = payload;
});

export const setPosition = action<StoreModel, any>((state, payload) => {
	console.info("setPosition", payload);
	if (payload && typeof payload === "object") {
		const { lat, lon } = payload;
		if (lat && lon) {
			state.position = { lat, lon };
		}
	}
});

export const setLanguage = action<StoreModel, string>((state, payload) => {
	state.language = payload;
});

export const setUnit = action<StoreModel, string>((state, payload) => {
	state.unit = payload;
});

export const setError = action<StoreModel, any>((state, payload) => {
	if (payload) {
		if (typeof payload === "object") {
			if (payload.message) {
				state.error = payload.message;
			} else {
				state.error = payload.toString();
			}
		} else {
			state.error = payload.toString();
		}
	} else {
		state.error = payload;
	}
});

export const setLoading = action<StoreModel, boolean>((state, payload) => {
	state.loading = payload;
});

export const addToFavorites = action<StoreModel, { id: number; cityName: string }>((state, payload) => {
	const { id, cityName } = payload;
	state.favorites[String(id)] = cityName;
});

export const removeFromFavorites = action<StoreModel, number>((state, payload) => {
	delete state.favorites[String(payload)];
});
