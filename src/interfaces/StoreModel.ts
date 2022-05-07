/** @format */

import { getWeatherParams, WeatherType } from ".";
import { Computed, Action, Thunk, ActionOn, ThunkOn } from "easy-peasy";
import { Coord } from "./WeatherDataResponse";

interface StoreModelState {
	timeTheme: string;
	weatherTheme: string;
	weatherData: WeatherType | null;
	language: string | null;
	setLanguage: Action<StoreModelState, string>;
	unit: string;
	position: Coord | null;
	favorites: { [key: string]: string };
	favoritesVisible: Computed<StoreModel, boolean>;
	loading: boolean;
	error: string | null;
}

interface StoreModelActions {
	setTimeTheme: Action<StoreModel, "default" | "d" | "n">;
	setWeatherTheme: Action<StoreModel, string>;
	setWeatherData: Action<StoreModel, WeatherType>;
	onSetWeatherData: ActionOn<StoreModel>;
	setUnit: Action<StoreModel, string>;
	setPosition: Action<StoreModel, any>;
	addToFavorites: Action<StoreModel, { id: number; cityName: string }>;
	removeFromFavorites: Action<StoreModel, number>;
	setLoading: Action<StoreModel, boolean>;
	setError: Action<StoreModel, any>;
}

interface StoreModelThunks {
	getWeatherByCity: Thunk<StoreModel, getWeatherParams>;
	getWeatherByLocation: Thunk<StoreModel, getWeatherParams>;
	getUserLocalLang: Thunk<StoreModel, void>;
	getUserGeolocation: Thunk<StoreModel, void>;
	onSetPosition: ThunkOn<StoreModel>;
}

export interface StoreModel extends StoreModelState, StoreModelActions, StoreModelThunks {}
