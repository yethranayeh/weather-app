/** @format */

import styled from "styled-components";
const UnitOptions = styled.div`
	display: flex;
	flex-direction: row-reverse;
	background-color: var(--primary);
	border: 2px solid var(--primary);
	border-radius: var(--border-radius);
	overflow: hidden;
	transition: background-color 250ms ease-out, border-color 250ms ease-out;
`;

const UnitInput = styled.input`
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	border: none;
	outline: none;
`;

const UnitLabel = styled.label`
	cursor: pointer;
	color: var(--secondary);
	padding: var(--padding-medium);
	border: 2px solid transparent;
	transition: background-color 250ms ease-out, color 250ms ease-out;

	&:hover {
		background-color: var(--secondary);
		color: var(--light);
	}

	${UnitInput}:checked + & {
		color: var(--light);
		background-color: var(--secondary);
	}
`;

interface Props {
	onChange: Function;
}

export function UnitOptionsContainer({ onChange }: Props) {
	return (
		<>
			<UnitOptions>
				<UnitInput type='radio' name='units' id='imperial' autoComplete='off' onChange={(e) => onChange(e.target.id)} />
				<UnitLabel htmlFor='imperial'>°F</UnitLabel>
				<UnitInput
					type='radio'
					name='units'
					id='metric'
					autoComplete='off'
					onChange={(e) => onChange(e.target.id)}
					defaultChecked
				/>
				<UnitLabel htmlFor='metric'>°C</UnitLabel>
			</UnitOptions>
		</>
	);
}
