/** @format */

import styled from "styled-components";
import { Container as WeatherContainer } from "./WeatherStyle";
import { BsExclamationCircle } from "react-icons/bs";

export const Container = styled(WeatherContainer)`
	flex-direction: row;
	justify-content: space-around;
	gap: 1rem;

	background-color: #eeeeee9e;
	color: var(--dark);
	font-size: 1.3em;

	@media screen and (max-width: 550px) {
		flex-direction: column;
	}
`;

export const Icon = styled(BsExclamationCircle)`
	font-size: 4em;
	margin-right: 0.5em;
	color: var(--error);
`;
