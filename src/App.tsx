/** @format */

import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import { RootStyle, RootWeather, RootTime, StarSelectorStyle, BodyStyle } from "./styles/GlobalStyle";
import { weatherThemes, timeThemes } from "./utils/themes";
import { Container as AppContainer } from "./styles/AppStyle";
import { Link as SpicyLink } from "./styles/LinkStyle";
import { Spinner } from "./Components/Spinner";
import { Form } from "./Components/Form";
import { Weather } from "./Components/Weather";
import { ErrorMessage } from "./Components/ErrorMessage";

type Position = {
	latitude: number;
	longitude: number;
};

interface WeatherType {
	coord: Position;
	weather: {
		id: number;
		main: string;
		description: string;
		icon: string;
	};
	base: string;
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		humidity: number;
	};
	visibility: number;
	wind: {
		speed: number;
		deg: number;
	};
	clouds: {
		all: number;
	};
	dt: number;
	sys: {
		type: number;
		id: number;
		country: string;
		sunrise: number;
		sunset: number;
	};
	timezone: number;
	id: number;
	name: string;
	cod: number;
}

export const WeatherContext = createContext<WeatherType | null>(null);

function App() {
	const [timeTheme, setTimeTheme] = useState("default");
	const [weatherTheme, setWeatherTheme] = useState("default");
	const [position, setPosition] = useState(null as Position | null);
	const [weatherData, setWeatherData] = useState(null as null | WeatherType);
	const [waitingSubmission, setWaitingSubmission] = useState(false);
	const [error, setError] = useState(null as null | string);
	const [city, setCity] = useState("");
	const [language, setLanguage] = useState("en");
	const [localLanguage, setLocalLanguage] = useState("en");
	const [unit, setUnit] = useState("metric");
	const [formUnit, setFormUnit] = useState(unit);

	interface getWeatherParams {
		lat?: number;
		lon?: number;
		lang?: string;
		unit?: string;
		city?: string;
	}
	async function getWeatherData({ lat, lon, lang, unit, city }: getWeatherParams) {
		const apiUrl = "https://aa-api-proxy.herokuapp.com/weather?";

		let url;
		try {
			setError(null);
			if (lat && lon) {
				url = `${apiUrl}&lat=${lat}&lon=${lon}&units=${unit}&lang=${language}`;
			} else {
				url = `${apiUrl}&q=${city}&units=${unit}&lang=${lang}`;
			}
			const response = await axios.get(url);
			return response.data;
		} catch (err) {
			setError(String(err));
		}
	}

	async function getLocationSuccess(pos: any) {
		setPosition({
			latitude: pos.coords.latitude,
			longitude: pos.coords.longitude
		});
		if (pos.coords.latitude && pos.coords.longitude) {
			// Set to null to show spinner
			setWeatherData(null);
			const lat = pos.coords.latitude;
			const lon = pos.coords.longitude;
			try {
				setError(null);
				const result = await getWeatherData({ lat: lat, lon: lon, lang: language, unit: unit });
				setWeatherData(result);
				const timeOfDay = result.weather[0].icon[result.weather[0].icon.length - 1];
				const weather = result.weather[0].main;
				setThemes(timeOfDay, weather);
			} catch (err) {
				setError(String(err));
			}
		} else {
			console.warn("Position is invalid");
		}
	}

	function getLocationError(err: any) {
		console.error(`ERROR(${err.code}): ${err.message}`);
	}

	async function handleSubmit(cityInput?: string) {
		// Set to null to show spinner
		setWeatherData(null);
		setError(null);
		setWaitingSubmission(true);

		try {
			const result = await getWeatherData({ city: cityInput ? cityInput : city, lang: language, unit: unit });
			setWeatherData(result);
			const timeOfDay = result.weather[0].icon[result.weather[0].icon.length - 1];
			const weather = result.weather[0].main;
			setThemes(timeOfDay, weather);
		} catch (err) {
			setError(String(err));
		} finally {
			setWaitingSubmission(false);
		}
	}

	function setThemes(time: string, weather: string) {
		setTimeTheme(time);
		setWeatherTheme(weather);
	}

	useEffect(() => {
		if (navigator.language) {
			setLocalLanguage(navigator.language.split("-")[0]);
		}
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(getLocationSuccess, getLocationError);
		}
	}, []);

	const WeatherContent = () => <Weather data={weatherData} language={language} unit={formUnit} />;
	const ErrorContent = () => (
		<ErrorMessage>
			<p
				style={{
					lineHeight: "1.4em",
					textShadow: "none"
				}}>
				There was a problem while retrieving weather data. Please <SpicyLink href='.'>refresh</SpicyLink> the page or
				try again later.
				<br />
				If the issues persists please contact me at{" "}
				<SpicyLink href='mailto:contact@aktasalper.com'>contact@aktasalper.com</SpicyLink>
			</p>
		</ErrorMessage>
	);

	return (
		<ThemeProvider theme={timeThemes[timeTheme as keyof typeof timeThemes]}>
			<ThemeProvider theme={weatherThemes[weatherTheme as keyof typeof weatherThemes]}>
				<RootStyle />
				<RootWeather />
				<RootTime />
				<StarSelectorStyle />
				<BodyStyle />
				<WeatherContext.Provider value={weatherData}>
					<AppContainer>
						<Form
							city={city}
							onCityChange={setCity}
							language={language}
							onLanguageChange={setLanguage}
							localLanguage={localLanguage}
							unit={unit}
							onUnitChange={setUnit}
							onFormUnitChange={setFormUnit}
							onSubmit={handleSubmit}
						/>
						{weatherData ? (
							<WeatherContent />
						) : error ? (
							<ErrorContent />
						) : position || waitingSubmission ? (
							<Spinner />
						) : null}
					</AppContainer>
				</WeatherContext.Provider>
			</ThemeProvider>
		</ThemeProvider>
	);
}

export default App;
