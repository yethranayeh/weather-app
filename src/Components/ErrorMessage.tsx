/** @format */
import { ReactNode } from "react";
import { Container, Icon } from "../styles/ErrorMessageStyle";

export function ErrorMessage({ children }: { children: ReactNode | ReactNode[] }) {
	return (
		<Container>
			<Icon />
			<div>{children}</div>
		</Container>
	);
}
