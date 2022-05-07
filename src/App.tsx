/** @format */

import { useEffect } from "react";
import { useStoreActions, useStoreState } from "./store";
import { ThemeProvider } from "styled-components";
import { RootStyle, RootWeather, RootTime, StarSelectorStyle, BodyStyle } from "./styles/GlobalStyle";
import { weatherThemes, timeThemes } from "./utils/themes";
import { Container as AppContainer } from "./styles/AppStyle";
import { Link as SpicyLink } from "./styles/LinkStyle";
import { Spinner } from "./Components/Spinner";
import { Form } from "./Components/Form";
import { Weather } from "./Components/Weather";
import { ErrorMessage } from "./Components/ErrorMessage";

function App() {
	const { weatherData } = useStoreState((state) => state);
	const { position } = useStoreState((state) => state);
	const { timeTheme } = useStoreState((state) => state);
	const { weatherTheme } = useStoreState((state) => state);
	const { loading } = useStoreState((state) => state);
	const { error } = useStoreState((state) => state);

	const { getUserGeolocation } = useStoreActions((actions) => actions);
	const { getUserLocalLang } = useStoreActions((actions) => actions);
	const { getWeatherByLocation } = useStoreActions((actions) => actions);

	useEffect(() => {
		getUserLocalLang();

		if (!weatherData && !position) {
			getUserGeolocation();
		} else if (!weatherData && position) {
			getWeatherByLocation(position);
		} else {
		}
	}, []);

	const ErrorContent = () => (
		<ErrorMessage>
			<p>
				There was a problem while retrieving weather data:{" "}
				<span
					style={{
						color: "var(--error)"
					}}>
					{error}
				</span>
			</p>
			<p>
				Please <SpicyLink href='.'>refresh</SpicyLink> the page or try again later. If the issues persists please
				contact me at <SpicyLink href='mailto:contact@aktasalper.com'>contact@aktasalper.com</SpicyLink>
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
				<AppContainer>
					<Form />
					{loading ? <Spinner /> : error ? <ErrorContent /> : <Weather />}
				</AppContainer>
			</ThemeProvider>
		</ThemeProvider>
	);
}

export default App;
