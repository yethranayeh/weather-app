/** @format */

import { useEffect, useRef, useState } from "react";
import { useStoreState } from "../store";
import { Container, IconContainer, UList, Button } from "../styles/FavoritesStyle";
import { useSpring } from "react-spring";
import { AiFillStar } from "react-icons/ai";

interface Props {
	onSubmit: Function;
}

export function Favorites({ onSubmit }: Props) {
	const weatherData = useStoreState((state) => state.weatherData);
	const favorites = useStoreState((state) => state.favorites);
	const [visible, setVisible] = useState(false);
	const visibleState = useStoreState((state) => state.favoritesVisible);

	useEffect(() => {
		setVisible(visibleState);
	}),
		[visible];

	const containerRef = useRef(null as any);
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
