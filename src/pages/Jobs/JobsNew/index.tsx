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
import { useEffect, useState } from 'react';
import InputSelectField from '../../../components/SelectField';

interface Option {
  value: string;
  label: string;
}

export default function JobNew() {
  const history = useHistory();
  const { user } = useAuth();
  const [modalTitle, setModalTitle] = useState('Sucesso');
  const [modalDescription, setModalDescription] = useState('Categoria adicionada com sucesso.');
  const [butonsOption, setButtonsOption] = useState(false);
  const [isNewTConfirmationModalOpen, setIsNewTConfirmationModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'warning' | 'error' | 'sucess' | 'info' | undefined>('sucess');
  const [categories, setCategories] = useState<Option[]>([]);
  const [supplies, setSupplies] = useState<Option[]>([]);

  interface Category {
    id: string;
    name: string;
    created_at: Date;
    description: string;
    updated_at: Date;
  }

  interface Supply {
    id: string;
    name: string;
  }

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
  }, []);

  function handleCloseConfirmationModal() {
    setIsNewTConfirmationModalOpen(false);
    history.goBack();
  }

  const { handleSubmit, handleChange, values, touched, errors, handleBlur, isSubmitting, setFieldValue } = useFormik({
    initialValues: {
      name: '',
      categories: '',
      supplies: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(6, 'Nome do procedimento precisa ter ao menos 6 caracteres').required('*Nome do procedimento é requerido.'),
      categories: Yup.string().required('*É necessário selecionar uma marca cadastrada para o equipamento.'),
      supplies: Yup.string().min(6, 'Modelo precisa ter ao menos 6 caracteres').required('*Modelo é requerido.'),
    }),
    onSubmit: async (values, e) => {
      console.log(values);

      const response = await api.post('jobs', {
        name: values.name,
        supply_id: values.supplies,
        category_id: values.categories,
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
          <Header title="Procedimentos" description="" />
          <form onSubmit={handleSubmit}>
            <InputTextField
              name="name"
              label="Nome do Procedimento"
              value={values.name}
              placeholder={'Ex: Troca de pasta Térmica'}
              errorMesage={touched.name && errors.name ? errors.name : false}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <InputSelectField
              name="categories"
              label="Categoria em que o procedimento será associado"
              placeholder={'Selecione uma categoria'}
              options={categories}
              value={values.categories}
              errorMesage={touched.categories && errors.categories ? errors.categories : false}
              onChange={(value: any) => setFieldValue('categories', value.value)}
            />
            <InputSelectField
              name="supplies"
              label="Suprimentos do procedimento"
              placeholder={'Selecione um suprimento'}
              options={supplies}
              value={values.supplies}
              errorMesage={touched.supplies && errors.supplies ? errors.supplies : false}
              onChange={(value: any) => setFieldValue('supplies', value.value)}
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
