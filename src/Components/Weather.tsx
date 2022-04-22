/** @format */
import styled from "styled-components";
import { BsExclamationCircle, BsSunrise, BsSunset } from "react-icons/bs";
import { FaTemperatureHigh, FaTemperatureLow, FaTint, FaWind } from "react-icons/fa";

const WeatherLayout = styled.main`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	// flex-direction: column;
	gap: var(--padding-max);
	// padding: var(--padding-medium);
`;

export const WeatherContainer = styled.section`
	--fs: 1.4rem;
	font-size: var(--fs);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5em;

	padding: var(--padding-max);

	border: 2px solid var(--primary);
	border-radius: var(--border-radius);
	background-color: var(--secondary);

	text-shadow: 0 0 5px var(--primary);
	color: var(--light);
	transition: border-color 250ms ease-out, background-color 250ms ease-out, color 250ms ease-out;
`;

const CityName = styled.h1`
	font-size: 1.3em;
	font-weight: 700;
`;

const CurrentDate = styled.h2`
	font-size: 0.8em;
`;

const WeatherImage = styled.img`
	margin: -1em 0;
`;

const WeatherDesc = styled.p`
	font-size: 1.1em;
	text-transform: capitalize;
`;

const WeatherTemp = styled.span`
	font-size: 4em;
	font-weight: bold;
`;

const ExtraDataLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	gap: 0.5em;
	height: 100%;
	width: 100%;
`;

const DataWithIcon = styled.p`
	// width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1.3em;
	margin: 0.5em 0;
	transition: box-shadow 250ms ease-out, transform 100ms ease-out;

	&:hover {
		transform: translateY(-0.1em);
		box-shadow: -5px 5px 8px -2px rgba(0, 0, 0, 0.5);
	}
`;

function withDataWithIcon(Icon: Function, data: string, color?: string) {
	return (
		<DataWithIcon
			style={{
				// backgroundColor: "var(--dark)",
				background: `linear-gradient(to right, ${color}80 20%, transparent 90%)`,
				padding: "0.1em 0.2em",
				borderRadius: "5px"
			}}>
			<Icon
				style={{
					marginRight: "0.5em",
					color: color ? color : "var(--light)",
					boxSizing: "content-box",
					background: "var(--dark)",
					borderRadius: "5px",
					padding: "0.1em",
					transform: "scale(0.9)"
				}}
			/>
			{data}
		</DataWithIcon>
	);
}

const supportedLangs = {
	ar: "ar-SA",
	cs: "cs-CZ",
	da: "da-DK",
	de: "de-DE",
	el: "el-GR",
	en: "en-US",
	es: "es-ES",
	fi: "fi-FI",
	fr: "fr-FR",
	he: "he-IL",
	hi: "hi-IN",
	hu: "hu-HU",
	id: "id-ID",
	it: "it-IT",
	ja: "ja-JP",
	ko: "ko-KR",
	nl: "nl-NL",
	no: "no-NO",
	pl: "pl-PL",
	pt: "pt-BR",
	ro: "ro-RO",
	ru: "ru-RU",
	sv: "sv-SE",
	th: "th-TH",
	tr: "tr-TR",
	vi: "vi-VN",
	zh_cn: "zh-CN"
};

export function Weather({ data, language, unit }: { data: any; language: string; unit: string }) {
	function convertUnixToHours(unixTime: number) {
		const date = new Date(unixTime * 1000);
		const hours = date.getHours();
		const minutes = date.getMinutes();
		// const seconds = date.getSeconds();
		const formattedTime = hours + ":" + minutes;
		return formattedTime;
	}

	return data ? (
		<WeatherLayout>
			<WeatherContainer
				style={{
					flex: "5 1 auto"
				}}>
				<CityName>{data.name}</CityName>
				<CurrentDate>
					{new Date(data.dt * 1000).toLocaleString(supportedLangs[language as keyof typeof supportedLangs] || "en-US", {
						dateStyle: "medium",
						timeStyle: "short",
						hour12: false
					})}
				</CurrentDate>
				<WeatherImage
					className='disable-select'
					src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
					alt={data.weather[0].description}
				/>
				<WeatherDesc>{data.weather[0].description}</WeatherDesc>
				<WeatherTemp>{`${Math.round(data.main.temp)}°`}</WeatherTemp>
			</WeatherContainer>
			<div
				style={{
					flex: "2 1 auto",
					display: "flex",
					flexDirection: "column",
					gap: "1em"
				}}>
				<WeatherContainer
					style={{
						minWidth: "200px",
						minHeight: "300px",
						maxHeight: "400px"
					}}>
					<ExtraDataLayout>
						<div
							style={{
								width: "100%"
							}}>
							{withDataWithIcon(BsSunrise, convertUnixToHours(Number(data.sys.sunrise)), "#ffa700")}
							{withDataWithIcon(BsSunset, convertUnixToHours(Number(data.sys.sunset)), "#ff6700")}
						</div>
						<div
							style={{
								width: "100%"
							}}>
							{withDataWithIcon(FaWind, `${data.wind.speed} ${unit === "metric" ? "m/s" : "mph"}`, "#add4dd")}
							{withDataWithIcon(FaTint, `${data.main.humidity}%`, "#6ec2e8")}
						</div>
					</ExtraDataLayout>
				</WeatherContainer>
				<WeatherContainer
					style={{
						maxHeight: "150px"
					}}>
					<div
						style={{
							width: "100%",
							marginBottom: "-1em"
						}}>
						{withDataWithIcon(FaTemperatureHigh, `${data.main.temp_max}°`, "#a71010")}
					</div>
					<div
						style={{
							width: "100%"
						}}>
						{withDataWithIcon(FaTemperatureLow, `${data.main.temp_min}°`, "#7df2f1")}
					</div>
				</WeatherContainer>
			</div>
		</WeatherLayout>
	) : (
		<WeatherContainer>{withDataWithIcon(BsExclamationCircle, "Could not get weather data")}</WeatherContainer>
	);
}
