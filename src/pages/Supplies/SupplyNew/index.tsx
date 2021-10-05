import { useHistory } from 'react-router-dom';
import Button from '../../../components/Button';
import { GlobalDashContainer } from '../../../components/Container/styles';
import Header from '../../../components/Header';
import NavigationBar from '../../../components/Navbar';
import InputTextField from '../../../components/TextField';
import { ThreeDots } from 'react-loading-icons';
import * as S from '../../Categories/NewCategory/styles';
import * as Yup from 'yup';

import { useFormik } from 'formik';
import api from '../../../services/api';
import { useAuth } from '../../../hooks/AuthContext';
import ConfirmationModal from '../../../components/Modals/ConfirmationModal';
import { useState } from 'react';

export default function NewCategory() {
  const history = useHistory();
  const { user } = useAuth();
  const [modalTitle, setModalTitle] = useState('Sucesso');
  const [modalDescription, setModalDescription] = useState('Categoria adicionada com sucesso.');
  const [butonsOption, setButtonsOption] = useState(false);
  const [isNewTConfirmationModalOpen, setIsNewTConfirmationModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'warning' | 'error' | 'sucess' | 'info' | undefined>('sucess');

  function handleCloseConfirmationModal() {
    setIsNewTConfirmationModalOpen(false);
    history.goBack();
  }

  const { handleSubmit, handleChange, values, touched, errors, handleBlur, isSubmitting } = useFormik({
    initialValues: {
      name: '',
      pricePerJob: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(6, 'Nome do suprimento precisa ter ao menos 6 caracteres').required('*Nome do suprimento é requerido.'),
      pricePerJob: Yup.string().required('*Preco do suprimento é requerido.'),
    }),
    onSubmit: async (values, e) => {
      const response = await api.post('supplies', {
        ...values,
        technician_id: user.id,
      });

      if (response.status !== 200) {
        setModalTitle('Ops... Algo deu errado.');
        setModalDescription('Tente novamente mais tarde');
        setModalType('error');
        setButtonsOption(false);
        setIsNewTConfirmationModalOpen(true);
        return;
      }
      setIsNewTConfirmationModalOpen(true);
    },
  });

  return (
    <GlobalDashContainer>
      <NavigationBar />
      <S.Container>
        <S.ContainerInputs>
          <Header title="Suprimentos" description="" />
          <form onSubmit={handleSubmit}>
            <InputTextField
              name="name"
              label="Nome do suprimento"
              value={values.name}
              placeholder={'Ex: Pasta Térmica'}
              errorMesage={touched.name && errors.name ? errors.name : false}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <InputTextField
              name="pricePerJob"
              type="number"
              label="Preço do suprimento"
              value={values.pricePerJob}
              placeholder={'Ex: 20.50'}
              errorMesage={touched.pricePerJob && errors.pricePerJob ? errors.pricePerJob : false}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <S.ActionHolderContainer>
              <Button type="button" minimal customColor="#FFFFFF" onClick={() => history.goBack()}>
                Voltar
              </Button>
              <Button type="submit">{isSubmitting ? <ThreeDots style={{ width: `42px` }} /> : `Salvar`}</Button>
            </S.ActionHolderContainer>
          </form>
        </S.ContainerInputs>
      </S.Container>
      <ConfirmationModal
        title={modalTitle}
        description={modalDescription}
        type={modalType}
        isOpen={isNewTConfirmationModalOpen}
        onRequestCancel={() => handleCloseConfirmationModal()}
        buttons={butonsOption}
      />
    </GlobalDashContainer>
  );
}
