/** @format */

import { createGlobalStyle } from "styled-components";
import { Theme } from "../utils/themes";

export const RootStyle = createGlobalStyle<{ theme: Theme }>`
	:root {
		--border-radius: 10px;
		--padding-min: 0.2rem;
		--padding-medium: 0.4rem;
		--padding-max: 0.9rem;

		--error: #de4d4c;

		--day: #ec6e4c;
		--night: #070a32;
		--sunny: #fbdd7a;
		--clouds: #969697;
		--rain: #6df9e5;
		--thunderstorm: #5bdcfe;
		--snow: #fcf7f8;

		/* Atmosphere */
		--mist: #98a9b2;
		--smoke: #7f7a78;
		--fog: #e2e2e2;
		--haze: #e1d5c5;
		--dust: #e7ac59;
		--sand: #d6bd83;
		--ash: #535455;
		--squall: #26283c;
		--tornado: #2f2e33;
	}, 
`;

interface TimeTheme {
	bg: string;
	primary: string;
	secondary: string;
	light: string;
	middle: string;
	dark: string;
}

export const RootTime = createGlobalStyle<{ theme: TimeTheme }>`
	:root {
		--bg: ${(props) => props.theme.bg};
		--primary: ${(props) => props.theme.primary};
		--secondary: ${(props) => props.theme.secondary};

		--light: ${(props) => props.theme.light};
		--middle: ${(props) => props.theme.middle};
		--dark: ${(props) => props.theme.dark};
	}
`;

interface WeatherTheme {
	weather: string;
}

export const RootWeather = createGlobalStyle<{ theme: WeatherTheme }>`
	:root {
		--weather: ${(props) => props.theme.weather};
`;

export const StarSelectorStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }
`;

export const BodyStyle = createGlobalStyle`
    body {
        font-family: "Saira", Arial, sans-serif;
        min-height: 100vh;
        width: 100%;
        overflow-x: hidden;
        color: var(--light);
        background-color: var(--weather);
        background-image: linear-gradient(to bottom, var(--bg), transparent 50%);
        transition: background-color 0.5s ease, color 0.5s ease;
    }   
`;
