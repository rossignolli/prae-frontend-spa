import * as S from './styles';
import { CircleWarning, CircleExpired, CircleOK } from '../../pages/Equipaments/EquipamentList/styles';
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
                  Expirando
                </>
              )}
            </>
          )}
        </S.SvgContainer>
      </S.CardData>
    </Link>
  );
}
