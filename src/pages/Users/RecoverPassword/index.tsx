import * as S from './styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from '../../../assets/temp_assets/logo.svg';
import { useAuth } from '../../../hooks/AuthContext';
import { Link, useHistory, useParams } from 'react-router-dom';
import InputTextField from '../../../components/TextField';
import Button from '../../../components/Button';
import { Helmet } from 'react-helmet';
import api from '../../../services/api';
import { useState } from 'react';
import ConfirmationModal from '../../../components/Modals/ConfirmationModal';

interface EditCategoryParams {
  verificationCode: string;
}

export default function RecoverPasswordPage() {
  const history = useHistory();

  const [modalTitle, setModalTitle] = useState('Sucesso');
  const [modalDescription, setModalDescription] = useState('Senha recuperada com sucesso.');
  const [butonsOption, setButtonsOption] = useState(false);
  const [isNewTConfirmationModalOpen, setIsNewTConfirmationModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'warning' | 'error' | 'sucess' | 'info' | undefined>('sucess');

  const { verificationCode } = useParams<EditCategoryParams>();

  function handleCloseConfirmationModal() {
    setIsNewTConfirmationModalOpen(false);
    history.goBack();
  }

  const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
    initialValues: {
      password: '',
      passwordvalidation: '',
    },
    validationSchema: Yup.object({
      password: Yup.string().min(6, 'Senha deve ter pelo menos 6 caracteres').required('Senha é uma campo requerido'),
      passwordvalidation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    }),
    onSubmit: async values => {
      await api
        .post(`/users/changepassword`, {
          verification: verificationCode,
          password: values.password,
        })
        .then(response => {
          if (response.status === 200) {
            setIsNewTConfirmationModalOpen(true);
          } else {
            setModalType(`error`);
            setIsNewTConfirmationModalOpen(true);
          }
        });
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
          <InputTextField
            name="password"
            label="Nova senha"
            type="password"
            value={values.password}
            errorMesage={touched.password && errors.password ? errors.password : false}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <InputTextField
            name="passwordvalidation"
            label="Confirme sua nova senha"
            type="password"
            value={values.passwordvalidation}
            errorMesage={touched.passwordvalidation && errors.passwordvalidation ? errors.passwordvalidation : false}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <Button type="submit"> Alterar senha</Button>
        </S.Form>
        <ConfirmationModal
          title={modalTitle}
          description={modalDescription}
          type={modalType}
          isOpen={isNewTConfirmationModalOpen}
          onRequestCancel={() => handleCloseConfirmationModal()}
          buttons={butonsOption}
        />
      </S.Content>
      <S.ADBIG />
    </S.Container>
  );
}
