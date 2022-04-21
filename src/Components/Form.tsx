/** @format */

import { useState, useRef } from "react";
import styled from "styled-components";
import { SearchAreaContainer } from "./SearchAreaContainer";
import { LanguageOptsContainer } from "./LanguageOptsContainer";
import { UnitOptionsContainer } from "./UnitOptionsContainer";

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
	justify-content: space-between;
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

	function handleSubmit() {
		onSubmit();
		onFormUnitChange(unit);
	}

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
				<UnitOptionsContainer onChange={onUnitChange} />
			</OptionsContainer>
		</FormContainer>
	);
}
