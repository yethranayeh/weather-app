/** @format */

import { UnitOptions, UnitInput, UnitLabel } from "../styles/UnitOptionsContainerStyle";
interface Props {
	unit: string;
	onChange: Function;
}

export function UnitOptionsContainer({ unit, onChange }: Props) {
	return (
		<>
			<UnitOptions>
				<UnitInput
					type='radio'
					name='units'
					id='imperial'
					autoComplete='off'
					onChange={(e) => onChange(e.target.id)}
					defaultChecked={unit === "imperial"}
				/>
				<UnitLabel htmlFor='imperial'>°F</UnitLabel>
				<UnitInput
					type='radio'
					name='units'
					id='metric'
					autoComplete='off'
					onChange={(e) => onChange(e.target.id)}
					defaultChecked={unit === "metric"}
				/>
				<UnitLabel htmlFor='metric'>°C</UnitLabel>
			</UnitOptions>
		</>
	);
}
