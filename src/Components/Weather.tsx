/** @format */
import { useEffect, useState } from "react";
import {
	Layout,
	Container,
	FavoriteStarContainer,
	CityName,
	CurrentDate,
	WeatherImage,
	WeatherDesc,
	WeatherTemp,
	ExtraDataLayout,
	DataWithIcon
} from "../styles/WeatherStyle";
import { FavoriteStar } from "../styles/FavoriteStarStyle";
import { BsSunrise, BsSunset, BsMoonStarsFill } from "react-icons/bs";
import { FaTemperatureHigh, FaTemperatureLow, FaTint, FaWind } from "react-icons/fa";
import { supportedLangs } from "../utils/supportedLangs";

function withDataWithIcon(Icon: Function, data: string, color?: string) {
	return (
		<DataWithIcon
			style={{
				background: `linear-gradient(to right, ${color}80 20%, transparent 90%)`
			}}>
			<Icon
				style={{
					marginRight: "0.5em",
					color: color ? color : "var(--light)",
					boxSizing: "content-box",
					background: "var(--dark)",
					borderRadius: "5px",
					padding: "0.1em"
				}}
			/>
			{data}
		</DataWithIcon>
	);
}

export function Weather({ data, language, unit }: { data: any; language: string; unit: string }) {
	const [favorited, setFavorited] = useState(false);

	function convertUnixToHours(unixTime: number) {
		const date = new Date(unixTime * 1000);
		const hours = date.getHours();
		const minutes = date.getMinutes();
		// const seconds = date.getSeconds();
		const formattedTime = hours + ":" + minutes;
		return formattedTime;
	}

	function addToLocalStorage() {
		const storageData = localStorage.getItem("weatherFavorites");
		let favorites;
		if (storageData && Object.keys(storageData).length > 0) {
			favorites = JSON.parse(storageData);
		} else {
			favorites = {};
		}
		const newFavorites = { ...favorites, [data.id]: data.name };
		localStorage.setItem("weatherFavorites", JSON.stringify(newFavorites));
	}

	function removeFromLocalStorage() {
		const favorites = JSON.parse(localStorage.getItem("weatherFavorites") || "[]");
		delete favorites[data.id];
		localStorage.setItem("weatherFavorites", JSON.stringify(favorites));
	}

	function handleFavorited(state: boolean) {
		setFavorited(state);
		if (state) {
			addToLocalStorage();
		} else {
			removeFromLocalStorage();
		}
		window.dispatchEvent(new Event("storage"));
	}

	useEffect(() => {
		// If city name exists in local storage, set favorited to true
		const storageData = localStorage.getItem("weatherFavorites");
		if (storageData && Object.keys(storageData).length > 0) {
			const favorites = JSON.parse(storageData) as { [key: string]: string };
			if (favorites[data.id]) {
				setFavorited(true);
			}
		}
	}, []);

	return (
		<Layout>
			<Container
				style={{
					flex: "5 1 auto",
					position: "relative"
				}}>
				<FavoriteStarContainer>
					<FavoriteStar color={favorited ? "#ffa700" : "var(--dark)"} onClick={() => handleFavorited(!favorited)} />
				</FavoriteStarContainer>
				<CityName>{data.name}</CityName>
				<CurrentDate>
					{new Date(data.dt * 1000).toLocaleString(supportedLangs[language as keyof typeof supportedLangs] || "en-US", {
						dateStyle: "medium",
						timeStyle: "short",
						hour12: false
					})}
				</CurrentDate>
				{data.weather[0].icon === "01n" ? (
					<BsMoonStarsFill
						size={"5em"}
						style={{
							margin: "1em 0"
						}}
					/>
				) : (
					<WeatherImage
						className='disable-select'
						src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
						alt={data.weather[0].description}
					/>
				)}

				<WeatherDesc>{data.weather[0].description}</WeatherDesc>
				<WeatherTemp>{`${Math.round(data.main.temp)}°`}</WeatherTemp>
			</Container>
			<div
				style={{
					flex: "2 1 auto",
					display: "flex",
					flexDirection: "column",
					gap: "1em"
				}}>
				<Container
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
				</Container>
				<Container
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
				</Container>
			</div>
		</Layout>
	);
}
