/** @format */

import { SearchArea, SearchAreaInput, SearchAreaIcon } from "../styles/SearchAreaContainerStyle";

interface Props {
	onSubmit: Function;
	input: string;
	onInputChange: Function;
}

export function SearchAreaContainer({ onSubmit, input, onInputChange }: Props) {
	return (
		<SearchArea>
			<label htmlFor='search' className='sr-only'>
				Search city
			</label>
			<SearchAreaInput
				type='search'
				name='search'
				placeholder='Search city'
				value={input}
				onChange={(e) => onInputChange(e.target.value)}
				pattern='^[\p{N}+|\p{L}+].*'
				minLength={3}
				autoComplete='off'
				required
			/>
			<SearchAreaIcon onClick={() => onSubmit()} />
		</SearchArea>
	);
}
