/** @format */

import { SearchArea, SearchAreaInput, SearchAreaIcon } from "../styles/SearchAreaContainerStyle";

interface Props {
	onSubmit: Function;
	handleChange: Function;
	city: string;
}

export function SearchAreaContainer({ onSubmit, handleChange, city }: Props) {
	return (
		<SearchArea>
			<label htmlFor='search' className='sr-only'>
				Search city
			</label>
			<SearchAreaInput
				type='search'
				name='search'
				placeholder='Search city'
				value={city}
				onChange={(e) => handleChange(e.target.value)}
				pattern='^[\p{N}+|\p{L}+].*'
				minLength={3}
				autoComplete='off'
				required
			/>
			<SearchAreaIcon onClick={() => onSubmit()} />
			{/* <SearchAreaIcon className='fas fa-search' onClick={() => onSubmit()}></SearchAreaIcon> */}
		</SearchArea>
	);
}
