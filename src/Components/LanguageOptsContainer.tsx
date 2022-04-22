/** @format */

import styled from "styled-components";
import { FaGlobe } from "react-icons/fa";
import { useState } from "react";

const LanguageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.6em;
	padding: var(--padding-min) var(--padding-medium);
	border: 2px solid var(--primary);
	border-radius: var(--border-radius);
	background-color: var(--secondary);
	color: var(--light);
	transition: border-color 250ms ease-out, background-color 250ms ease-out, color 250ms ease-out;
`;

const LanguageSelect = styled.select`
	color: var(--light);
	border: none;
	background: none;
`;

const LanguageOptGroup = styled.optgroup`
	color: var(--light);
	background-color: var(--primary);
	transition: color 250ms ease-out, background-color 250ms ease-out;
`;

const LanguageOption = styled.option`
	color: var(--light);
	background-color: var(--secondary);
	text-transform: capitalize;
	transition: color 250ms ease-out, background-color 250ms ease-out;
`;

const availableLanguages = [
	["af", "Afrikaans"],
	["al", "Shqip"],
	["ar", "عربى"],
	["az", "Azərbaycan dilində"],
	["bg", "Български"],
	["cz", "Čeština"],
	["da", "Dansk"],
	["de", "Deutsch"],
	["el", "Ελληνικά"],
	["fi", "Suomi"],
	["fr", "Français"],
	["he", "עברית"],
	["hi", "हिन्दी"],
	["hr", "Hrvatski"],
	["hu", "Magyar"],
	["id", "Bahasa Indonesia"],
	["it", "Italiano"],
	["ja", "日本語"],
	["kr", "한국어"],
	["no", "Norsk"],
	["nl", "Nederlands"],
	["pl", "Polski"],
	["pt", "Português"],
	["ro", "Română"],
	["ru", "Русский"],
	["sv", "Svenska"],
	["sp", "Español"],
	["sr", "Српски"],
	["th", "ไทย"],
	["tr", "Türkçe"],
	["uk", "Українська"],
	["vi", "Tiếng Việt"],
	["zh_cn", "简体中文"]
];

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
