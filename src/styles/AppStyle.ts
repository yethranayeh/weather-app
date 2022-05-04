/** @format */

import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: var(--padding-max);

	transition: padding 0.3s ease-in-out;

	@media (min-width: 992px) {
		padding: var(--padding-max) var(--padding-max-md);
	}

	@media (min-width: 1200px) {
		padding: var(--padding-max) var(--padding-max-lg);
	}

	@media (min-width: 1400px) {
		padding: var(--padding-max) var(--padding-max-xl);
	}

	@media (min-width: 1600px) {
		padding: var(--padding-max) var(--padding-max-xxl);
	}
`;
