/** @format */

import styled from "styled-components";
import { animated } from "react-spring";

export const Container = styled(animated.section)`
	display: flex;
	flex: 1;
	align-items: stretch;
	justify-content: flex-start;
	gap: 0.4rem;
	min-height: 34px;
	line-height: 0;

	overflow: hidden;
	padding: 0 0 0 var(--padding-medium);

	background-color: var(--secondary);
	border: 2px solid var(--primary);
	border-radius: var(--border-radius);
	color: var(--light);
	transition: border-color 250ms ease-out, background-color 250ms ease-out, color 250ms ease-out;

	@media (min-width: 768px) {
		margin-top: 0 !important;
		height: 42.4px !important;
	}

	@media (max-width: 768px) {
		flex: 0 0 100%;
		order: 2;
	}
`;

export const IconContainer = styled.div`
	flex: 0 0 auto;
	display: flex;
	align-items: center;
`;

export const UList = styled.ul`
	display: flex;
	align-items: stretch;
	overflow: auto;
	white-space: nowrap;
`;

export const Button = styled.button`
	background-color: var(--secondary);
	color: var(--light);
	border: none;
	padding: 0 var(--padding-medium);
	overflow: hidden;

	cursor: pointer;
	transition: background-color 250ms ease-out;

	&:hover {
		background-color: var(--primary);
	}
`;
