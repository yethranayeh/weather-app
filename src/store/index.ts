/** @format */

import { actionOn, computed, createStore, createTypedHooks, thunkOn, persist } from "easy-peasy";
import { StoreModel } from "../interfaces/StoreModel";
import {
	setTimeTheme,
	setWeatherTheme,
	setWeatherData,
	setPosition,
	setUnit,
	setError,
	setLoading,
	addToFavorites,
	removeFromFavorites,
	setLanguage
} from "./actions";
import { getWeatherByCity, getWeatherByLocation, getUserGeolocation, getUserLocalLang } from "./thunks";

export const model: StoreModel = persist(
	{
		timeTheme: "default",
		setTimeTheme,
		weatherTheme: "default",
		setWeatherTheme,
		weatherData: null,
		getWeatherByCity,
		getWeatherByLocation,
		setWeatherData,
		onSetWeatherData: actionOn(
			(actions) => actions.setWeatherData,
			(state, target) => {
				const { payload } = target;
				state.timeTheme = payload.weather[0].icon[payload.weather[0].icon.length - 1];
				state.weatherTheme = payload.weather[0].main;
			}
		),
		language: null,
		setLanguage,
		getUserLocalLang,
		unit: "metric",
		setUnit,
		position: null,
		getUserGeolocation,
		setPosition,
		onSetPosition: thunkOn(
			(actions) => actions.setPosition,
			async (actions, target) => {
				await actions.getWeatherByLocation(target.payload);
			}
		),
		favorites: {},
		addToFavorites,
		removeFromFavorites,
		favoritesVisible: computed(({ favorites }) => Object.keys(favorites).length > 0),
		error: null,
		setError,
		loading: false,
		setLoading
	},
	{ allow: ["unit", "language", "favorites"], storage: localStorage }
);

export const store = createStore<StoreModel>(model, { name: "Weather_App_Storage" });

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreState = typedHooks.useStoreState;
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
