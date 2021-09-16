import * as S from './styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from '../../assets/temp_assets/logo.svg';
import { useAuth } from '../../hooks/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import InputTextField from '../../components/TextField';
import Button from '../../components/Button';

export default function SigninPage() {
  const { signIn } = useAuth();
  const history = useHistory();

  const { handleSubmit, handleChange, values, touched, errors, handleBlur, setErrors } = useFormik({
    initialValues: {
      login: '',
      password: '',
      invalidlogin: '',
    },
    validationSchema: Yup.object({
      login: Yup.string().email('E-mail inserido inválido.').required('E-mail requerido'),
      password: Yup.string().min(6, 'Senha deve ter pelo menos 6 caracteres').required('Senha é uma campo requerido'),
    }),
    onSubmit: async values => {
      signIn({
        email: values.login,
        password: values.password,
      }).then(response => {
        if (response.message) {
          setErrors({
            invalidlogin: 'Senha ou e-mail inválidos.',
          });
        } else {
          history.push('/dashboard');
        }
      });
    },
  });

  return (
    <S.Container>
      <S.ADBIG></S.ADBIG>
      <S.Content>
        <img src={logo} alt="Prae logo" />
        <S.Form onSubmit={handleSubmit}>
          <InputTextField
            name="login"
            label="E-mail"
            type="email"
            value={values.login}
            errorMesage={touched.login && errors.login ? errors.login : false}
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
          <Button type="submit"> Entrar</Button>

          <h3>{errors?.invalidlogin}</h3>

          <S.SignUpHintContainer>
            <span>Não possui conta?</span>
            <Link to={'/signup'}>
              <h1>Solicitar Conta</h1>
            </Link>
          </S.SignUpHintContainer>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}
