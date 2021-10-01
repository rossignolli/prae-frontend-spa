import * as S from './styles';
import { FiTool } from 'react-icons/fi';
import { IconType } from 'react-icons';

interface DataCardsProps {
  title: string | number | undefined;
  subtitle: string | number | undefined;
  icon: JSX.Element;
}

export default function CardData({ title, subtitle, icon }: DataCardsProps) {
  return (
    <S.CardData>
      <S.Numbers>
        <h1>{title}</h1>
        <span>{subtitle}</span>
      </S.Numbers>
      <S.SvgContainer>{icon}</S.SvgContainer>
    </S.CardData>
  );
}
