import * as S from './styles';
import logo from '../../../assets/temp_assets/logo.svg';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../../components/Button';
import { Helmet } from 'react-helmet';
import api from '../../../services/api';
import { useEffect, useState } from 'react';
import ConfirmationModal from '../../../components/Modals/ConfirmationModal';
import { EmailSucess } from '../RecoverPasswordEmail/styles';

interface EditCategoryParams {
  verificationCode: string;
}

export default function AccountConfirmation() {
  const history = useHistory();

  const [modalTitle] = useState('Algo deu errado');
  const [modalDescription] = useState('Código de verificação inválido.');
  const [butonsOption] = useState(false);
  const [isNewTConfirmationModalOpen, setIsNewTConfirmationModalOpen] = useState(false);
  const [modalType] = useState<'warning' | 'error' | 'sucess' | 'info' | undefined>('error');

  const { verificationCode } = useParams<EditCategoryParams>();

  useEffect(() => {
    api.get(`/sessions/confirmation/${verificationCode}`).catch(() => {
      setIsNewTConfirmationModalOpen(true);
    });
  }, [verificationCode]);

  return (
    <S.Container>
      <Helmet>
        <title>Prae - Confirmação</title>
        <meta property="og:title" content="Prae - Gerencia seus assets com inteligência" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cdn.discordapp.com/attachments/393816255993479179/887888085256388658/unknown.png" />
        <meta property="og:url" content="https://prae.vigarani.dev/" />
      </Helmet>
      <S.Content>
        <S.Form>
          <img src={logo} alt="Prae logo" />
          <EmailSucess>Conta confirmada com sucesso.</EmailSucess>
          <Button type="button" onClick={() => history.push('/')}>
            Entrar
          </Button>
        </S.Form>
      </S.Content>
      <ConfirmationModal
        title={modalTitle}
        description={modalDescription}
        type={modalType}
        isOpen={isNewTConfirmationModalOpen}
        onRequestCancel={() => {
          history.push('/');
          setIsNewTConfirmationModalOpen(false);
        }}
        buttons={butonsOption}
      />
      <S.ADBIG />
    </S.Container>
  );
}
