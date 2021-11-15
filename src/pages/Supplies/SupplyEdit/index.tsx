import { Prompt, useHistory, useParams } from 'react-router-dom';
import Button from '../../../components/Button';
import { GlobalDashContainer } from '../../../components/Container/styles';
import Header from '../../../components/Header';
import NavigationBar from '../../../components/Navbar';
import InputTextField from '../../../components/TextField';
import { ThreeDots } from 'react-loading-icons';
import * as S from '../../Categories/EditCategory/styles';
import * as Yup from 'yup';
import * as StylesINput from '../../../components/TextField/styles';
import { useFormik } from 'formik';
import api from '../../../services/api';
import { useAuth } from '../../../hooks/AuthContext';
import ConfirmationModal from '../../../components/Modals/ConfirmationModal';
import { useEffect, useState } from 'react';
import InputCurrencyField from '../../../components/CurrencyField';
import Skeleton from 'react-loading-skeleton';
import { AxiosError } from 'axios';

interface Categories {
  id: string;
  name: string;
  pricePerJob: string;
  created_at: Date;
  description: string;
  updated_at: Date;
}

interface EditCategoryParams {
  id: string;
}

export default function SupplyEdit() {
  const history = useHistory();
  const { user } = useAuth();
  const [modalTitle, setModalTitle] = useState('Sucesso');
  const [category, setcategory] = useState<Categories>();
  const [modalDescription, setModalDescription] = useState('Informações atualizadas com sucesso');
  const [butonsOption, setButtonsOption] = useState(false);
  const [isNewTConfirmationModalOpen, setIsNewTConfirmationModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'warning' | 'error' | 'sucess' | 'info' | undefined>('sucess');

  const { id } = useParams<EditCategoryParams>();

  function handleCloseConfirmationModal() {
    setIsNewTConfirmationModalOpen(false);
    history.goBack();
  }

  const { handleSubmit, handleChange, values, touched, errors, handleBlur, setFieldValue, isSubmitting, dirty, resetForm } = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: category?.name ? category.name : '',
      pricePerJob: category?.pricePerJob ? category.pricePerJob : 0,
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(6, 'Nome de categoria precisa ter ao menos 6 caracteres')
        .max(100, 'Nome do suprimento é muito grande')
        .required('*Nome da categoria é requerido.'),
    }),
    onSubmit: async (values, e) => {
      try {
        await api.put(`supplies/${id}`, {
          ...values,
          technician_id: user.id,
        });
        setIsNewTConfirmationModalOpen(true);
        resetForm();
      } catch (e: unknown) {
        const error = e as AxiosError;

        if (error.response) {
          if (error.response.status === 400) {
            setModalTitle('Ops... Algo deu errado.');
            setModalDescription('Tente novamente mais tarde');
            setModalType('error');
            setButtonsOption(false);
          }
        }
        resetForm();
      }
    },
  });

  useEffect(() => {
    api.get(`/supplies/details/${id}`).then(response => {
      setcategory(response.data);
    });
  }, [id]);

  return (
    <GlobalDashContainer>
      <Prompt message="Tem certeza que deseja sair? Todas as alterações não salvas serão perdidas." when={dirty} />
      <NavigationBar />
      <S.Container>
        <S.ContainerInputs>
          {category ? (
            <>
              <Header title="Editar Suprimento" description="" />
              <form onSubmit={handleSubmit}>
                <InputTextField
                  name="name"
                  label="Nome do suprimento"
                  value={values.name}
                  placeholder={'Ex: Macbook Air'}
                  errorMesage={touched.name && errors.name ? errors.name : false}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <InputCurrencyField
                  name="pricePerJob"
                  label="Preço do suprimento"
                  value={values.pricePerJob}
                  placeholder={'Ex: 20,50'}
                  errorMesage={touched.pricePerJob && errors.pricePerJob ? errors.pricePerJob : false}
                  onBlur={handleBlur}
                  setFieldValue={setFieldValue}
                />

                <S.ActionHolderContainer>
                  <Button type="button" minimal customColor="#FFFFFF" onClick={() => history.goBack()}>
                    Voltar
                  </Button>
                  <Button type="submit" onClick={() => handleSubmit()}>
                    {isSubmitting ? <ThreeDots style={{ width: `42px` }} /> : `Salvar`}
                  </Button>
                </S.ActionHolderContainer>
              </form>
            </>
          ) : (
            <>
              <Header title="Editar Suprimento" description="" />
              <StylesINput.LabelForm>Nome do suprimento</StylesINput.LabelForm>
              <Skeleton duration={0.5} height={58} style={{ borderRadius: `15px` }} />
              <StylesINput.LabelForm>Preço do suprimento</StylesINput.LabelForm>
              <Skeleton duration={0.5} height={58} style={{ borderRadius: `15px` }} />
            </>
          )}
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
