/** @format */

import { createGlobalStyle } from "styled-components";

interface Theme {
	bg: string;
	primary: string;
	secondary: string;
	light: string;
	middle: string;
	dark: string;
	weather: string;
}

export const timeThemes = {
	default: {
		bg: "#777",
		primary: "#212529",
		secondary: "#8f9499",
		light: "#dee2e6",
		middle: "#adb5bd",
		dark: "#343a40"
	},
	d: {
		bg: "var(--day)",
		primary: "#264653",
		secondary: "#2a9d8f",
		light: "#fafafa",
		middle: "var(--mist)",
		dark: "#222"
	},
	n: {
		bg: "var(--night)",
		primary: "#212529",
		// secondary: "#515a64",
		secondary: "#77828e",
		light: "#e9ecef",
		middle: "var(--mist)",
		dark: "#343a40"
	}
};

export const weatherThemes = {
	default: { weather: "#adb5bd" },
	Clear: { weather: "var(--sunny)" },
	Clouds: { weather: "var(--clouds)" },
	Drizzle: { weather: "var(--rain)" },
	Rain: { weather: "var(--rain)" },
	Snow: { weather: "var(--snow)" },
	Thunderstorm: { weather: "var(--thunderstorm)" },
	Mist: { weather: "var(--mist)" },
	Smoke: { weather: "var(--smoke)" },
	Fog: { weather: "var(--fog)" },
	Haze: { weather: "var(--haze)" },
	Dust: { weather: "var(--dust)" },
	Sand: { weather: "var(--sand)" },
	Ash: { weather: "var(--ash)" },
	Squall: { weather: "var(--squall)" },
	Tornado: { weather: "var(--tornado)" }
};

export const RootStyle = createGlobalStyle<{ theme: Theme }>`
	:root {
		--border-radius: 10px;
		--padding-min: 0.3rem;
		--padding-medium: 0.5rem;
		--padding-max: 1rem;

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
        height: 100vh;
        width: 100%;
        overflow-x: hidden;
        color: var(--light);
        background-color: var(--weather);
        background-image: linear-gradient(to bottom, var(--bg), transparent 50%);
        transition: background-color 0.5s ease, color 0.5s ease;
    }   
`;
