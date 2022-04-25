/** @format */

import styled from "styled-components";
import { useContext, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { WeatherContext } from "../App";
import { AiFillStar } from "react-icons/ai";

const Container = styled(animated.section)`
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

const IconContainer = styled.div`
	flex: 0 0 auto;
	display: flex;
	align-items: center;
`;

const UList = styled.ul`
	display: flex;
	align-items: stretch;
	overflow: auto;
	white-space: nowrap;
`;

const Button = styled.button`
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

interface Props {
	favorites: object;
	onSubmit: Function;
	visible: boolean;
}

export function Favorites({ favorites = {}, onSubmit, visible }: Props) {
	const weatherData = useContext(WeatherContext);

	const containerRef = useRef(null);
	const spring = useSpring({
		opacity: visible ? 1 : 0,
		minHeight: visible ? 42 : 0,
		height: visible ? containerRef.current.offsetHeight : 0,
		transform: visible ? "translate3d(0, 0%, 0)" : "translate3d(0, -30%, 0)",
		marginTop: visible ? "1rem" : "0"
	});

	return (
		<Container style={spring} ref={containerRef}>
			<IconContainer>
				<AiFillStar />
			</IconContainer>
			<UList>
				{Object.keys(favorites).map((key: any) => (
					<li
						key={key}
						style={{
							display: "flex",
							alignItems: "stretch"
						}}>
						<Button
							style={
								weatherData && Number(key) === weatherData.id
									? {
											backgroundColor: "var(--primary)"
									  }
									: {}
							}
							type='button'
							onClick={(e) => {
								e.preventDefault();
								e.stopPropagation();
								onSubmit(favorites[key as keyof typeof favorites]);
							}}>
							{favorites[key as keyof typeof favorites]}
						</Button>
					</li>
				))}
			</UList>
		</Container>
	);
}
