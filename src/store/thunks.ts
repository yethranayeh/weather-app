/** @format */

import axios from "axios";
import { thunk } from "easy-peasy";
import { StoreModel } from "../interfaces/StoreModel";
import { getWeatherParams } from "../interfaces";
import { availableLanguages } from "../utils/availableLanguages";

const targetUrl = "https://aa-api-proxy.herokuapp.com/weather?";

export const getWeatherByCity = thunk<StoreModel, getWeatherParams>(async (actions, payload) => {
	actions.setError(null);
	const { lang, unit } = payload;
	let { city } = payload;
	city = city?.trim().split(" ").join(",");

	const url = `${targetUrl}&q=${city}&units=${unit}&lang=${lang}`;
	try {
		actions.setLoading(true);

		const response = await axios.get(url);
		actions.setWeatherData(response.data);
	} catch (err) {
		if (typeof err === "string") {
			actions.setError(err);
		} else {
			actions.setError(err);
		}
	} finally {
		actions.setLoading(false);
	}
});

export const getWeatherByLocation = thunk<StoreModel, getWeatherParams>(async (actions, payload, { getState }) => {
	actions.setError(null);

	const { lat, lon } = payload;
	const { language: lang, unit } = getState();

	const url = `${targetUrl}&lat=${lat}&lon=${lon}&units=${unit}&lang=${lang}`;
	try {
		actions.setLoading(true);

		const response = await axios.get(url);
		actions.setWeatherData(response.data);
	} catch (err) {
		actions.setError(err);
	} finally {
		actions.setLoading(false);
	}
});

export const getUserGeolocation = thunk<StoreModel, void>(async (actions) => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			(location) => actions.setPosition({ lat: location.coords.latitude, lon: location.coords.longitude }),
			actions.setError,
			{ enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
		);
	}
});

export const getUserLocalLang = thunk<StoreModel, void>((actions, payload, { getState }) => {
	if (navigator.language && !getState().language) {
		let lang = navigator.language.split("-")[0];
		if (isLocalLanguageSupported(lang)) {
			actions.setLanguage(lang);
		} else {
			actions.setLanguage("en");
		}
	}
});

function isLocalLanguageSupported(localLanguage: string) {
	// Loop through availabeLanguages array's 0th index values to check if any of them match the localLanguage
	for (let i = 0; i < availableLanguages.length; i++) {
		if (availableLanguages[i][0] === localLanguage) {
			return true;
		}
	}
	return false;
}
