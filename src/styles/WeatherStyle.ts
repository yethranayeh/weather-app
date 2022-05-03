/** @format */

import styled from "styled-components";

export const Layout = styled.main`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	// flex-direction: column;
	gap: var(--padding-max);
	// padding: var(--padding-medium);
`;

export const Container = styled.section`
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
	${(props) => {
		return props.theme.primary === "#212529"
			? `background-color: ${props.theme.secondary}60;`
			: `background-color: ${props.theme.secondary}40;`;
	}}
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(11px);
	-webkit-backdrop-filter: blur(11px);

	text-shadow: 0 0 5px var(--primary);
	color: var(--light);
	transition: border-color 250ms ease-out, background-color 250ms ease-out, color 250ms ease-out;
`;

export const FavoriteStarContainer = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: max-content;
	height: max-content;
	font-size: 1.5em;
	padding: var(--padding-max);
`;

export const CityName = styled.h1`
	font-size: 1.3em;
	font-weight: 700;
`;

export const CurrentDate = styled.h2`
	font-size: 0.8em;
`;

export const WeatherImage = styled.img`
	margin: -1em 0;
`;

export const WeatherDesc = styled.p`
	font-size: 1.1em;
	text-transform: capitalize;
`;

export const WeatherTemp = styled.span`
	font-size: 4em;
	font-weight: bold;
`;

export const ExtraDataLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	gap: 0.5em;
	height: 100%;
	width: 100%;
`;

export const DataWithIcon = styled.p`
	// width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1.3em;
	margin: 0.5em 0;
	border-radius: 5px;
	border-right: none;
	transition: box-shadow 250ms ease-out, transform 100ms ease-out;

	&:hover {
		transform: translateY(-0.1em);
		box-shadow: -5px 5px 8px -2px rgba(0, 0, 0, 0.5);
	}
`;
