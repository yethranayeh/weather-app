/** @format */

import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const SearchArea = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	gap: 0.2em;
	padding: var(--padding-min) var(--padding-medium);

	font-size: 1.1em;
	border: 3px solid var(--primary);
	border-radius: var(--border-radius);
	background-color: var(--middle);
	transition: border-color 250ms ease-out, background-color 250ms ease-out;

	&:focus-within,
	&:hover {
		background-color: var(--light);
		border-color: var(--secondary);
	}
`;

export const SearchAreaInput = styled.input`
	border: none;
	outline: none;
	background: none;
	width: 100%;
	padding: var(--padding-min);
	color: var(--primary);
	transition: color 250ms ease-out;
`;

export const SearchAreaIcon = styled(FaSearch)`
	cursor: pointer;
	color: var(--primary);
	transition: color 250ms ease-out, transform 250ms ease-out;

	${SearchArea}:focus-within &,
    ${SearchArea}:hover & {
		color: var(--secondary);
	}

	&:hover {
		transform: scale(1.2) rotate(15deg);
		color: var(--primary) !important;
	}
`;
