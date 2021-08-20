import * as S from "./styles";

interface HeaderProps {
  title: string;
  description: string;
}

export default function Header({ title, description }: HeaderProps) {
  return (
    <S.HeaderContainer>
      <h1>{title}</h1>
      <p>{description}</p>
    </S.HeaderContainer>
  );
}
