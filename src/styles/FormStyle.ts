/** @format */

import styled from "styled-components";

export const FormContainer = styled.form`
	--fs: 1.2rem;
	font-size: var(--fs);
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	width: 100%;
`;

export const OptionsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 1rem;

	@media (max-width: 768px) {
		gap: 0;
	}
`;
