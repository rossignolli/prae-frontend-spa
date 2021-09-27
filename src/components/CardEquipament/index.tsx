import * as S from './styles';
import { FiTool } from 'react-icons/fi';
import { IconType } from 'react-icons';
import { CircleWarning, CircleExpired, CircleOK } from '../../pages/Equipaments/EquipamentList/styles';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';

interface DataCardsProps {
  title: string | number;
  subtitle: string | number;
  status: 'expired' | 'running' | 'expiring';
}

export default function CardEquipament({ title, subtitle, status }: DataCardsProps) {
  return (
    <S.CardData>
      <S.Numbers>
        <h1>{title}</h1>
        <span>{subtitle}</span>
      </S.Numbers>
      <S.SvgContainer>
        {status === 'running' ? (
          <>
            <CircleOK />
            Operando
          </>
        ) : (
          <>
            {status === 'expired' ? (
              <>
                <CircleExpired />
                Expirado
              </>
            ) : (
              <>
                <CircleWarning />
                Vencendo
              </>
            )}
          </>
        )}

        <BsThreeDotsVertical size={20} />
      </S.SvgContainer>
    </S.CardData>
  );
}
