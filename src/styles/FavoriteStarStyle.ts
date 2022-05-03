/** @format */

import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

export const FavoriteStar = styled(AiFillStar)`
	cursor: pointer;
	transition: transform 600ms cubic-bezier(0.65, 0, 0.35, 1), color 150ms ease-out;
	color: var(--dark);
	&:hover {
		transform: rotate(145deg) scale(1.2);
	}
`;
