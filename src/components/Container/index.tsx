import { GlobalDashContainer } from "./styles";

interface ContainerProps {
  children: JSX.Element[] | JSX.Element;
}

export default function MainContainer({ children }: ContainerProps) {
  return <GlobalDashContainer>{children}</GlobalDashContainer>;
}
