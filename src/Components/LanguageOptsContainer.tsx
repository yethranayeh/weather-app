/** @format */

import { useState } from "react";
import {
	LanguageContainer,
	LanguageSelect,
	LanguageOptGroup,
	LanguageOption
} from "../styles/LanguageOptsContainerStyle";
import { availableLanguages } from "../utils/availableLanguages";
import { FaGlobe } from "react-icons/fa";

interface Props {
	onChange: Function;
	language: string;
	localLanguage: string;
}

function isLocalLanguageSupported(localLanguage: string) {
	// Loop through availabeLanguages array's 0th index values to check if any of them match the localLanguage
	for (let i = 0; i < availableLanguages.length; i++) {
		if (availableLanguages[i][0] === localLanguage) {
			return true;
		}
	}
	return false;
}

export function LanguageOptsContainer({ onChange, language, localLanguage }: Props) {
	const [localChecked, setLocalChecked] = useState(false);
	return (
		<>
			<LanguageContainer>
				<label
					htmlFor='language'
					style={{
						display: "flex",
						alignItems: "center"
					}}>
					<FaGlobe aria-placeholder='globe icon for language' />
				</label>
				<LanguageSelect
					name='language'
					value={
						!localChecked && isLocalLanguageSupported(localLanguage)
							? (() => {
									onChange(localLanguage);
									setLocalChecked(true);
									return localLanguage;
							  })()
							: language
					}
					onChange={(e) => onChange(e.target.value)}>
					<LanguageOptGroup label='Default'>
						<LanguageOption value='en'>English</LanguageOption>
					</LanguageOptGroup>
					<LanguageOptGroup label='Other'>
						{availableLanguages.map((lang) =>
							lang[0] === "ar" || lang[0] === "he" ? (
								<LanguageOption
									key={lang[0]}
									value={lang[0]}
									style={{
										direction: "rtl"
									}}>
									{lang[1]}
								</LanguageOption>
							) : (
								<LanguageOption key={lang[0]} value={lang[0]}>
									{lang[1]}
								</LanguageOption>
							)
						)}
					</LanguageOptGroup>
				</LanguageSelect>
			</LanguageContainer>
		</>
	);
}
