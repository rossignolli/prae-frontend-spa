import { ContainerGeneral } from "./styles";

interface ContainerProps {
  children: JSX.Element[] | JSX.Element;
}

export default function MainContainer({ children }: ContainerProps) {
  return <ContainerGeneral>{children}</ContainerGeneral>;
}
