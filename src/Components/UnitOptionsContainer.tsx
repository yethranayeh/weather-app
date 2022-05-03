/** @format */

import { UnitOptions, UnitInput, UnitLabel } from "../styles/UnitOptionsContainerStyle";
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
