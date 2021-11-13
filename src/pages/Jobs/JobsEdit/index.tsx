/* eslint-disable array-callback-return */
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
import ConfirmationModal from '../../../components/Modals/ConfirmationModal';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import InputSelectField from '../../../components/SelectField';

interface Categories {
  id: string;
  name: string;
  pricePerJob: string;
  created_at: Date;
  description: string;
  updated_at: Date;
  supply: {
    id: string;
    name: string;
  };
  category: {
    id: string;
    name: string;
  };
}

interface Option {
  value: string;
  label: string;
}

interface Supply {
  id: string;
  name: string;
}

interface EditCategoryParams {
  id: string;
}

interface Category {
  id: string;
  name: string;
  created_at: Date;
  description: string;
  updated_at: Date;
}

export default function JobEdit() {
  const history = useHistory();
  const [modalTitle, setModalTitle] = useState('Sucesso');
  const [job, setJob] = useState<Categories>();
  const [modalDescription, setModalDescription] = useState('Informações atualizadas com sucesso.');
  const [butonsOption, setButtonsOption] = useState(false);
  const [isNewTConfirmationModalOpen, setIsNewTConfirmationModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'warning' | 'error' | 'sucess' | 'info' | undefined>('sucess');
  const [categories, setCategories] = useState<Option[]>([]);
  const [supplies, setSupplies] = useState<Option[]>([]);

  const { id } = useParams<EditCategoryParams>();

  function handleCloseConfirmationModal() {
    setIsNewTConfirmationModalOpen(false);
    history.goBack();
  }

  const { handleSubmit, handleChange, values, touched, errors, handleBlur, setFieldValue, isSubmitting, dirty } = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: job?.name ? job.name : '',
      categories: job?.category ? job.category : '',
      supplies: job?.supply ? job.supply : '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(6, 'Nome do procedimento precisa ter ao menos 6 caracteres').required('*Nome do procedimento é requerido.'),
    }),
    onSubmit: async (values, e) => {
      const response = await api.put(`jobs/${id}`, {
        name: values.name,
        supply_id: values.supplies,
        category_id: values.categories,
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

  useEffect(() => {
    api.get(`/categories`).then(response => {
      const categories = response.data;
      const parsedCategories: Option[] = [];
      categories.map((category: Category) => {
        parsedCategories.push({ value: category.id, label: category.name });
      });
      setCategories(parsedCategories);
    });

    api.get(`/supplies`).then(response => {
      const supplies = response.data;
      const parseSupplies: Option[] = [];
      supplies.map((supply: Supply) => {
        parseSupplies.push({ value: supply.id, label: supply.name });
      });
      setSupplies(parseSupplies);
    });

    api.get(`/jobs/details/${id}`).then(response => {
      setJob(response.data);
    });
  }, [id]);

  return (
    <GlobalDashContainer>
      <Prompt message="Tem certeza que deseja sair? Todas as alterações não salvas serão perdidas." when={dirty} />
      <NavigationBar />
      <S.Container>
        <S.ContainerInputs>
          {categories && supplies && job ? (
            <>
              <Header title="Procedimentos" description="" />
              <form onSubmit={handleSubmit}>
                <InputTextField
                  name="name"
                  label="Nome do procedimento"
                  value={values.name}
                  placeholder={'Ex: Macbook Air'}
                  errorMesage={touched.name && errors.name ? errors.name : false}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />

                <InputSelectField
                  name="categories"
                  label="Categoria do procedimento"
                  placeholder={'Selecione uma categoria'}
                  options={categories}
                  value={values.categories}
                  defaultValue={{ value: job.category.id, label: job.category.name }}
                  errorMesage={touched.categories && errors.categories ? errors.categories : false}
                  onChange={(value: any) => {
                    setFieldValue('categories', value.value);
                  }}
                />
                <InputSelectField
                  name="supplies"
                  label="Suprimento do procedimento"
                  placeholder={'Selecione um suprimento'}
                  options={supplies}
                  defaultValue={{ value: job.supply.id, label: job.supply.name }}
                  value={values.supplies}
                  errorMesage={touched.supplies && errors.supplies ? errors.supplies : false}
                  onChange={(value: any) => setFieldValue('supplies', value.value)}
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
              <Header title="Editar procedimento" description="" />
              <StylesINput.LabelForm>Nome do procedimento</StylesINput.LabelForm>
              <Skeleton duration={0.5} height={58} style={{ borderRadius: `15px` }} />
              <StylesINput.LabelForm>Categoria do procedimento</StylesINput.LabelForm>
              <Skeleton duration={0.5} height={58} style={{ borderRadius: `15px` }} />
              <StylesINput.LabelForm>Suprimento do procedimento</StylesINput.LabelForm>
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
