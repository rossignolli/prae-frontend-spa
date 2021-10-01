import * as S from './styles';
import { FiTool } from 'react-icons/fi';
import { IconType } from 'react-icons';
import { CircleWarning, CircleExpired, CircleOK } from '../../pages/Equipaments/EquipamentList/styles';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Link } from 'react-router-dom';

interface DataCardsProps {
  title: string | number;
  subtitle: string | number;
  status: 'expired' | 'running' | 'expiring';
  id: string;
}

export default function CardEquipament({ title, subtitle, status, id }: DataCardsProps) {
  return (
    <Link to={`equipaments/details/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
        </S.SvgContainer>
      </S.CardData>
    </Link>
  );
}
