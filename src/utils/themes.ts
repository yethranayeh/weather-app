/** @format */

export interface Theme {
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
