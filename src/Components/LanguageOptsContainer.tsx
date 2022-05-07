/** @format */

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
}

export function LanguageOptsContainer({ onChange, language }: Props) {
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
				<LanguageSelect name='language' value={language} onChange={(e) => onChange(e.target.value)}>
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
