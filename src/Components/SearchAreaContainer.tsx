/** @format */

import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchArea = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	gap: 0.2em;
	padding: var(--padding-min) var(--padding-medium);

	font-size: 1.1em;
	border: 3px solid var(--primary);
	border-radius: var(--border-radius);
	background-color: var(--middle);
	transition: border-color 250ms ease-out, background-color 250ms ease-out;

	&:focus-within,
	&:hover {
		background-color: var(--light);
		border-color: var(--secondary);
	}
`;

const SearchAreaInput = styled.input`
	border: none;
	outline: none;
	background: none;
	width: 100%;
	padding: var(--padding-min);
	color: var(--primary);
	transition: color 250ms ease-out;
`;

const SearchAreaIcon = styled(FaSearch)`
	cursor: pointer;
	color: var(--primary);
	transition: color 250ms ease-out;

	${SearchArea}:focus-within &,
    ${SearchArea}:hover & {
		color: var(--secondary);
	}
`;

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
