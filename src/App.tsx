/** @format */

import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "./reset.css";
import styled, { ThemeProvider } from "styled-components";
import {
	RootStyle,
	RootWeather,
	weatherThemes,
	RootTime,
	timeThemes,
	StarSelectorStyle,
	BodyStyle
} from "./GlobalStyle";
import { Form } from "./Components/Form";
import { Weather, WeatherContainer } from "./Components/Weather";
import { ImSpinner2 } from "react-icons/im";
import { BsExclamationCircle } from "react-icons/bs";

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: var(--padding-max);
`;

const SpinnerContainer = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Spinner = styled(ImSpinner2)`
	font-size: 7rem;
	margin: 1rem;
	animation: rotate 1s linear infinite;
	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

const ErrorContainer = styled.section`
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 1rem;

	@media screen and (max-width: 550px) {
		flex-direction: column;
	}
`;

const SpicyLink = styled.a`
	text-decoration: none;
	position: relative;
	white-space: nowrap;
	color: var(--error);

	&::before {
		content: "";
		transform-origin: 100% 50%;
		transform: scale3d(0, 1, 1);
		transition: transform 0.3s;
	}

	&:hover::before {
		transform-origin: 0% 50%;
		transform: scale3d(1, 1, 1);
	}

	&::before,
	&::after {
		position: absolute;
		width: 100%;
		height: 1px;
		background: currentColor;
		top: 100%;
		left: 0;
		pointer-events: none;
	}
`;

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

	// useEffect(() => {
	// 	console.table(themes[theme as keyof typeof themes]);
	// }, [theme]);

	async function getWeatherData(lat?: string, lon?: string) {
		const apiUrl = "https://aa-api-proxy.herokuapp.com/weather?";

		let url;
		try {
			setError(null);
			if (lat && lon) {
				url = `${apiUrl}&lat=${lat}&lon=${lon}&units=${unit}&lang=${language}`;
			} else {
				url = `${apiUrl}&q=${city}&units=${unit}&lang=${language}`;
			}
			// console.info("URL:", url);
			const response = await axios.get(url);
			// console.info("response", response);
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

			// console.log("Position is valid:", pos.coords.latitude, pos.coords.longitude);
			try {
				setError(null);
				const result = await getWeatherData(pos.coords.latitude, pos.coords.longitude);
				setWeatherData(result);
				const timeOfDay = result.weather[0].icon[result.weather[0].icon.length - 1];
				const weather = result.weather[0].main;
				setThemes(timeOfDay, weather);
			} catch (err) {
				setError(String(err));
			}
		} else {
			console.log("Position is invalid");
		}
	}

	function getLocationError(err: any) {
		console.warn(`ERROR(${err.code}): ${err.message}`);
	}

	async function handleSubmit() {
		// Set to null to show spinner
		setWeatherData(null);
		setError(null);
		setWaitingSubmission(true);

		try {
			const result = await getWeatherData();
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
		// console.clear();
		if (navigator.language) {
			setLocalLanguage(navigator.language.split("-")[0]);
		}
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(getLocationSuccess, getLocationError);
		}
	}, []);

	return (
		<ThemeProvider theme={timeThemes[timeTheme as keyof typeof timeThemes]}>
			<ThemeProvider theme={weatherThemes[weatherTheme as keyof typeof weatherThemes]}>
				<RootStyle />
				<RootWeather />
				<RootTime />
				<StarSelectorStyle />
				<BodyStyle />
				<AppContainer theme={{ weather: "var(--rain)" }}>
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
						<Weather data={weatherData} language={language} unit={formUnit} />
					) : error ? (
						<WeatherContainer
							style={{
								backgroundColor: "#eee",
								color: "var(--dark)",
								fontSize: "1.3em"
							}}>
							<ErrorContainer>
								<BsExclamationCircle
									size={"4em"}
									style={{
										color: "var(--error)",
										marginRight: "0.5em"
									}}
								/>
								<div>
									<p
										style={{
											marginBottom: "0.4em",
											textShadow: "none"
										}}>
										There was a problem while retrieving weather data. Please <SpicyLink href='/'>refresh</SpicyLink>{" "}
										the page or try again later.
									</p>
									<p
										style={{
											textShadow: "none"
										}}>
										If the issues persists please contact me at{" "}
										<SpicyLink href='mailto:contact@aktasalper.com'>contact@aktasalper.com</SpicyLink>
									</p>
								</div>
							</ErrorContainer>
						</WeatherContainer>
					) : position || waitingSubmission ? (
						<SpinnerContainer>
							<Spinner />
						</SpinnerContainer>
					) : null}
				</AppContainer>
			</ThemeProvider>
		</ThemeProvider>
	);
}

export default App;
