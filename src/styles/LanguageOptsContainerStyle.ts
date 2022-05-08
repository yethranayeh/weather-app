/** @format */

import styled from "styled-components";

export const LanguageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.6em;
	padding: var(--padding-min) var(--padding-medium);
	border: 2px solid var(--primary);
	border-radius: var(--border-radius);
	background-color: var(--secondary);
	color: var(--light);
	transition: border-color 250ms ease-out, background-color 250ms ease-out, color 250ms ease-out;
`;

export const LanguageSelect = styled.select`
	color: var(--light);
	border: none;
	background: none;
	cursor: pointer;
`;

export const LanguageOptGroup = styled.optgroup`
	color: var(--light);
	background-color: var(--primary);
	transition: color 250ms ease-out, background-color 250ms ease-out;
`;

export const LanguageOption = styled.option`
	color: var(--light);
	background-color: var(--secondary);
	text-transform: capitalize;
	transition: color 250ms ease-out, background-color 250ms ease-out;
`;
