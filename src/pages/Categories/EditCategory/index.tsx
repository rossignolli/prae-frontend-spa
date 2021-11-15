import { Prompt, useHistory, useParams } from 'react-router-dom';
import Button from '../../../components/Button';
import { GlobalDashContainer } from '../../../components/Container/styles';
import Header from '../../../components/Header';
import NavigationBar from '../../../components/Navbar';
import InputTextField from '../../../components/TextField';
import { ThreeDots } from 'react-loading-icons';
import * as S from './styles';
import * as Yup from 'yup';
import * as StylesINput from '../../../components/TextField/styles';
import { useFormik } from 'formik';
import api from '../../../services/api';
import { useAuth } from '../../../hooks/AuthContext';
import ConfirmationModal from '../../../components/Modals/ConfirmationModal';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

interface Categories {
  id: string;
  name: string;
  created_at: Date;
  description: string;
  updated_at: Date;
}

interface EditCategoryParams {
  id: string;
}

export default function CategoryEdit() {
  const history = useHistory();
  const { user } = useAuth();
  const [modalTitle, setModalTitle] = useState('Sucesso');
  const [category, setcategory] = useState<Categories>();

  const [modalDescription, setModalDescription] = useState('Informações atualizadas com sucesso.');
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
      description: category?.description ? category.description : '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(6, 'Nome de categoria precisa ter ao menos 6 caracteres')
        .max(100, 'Nome da categoria é muito grande')
        .required('*Nome da categoria é requerido.'),
      description: Yup.string().max(200, 'Descrição é muito grande'),
    }),
    onSubmit: async (values, e) => {
      const response = await api.put(`categories/${id}`, {
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
      resetForm();
    },
  });

  useEffect(() => {
    api.get(`/categories/details/${id}`).then(response => {
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
              <Header title="Editar Categoria " description="" />
              <form onSubmit={handleSubmit}>
                <InputTextField
                  name="name"
                  label="Nome da categoria"
                  value={values.name}
                  placeholder={'Ex: Macbook Air'}
                  errorMesage={touched.name && errors.name ? errors.name : false}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <InputTextField
                  name="description"
                  label="Descrição da categoria"
                  value={values.description}
                  placeholder={'Ex: Computadores de executivos'}
                  errorMesage={touched.description && errors.description ? errors.description : false}
                  onBlur={handleBlur}
                  onChange={handleChange}
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
              <Header title="Editar Categoria" description="" />
              <StylesINput.LabelForm>Nome da categoria</StylesINput.LabelForm>
              <Skeleton duration={0.5} height={58} style={{ borderRadius: `15px` }} />
              <StylesINput.LabelForm>Descrição da categoria</StylesINput.LabelForm>
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
