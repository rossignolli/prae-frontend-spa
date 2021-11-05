import * as S from './styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from '../../../assets/temp_assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import InputTextField from '../../../components/TextField';
import Button from '../../../components/Button';
import { Helmet } from 'react-helmet';
import api from '../../../services/api';
import ConfirmationModal from '../../../components/Modals/ConfirmationModal';
import { useState } from 'react';
import { ThreeDots } from 'react-loading-icons';

export default function SignUpPage() {
  const [modalTitle, setModalTitle] = useState('Conta criada com sucesso.');
  const [modalDescription, setModalDescription] = useState('Enviamos um e-mail de confirmação para sua conta.');
  const [butonsOption, setButtonsOption] = useState(false);
  const [isNewTConfirmationModalOpen, setIsNewTConfirmationModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'warning' | 'error' | 'sucess' | 'info' | undefined>('sucess');
  const history = useHistory();

  const { handleSubmit, handleChange, values, touched, errors, handleBlur, isSubmitting } = useFormik({
    initialValues: {
      name: '',
      email: '',
      emailConfirmation: '',
      password: '',
      passwordValidation: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('E-mail requerido'),
      email: Yup.string().email('E-mail inserido inválido.').required('E-mail requerido'),
      emailConfirmation: Yup.string().oneOf([Yup.ref('email'), null], 'Emails não conferem '),
      password: Yup.string().min(6, 'Senha deve ter pelo menos 6 caracteres').required('Senha requerida'),
      passwordValidation: Yup.string().oneOf([Yup.ref('password'), null], 'Senhas não conferem'),
    }),
    onSubmit: async values => {
      const data = {
        name: values.name,
        email: values.email,
        password: values.password,
      };

      try {
        await api.post('users', data);
        setIsNewTConfirmationModalOpen(true);
      } catch (err) {
        setModalTitle('Ops... Algo deu errado.');
        setModalDescription('Tente novamente mais tarde');
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
          <InputTextField
            name="name"
            label="Nome"
            type="text"
            value={values.name}
            errorMesage={touched.name && errors.name ? errors.name : false}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <InputTextField
            name="email"
            label="E-mail"
            type="email"
            value={values.email}
            errorMesage={touched.email && errors.email ? errors.email : false}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <InputTextField
            name="emailConfirmation"
            label="Confirme seu e-mail"
            type="emailConfirmation"
            value={values.emailConfirmation}
            errorMesage={touched.emailConfirmation && errors.emailConfirmation ? errors.emailConfirmation : false}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <InputTextField
            name="password"
            label="Senha"
            type="password"
            value={values.password}
            errorMesage={touched.password && errors.password ? errors.password : false}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <InputTextField
            name="passwordValidation"
            label="Confirme sua senha"
            type="password"
            value={values.passwordValidation}
            errorMesage={touched.passwordValidation && errors.passwordValidation ? errors.passwordValidation : false}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <Button type="submit"> {isSubmitting ? <ThreeDots style={{ width: '42px' }} /> : 'Registrar'}</Button>
          <Button minimal type="button">
            <Link to={'/'}>Voltar</Link>
          </Button>
        </S.Form>
        <ConfirmationModal
          title={modalTitle}
          description={modalDescription}
          type={modalType}
          isOpen={isNewTConfirmationModalOpen}
          onRequestCancel={() => {
            setIsNewTConfirmationModalOpen(false);
            history.goBack();
          }}
          buttons={false}
        />
      </S.Content>
      <S.ADBIG />
    </S.Container>
  );
}
