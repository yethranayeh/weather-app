/** @format */

import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { SearchAreaContainer } from "./SearchAreaContainer";
import { LanguageOptsContainer } from "./LanguageOptsContainer";
import { UnitOptionsContainer } from "./UnitOptionsContainer";
import { Favorites } from "./Favorites";

const FormContainer = styled.form`
	--fs: 1.2rem;
	font-size: var(--fs);
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	width: 100%;
`;

const OptionsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 1rem;

	@media (max-width: 768px) {
		gap: 0;
	}
`;

interface Props {
	city: string;
	onCityChange: Function;
	language: string;
	onLanguageChange: Function;
	localLanguage: string;
	unit: string;
	onUnitChange: Function;
	onFormUnitChange: Function;
	onSubmit: Function;
}

export function Form({
	city,
	onCityChange,
	language,
	onLanguageChange,
	localLanguage,
	unit,
	onUnitChange,
	onFormUnitChange,
	onSubmit
}: Props) {
	const formRef = useRef<HTMLFormElement>(null);
	const [storageValues, setStorageValues] = useState({} as typeof Object);
	const [favsVisible, setFavsVisible] = useState(false);

	function handleSubmit() {
		onSubmit();
		onFormUnitChange(unit);
	}

	window.addEventListener("storage", () => {
		const values = JSON.parse(localStorage.getItem("weatherFavorites") as string);
		setStorageValues(values);

		const bool = typeof values === "object" && Object.keys(values).length > 0;
		setFavsVisible(bool);
	});

	useEffect(() => {
		const storageData = localStorage.getItem("weatherFavorites");
		if (storageData) {
			const storedValues = JSON.parse(storageData);
			setStorageValues(storedValues);

			const bool = typeof storedValues === "object" && Object.keys(storedValues).length > 0;
			setFavsVisible(bool);
		}
	}, []);

	return (
		<FormContainer
			ref={formRef}
			onSubmit={(e) => {
				e.preventDefault();
				handleSubmit();
			}}>
			<SearchAreaContainer
				onSubmit={() => {
					if (formRef.current?.checkValidity()) {
						handleSubmit();
					} else {
						formRef.current?.reportValidity();
					}
				}}
				handleChange={onCityChange}
				city={city}
			/>
			<OptionsContainer className='disable-select'>
				<LanguageOptsContainer language={language} onChange={onLanguageChange} localLanguage={localLanguage} />

				<Favorites onSubmit={onSubmit} favorites={storageValues} visible={favsVisible} />

				<UnitOptionsContainer onChange={onUnitChange} />
			</OptionsContainer>
		</FormContainer>
	);
}
