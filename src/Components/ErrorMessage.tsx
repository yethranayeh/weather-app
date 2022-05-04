/** @format */
import { ReactNode } from "react";
import { Container, ChildrenContainer, Icon } from "../styles/ErrorMessageStyle";

export function ErrorMessage({ children }: { children: ReactNode | ReactNode[] }) {
	return (
		<Container>
			<Icon />
			<ChildrenContainer>{children}</ChildrenContainer>
		</Container>
	);
}
