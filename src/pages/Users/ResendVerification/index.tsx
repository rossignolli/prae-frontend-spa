import * as S from './styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from '../../../assets/temp_assets/logo.svg';

import { useHistory } from 'react-router-dom';
import InputTextField from '../../../components/TextField';
import Button from '../../../components/Button';
import { Helmet } from 'react-helmet';
import api from '../../../services/api';
import { useState } from 'react';
import ConfirmationModal from '../../../components/Modals/ConfirmationModal';

export default function EmailVerificationRecover() {
  const history = useHistory();
  const [sucessMessage, setSucessMessage] = useState(false);
  const [modalTitle, setModalTitle] = useState('Conta criada com sucesso.');
  const [modalDescription, setModalDescription] = useState('Enviamos um e-mail de confirmação para sua conta.');
  const [butonsOption, setButtonsOption] = useState(false);
  const [isNewTConfirmationModalOpen, setIsNewTConfirmationModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'warning' | 'error' | 'sucess' | 'info' | undefined>('sucess');

  const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
    initialValues: {
      login: '',
    },
    validationSchema: Yup.object({
      login: Yup.string().email('E-mail inserido inválido.').required('E-mail requerido'),
    }),
    onSubmit: async values => {
      try {
        await api.post(`/users/resend`, {
          email: values.login,
        });
        setSucessMessage(true);
      } catch (err) {
        setModalTitle('Ops...');
        setModalDescription('Usuário não encontrado.');
        setModalType('error');
        setButtonsOption(false);
        setIsNewTConfirmationModalOpen(true);
      }
    },
  });

  return (
    <S.Container>
      <Helmet>
        <title>Prae - Registrar</title>
        <meta property="og:title" content="Prae - Gerencia seus assets com inteligência" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cdn.discordapp.com/attachments/393816255993479179/887888085256388658/unknown.png" />
        <meta property="og:url" content="https://prae.vigarani.dev/" />
      </Helmet>
      <S.Content>
        <img src={logo} alt="Prae logo" />
        <S.Form onSubmit={handleSubmit}>
          {!sucessMessage && (
            <InputTextField
              name="login"
              label="Email cadastrado"
              type="email"
              value={values.login}
              errorMesage={touched.login && errors.login ? errors.login : false}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          )}
          {sucessMessage && <S.EmailSucess>E-mail de confirmação enviado com sucesso.</S.EmailSucess>}
          {!sucessMessage && <Button type="submit"> Reenviar e-mail de confirmação</Button>}
          {sucessMessage && (
            <Button type="button" onClick={() => history.goBack()}>
              Voltar
            </Button>
          )}
        </S.Form>
        <ConfirmationModal
          title={modalTitle}
          description={modalDescription}
          type={modalType}
          isOpen={isNewTConfirmationModalOpen}
          onRequestCancel={() => {
            setIsNewTConfirmationModalOpen(false);
          }}
          buttons={false}
        />
      </S.Content>
      <S.ADBIG />
    </S.Container>
  );
}
