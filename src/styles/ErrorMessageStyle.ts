/** @format */

import styled from "styled-components";
import { Container as WeatherContainer } from "./WeatherStyle";
import { BsExclamationCircle } from "react-icons/bs";

export const Container = styled(WeatherContainer)`
	flex-direction: row;
	justify-content: space-around;

	background-color: #eeeeee9e;
	color: var(--dark);
	font-size: 1.3em;

	@media screen and (max-width: 550px) {
		flex-direction: column;
	}
`;

export const ChildrenContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	& p {
		line-height: 1.2em;
		text-shadow: none;
	}

	@media (min-width: 1200px) {
		& p {
			padding: 0 var(--padding-medium-lg);
		}
	}

	@media (min-width: 1400px) {
		& p {
			padding: 0 var(--padding-medium-xl);
		}
	}

	@media (min-width: 1600px) {
		& p {
			padding: 0 var(--padding-medium-xxl);
		}
	}
`;

export const Icon = styled(BsExclamationCircle)`
	flex: 0 0 auto;
	font-size: 4em;
	margin-right: 0.5em;
	color: var(--error);
`;
