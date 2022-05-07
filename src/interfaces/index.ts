/** @format */
import { Coord, Weather, Main, Wind, Rain, Clouds, Sys } from "./WeatherDataResponse";

export interface WeatherType {
	coord: Coord;
	weather: Weather[];
	base: string;
	main: Main;
	visibility: number;
	wind: Wind;
	rain: Rain;
	clouds: Clouds;
	dt: number;
	sys: Sys;
	timezone: number;
	id: number;
	name: string;
	cod: number;
}

export interface getWeatherParams {
	lat?: number;
	lon?: number;
	lang?: string;
	unit?: string;
	city?: string;
}
