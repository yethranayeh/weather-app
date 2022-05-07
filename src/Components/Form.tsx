/** @format */

import { useState, useRef } from "react";
import { SearchAreaContainer } from "./SearchAreaContainer";
import { LanguageOptsContainer } from "./LanguageOptsContainer";
import { UnitOptionsContainer } from "./UnitOptionsContainer";
import { Favorites } from "./Favorites";
import { FormContainer, OptionsContainer } from "../styles/FormStyle";
import { useStoreActions, useStoreState } from "../store";
import { useStoreRehydrated } from "easy-peasy";

export function Form() {
	const favoritesIsRehydrated = useStoreRehydrated();

	const formRef = useRef<HTMLFormElement>(null);
	const [searchInput, setSearchInput] = useState<string>("");
	const languageInput = useStoreState((state) => state.language);
	const setLanguageInput = useStoreActions((actions) => actions.setLanguage);

	const unit = useStoreState((state) => state.unit);
	const setUnit = useStoreActions((actions) => actions.setUnit);

	const handleSubmit = useStoreActions((actions) => actions.getWeatherByCity);

	function onFavoriteClicked(city: string) {
		const lang = languageInput ? languageInput : "en";
		handleSubmit({ city, lang, unit });
	}

	return (
		<FormContainer
			ref={formRef}
			onSubmit={(e) => {
				e.preventDefault();
				const lang = languageInput ? languageInput : "en";
				handleSubmit({ city: searchInput, lang, unit });
			}}>
			<SearchAreaContainer
				onSubmit={() => {
					if (formRef.current?.checkValidity()) {
						const lang = languageInput ? languageInput : "en";
						handleSubmit({ city: searchInput, lang, unit });
					} else {
						formRef.current?.reportValidity();
					}
				}}
				input={searchInput}
				onInputChange={setSearchInput}
			/>
			<OptionsContainer className='disable-select'>
				<LanguageOptsContainer language={languageInput ? languageInput : "en"} onChange={setLanguageInput} />

				{!favoritesIsRehydrated ? null : <Favorites onSubmit={onFavoriteClicked} />}

				<UnitOptionsContainer unit={unit} onChange={setUnit} />
			</OptionsContainer>
		</FormContainer>
	);
}
