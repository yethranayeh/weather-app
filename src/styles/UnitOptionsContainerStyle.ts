/** @format */

import styled from "styled-components";

export const UnitOptions = styled.div`
	display: flex;
	flex-direction: row-reverse;
	background-color: var(--primary);
	border: 2px solid var(--primary);
	border-radius: var(--border-radius);
	overflow: hidden;
	transition: background-color 250ms ease-out, border-color 250ms ease-out;
`;

export const UnitInput = styled.input`
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	border: none;
	outline: none;
`;

export const UnitLabel = styled.label`
	cursor: pointer;
	color: var(--secondary);
	padding: var(--padding-medium);
	border: 2px solid transparent;
	transition: background-color 250ms ease-out, color 250ms ease-out;

	&:hover {
		background-color: var(--secondary);
		color: var(--light);
	}

	${UnitInput}:checked + & {
		color: var(--light);
		background-color: var(--secondary);
	}
`;
