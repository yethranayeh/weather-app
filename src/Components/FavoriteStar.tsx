/** @format */

import { useEffect, useState } from "react";
import { FavoriteStarContainer } from "../styles/WeatherStyle";
import { FavoriteStar as Star } from "../styles/FavoriteStarStyle";
import { useStoreActions, useStoreState } from "../store";

export function FavoriteStar() {
	const data = useStoreState((state) => state.weatherData);

	const [favorited, setFavorited] = useState(false);
	const favorites = useStoreState((state) => state.favorites);

	const { addToFavorites } = useStoreActions((actions) => actions);
	const { removeFromFavorites } = useStoreActions((actions) => actions);

	useEffect(() => {
		// If city name exists in favorites, set favorited to true
		const favoritesKeys = Object.keys(favorites);
		if (favoritesKeys.length > 0) {
			if (data?.id && favoritesKeys.includes(String(data.id))) {
				setFavorited(true);
			}
		}
	}, []);

	return (
		data && (
			<FavoriteStarContainer>
				<Star
					color={favorited ? "#ffa700" : "var(--dark)"}
					onClick={() => {
						if (!favorited) {
							addToFavorites({ id: data.id, cityName: data.name });
						} else {
							removeFromFavorites(data.id);
						}
						setFavorited((favorited) => !favorited);
					}}
				/>
			</FavoriteStarContainer>
		)
	);
}
