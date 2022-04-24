/** @format */

import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { WeatherContext } from "../App";
import { useContext } from "react";

const Container = styled.section`
	display: flex;
	flex: 1;
	align-items: stretch;
	justify-content: flex-start;
	gap: 0.4rem;

	overflow: hidden;
	padding: 0 0 0 var(--padding-medium);

	background-color: var(--secondary);
	border: 2px solid var(--primary);
	border-radius: var(--border-radius);
	color: var(--light);
	transition: border-color 250ms ease-out, background-color 250ms ease-out, color 250ms ease-out;

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
	// gap: 0.3rem;
	overflow: auto;
	white-space: nowrap;
`;

const Button = styled.button`
	background-color: var(--secondary);
	color: var(--light);
	border: none;
	// border-radius: var(--border-radius);
	padding: 0 var(--padding-medium);

	cursor: pointer;
	transition: background-color 250ms ease-out, color 250ms ease-out;

	&:hover {
		background-color: var(--primary);
	}
`;

interface Props {
	favorites: object;
	onSubmit: Function;
}

export function Favorites({ favorites = {}, onSubmit }: Props) {
	const weatherData = useContext(WeatherContext);

	return (
		<Container>
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
