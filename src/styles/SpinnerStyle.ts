/** @format */
import { ImSpinner2 } from "react-icons/im";
import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SpinnerIcon = styled(ImSpinner2)`
	font-size: 7rem;
	margin: 1rem;
	animation: rotate 1s linear infinite;
	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;
