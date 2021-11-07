/* eslint-disable array-callback-return */
import React, { ChangeEvent, useEffect, useState } from 'react';

import NavigationBar from '../../../components/Navbar';
import * as Yup from 'yup';
import * as S from './styles';
import InputTextField from '../../../components/TextField';
import InputSelectField from '../../../components/SelectField';
import GlobalDashContainer from '../../../components/Container';
import InputImageFile from '../../../components/ImageField';
import Button from '../../../components/Button';
import { useFormik } from 'formik';
import api from '../../../services/api';
import { useAuth } from '../../../hooks/AuthContext';
import ConfirmationModal from '../../../components/Modals/ConfirmationModal';
import { useHistory } from 'react-router';
import { ThreeDots } from 'react-loading-icons';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import * as StylesINput from '../../../components/TextField/styles';
import SelectDateMonitorModal from '../../../components/Modals/SelectDateMonitorModal';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { AxiosError } from 'axios';
interface PreviewImage {
  name: string;
  url: string;
}

interface Brands {
  id: string;
  name: string;
  created_at: Date;
  description: string;
  updated_at: Date;
}

interface Category {
  id: string;
  name: string;
  created_at: Date;
  description: string;
  updated_at: Date;
}

interface Option {
  value: string;
  label: string;
}

interface EditCategoryParams {
  id: string;
}

interface Image {
  id: string;
  path: string;
}

interface Equipament {
  id: string;
  name: string;
  created_at: Date;
  description: string;
  monitor: boolean;
  dateOfExpiration: string;
  status: string;
  images: Image[];
  category: {
    id: string;
    name: string;
  };
  updated_at: Date;
  brand: {
    id: string;
    name: string;
  };
  technician: {
    avatar: string;
    name: string;
  };
}

export default function EquipamentEdit() {
  const { user } = useAuth();
  const [brands, setBrands] = useState<Option[]>([]);
  const [categories, setCategories] = useState<Option[]>([]);
  const [equipament, setEquipament] = useState<Equipament>();
  const history = useHistory();
  const [modalTitle, setModalTitle] = useState('Sucesso');
  const [modalDescription, setModalDescription] = useState('Informações salvas com sucesso.');
  const [butonsOption, setButtonsOption] = useState(false);
  const [isNewTConfirmationModalOpen, setIsNewTConfirmationModalOpen] = useState(false);
  const [isWarnModal, setIsWarnModal] = useState(false);
  const [modalType, setModalType] = useState<'warning' | 'error' | 'sucess' | 'info' | undefined>('sucess');
  const { id } = useParams<EditCategoryParams>();
  const [previewImages, setPreviewImages] = useState<any[]>([]);
  const [newExpiratiaonDate, setNewExpiratiaonDate] = useState('');
  const [deletedImagens, setDeletedImages] = useState<any>([]);
  const [previewNewImages, setPreviewNewImages] = useState<any[]>([]);
  const [isConfirmationMonitorModalOpen, setIsConfirmationMonitorModalOpen] = useState(false);
  const [images, setImages] = useState<File[]>([]);

  const { handleSubmit, handleChange, values, touched, errors, handleBlur, setFieldValue, isSubmitting } = useFormik({
    initialValues: {
      model: '',
      brand: '',
      categories: '',
      descriptionEquipament: '',
    },

    onSubmit: async (values, e) => {
      const data = new FormData();

      images.forEach(image => {
        data.append('newImages', image);
      });

      const equipamentData = {
        name: values.model,
        description: values.descriptionEquipament,
        brand: values.brand,
        category: values.categories,
        newExpiratiaonDate,
        deletedImagens,
      };

      data.append('data', JSON.stringify(equipamentData));

      try {
        await api.put(`equipaments/${id}`, data);
        setIsNewTConfirmationModalOpen(true);
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
      }
    },
  });

  useEffect(() => {
    api.get(`/brands`).then(response => {
      const brands = response.data;
      const parsedBrand: Option[] = [];
      brands.map((brand: Brands) => {
        parsedBrand.push({ value: brand.id, label: brand.name });
      });
      setBrands(parsedBrand);
    });
  }, []);

  useEffect(() => {
    api.get(`/categories`).then(response => {
      const categories = response.data;
      const parsedCategories: Option[] = [];
      categories.map((category: Category) => {
        parsedCategories.push({ value: category.id, label: category.name });
      });
      setCategories(parsedCategories);
    });
  }, []);

  useEffect(() => {
    api.get(`/equipaments/details/${id}`).then(response => {
      setEquipament(response.data);
    });
  }, [id]);

  useEffect(() => {
    if (equipament) {
      setFieldValue('model', equipament.name);
      setFieldValue('descriptionEquipament', equipament.description);
      setFieldValue('categories', equipament.category.id);
      setFieldValue('brand', equipament.brand.id);
    }

    if (equipament?.category) {
      setPreviewImages(equipament?.images);
    }

    if (equipament?.dateOfExpiration) {
      setNewExpiratiaonDate(equipament?.dateOfExpiration);
    }
  }, [equipament, id, setFieldValue]);

  function handleCloseConfirmationModal() {
    setIsNewTConfirmationModalOpen(false);
    history.goBack();
  }

  function handleCloseConfirmationModalMonitoring() {
    setIsConfirmationMonitorModalOpen(false);
  }

  async function handleStarMonitoringEquipament(date: string) {
    setNewExpiratiaonDate(date);

    setIsConfirmationMonitorModalOpen(false);
  }

  function handleOpenMonitoringModal() {
    setIsConfirmationMonitorModalOpen(true);
  }

  function handleRemoveNewImage(image: PreviewImage) {
    setPreviewNewImages(previewNewImages.map(image => image).filter(img => img.name !== image.name));
  }

  function handleRemovePreviousImage(image: any) {
    setDeletedImages([...deletedImagens, image]);
    setPreviewImages(previewImages.map(image => image).filter(img => img.id !== image.id));
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }
    const selectedImages = Array.from(event.target.files);

    if (selectedImages.length + previewImages.length > 4) {
      setModalTitle('Ops... Algo deu errado.');
      setModalDescription('Apenas 4 imagens são permitidas por equipamento.');
      setModalType('error');
      setButtonsOption(false);
      setIsWarnModal(true);
      return;
    }

    event.target.value = '';

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return { name: image.name, url: URL.createObjectURL(image) };
    });

    setPreviewNewImages([...previewNewImages, ...selectedImagesPreview]);
  }

  return (
    <GlobalDashContainer>
      <S.ContainerNewEquipament>
        <NavigationBar />
        <S.NewEquipamentsContent>
          {equipament ? (
            <>
              <h1>Editar Equipamento</h1>
              <p>
                Edição os dados do equipamento que será adicionado na base de dados de monitoramento. Todo equipamento por padrão é adicionado com monitoramento
                desligado!!!
              </p>
              <form onSubmit={handleSubmit}>
                <InputTextField
                  name="model"
                  label="Modelo"
                  placeholder="Ar Condicionado Portátil Elgin Eco Cub, 9000 BTUs"
                  value={values.model}
                  errorMesage={touched.model && errors.model ? errors.model : false}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <InputTextField
                  name="descriptionEquipament"
                  label="Descrição"
                  placeholder="Ar Condicionado Portátil Elgin Eco Cub, 9000 BTUs"
                  value={values.descriptionEquipament}
                  errorMesage={touched.descriptionEquipament && errors.descriptionEquipament ? errors.descriptionEquipament : false}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <InputSelectField
                  name="brand"
                  label="Marcas"
                  placeholder={'Selecione uma marca'}
                  options={brands}
                  value={values.brand}
                  defaultValue={{ value: equipament.brand.id, label: equipament.brand.name }}
                  errorMesage={touched.brand && errors.brand ? errors.brand : false}
                  onChange={(value: any) => setFieldValue('brand', value.value)}
                />
                <InputSelectField
                  name="categories"
                  label="Categoria"
                  placeholder={'Selecione uma categoria'}
                  options={categories}
                  value={values.categories}
                  defaultValue={{ value: equipament.category.id, label: equipament.category.name }}
                  errorMesage={touched.categories && errors.categories ? errors.categories : false}
                  onChange={(value: any) => setFieldValue('categories', value.value)}
                />

                <StylesINput.LabelForm>
                  Data de vencimento de manutenções:
                  <b>{equipament?.dateOfExpiration && newExpiratiaonDate && format(parseISO(newExpiratiaonDate), 'dd MMMM yyyy', { locale: ptBR })}</b>
                </StylesINput.LabelForm>
                <S.ExpirationDate></S.ExpirationDate>
                <Button type="button" onClick={handleOpenMonitoringModal}>
                  Alterar data de vencimento
                </Button>

                <S.ImageContainer>
                  {previewImages.map(image => {
                    return (
                      <div key={image.path}>
                        <span className="remove-image" onClick={() => handleRemovePreviousImage(image)}></span>
                        <img src={image.path} alt={'Your uploaded file'} className="new-image" />
                      </div>
                    );
                  })}

                  {previewNewImages.map(image => {
                    return (
                      <div key={image.name}>
                        <span className="remove-image" onClick={() => handleRemoveNewImage(image)}></span>
                        <img src={image.url} alt={'Your uploaded file'} className="new-image" />
                      </div>
                    );
                  })}
                </S.ImageContainer>
                <InputImageFile name="file" label="Critico" title={`Adicione imagens ao equipamento`} onChange={handleSelectImages} />
                <S.ButtonHolder>
                  <Button type="button" minimal customColor="#FFFFFF" onClick={() => history.goBack()}>
                    Voltar
                  </Button>
                  <Button type="submit">{isSubmitting ? <ThreeDots style={{ width: `42px` }} /> : `Salvar`}</Button>
                </S.ButtonHolder>
              </form>
              <ConfirmationModal
                title={modalTitle}
                description={modalDescription}
                type={modalType}
                isOpen={isNewTConfirmationModalOpen}
                onRequestCancel={() => handleCloseConfirmationModal()}
                buttons={butonsOption}
              />
              <ConfirmationModal
                title={modalTitle}
                description={modalDescription}
                type={modalType}
                isOpen={isWarnModal}
                onRequestCancel={() => setIsWarnModal(false)}
                buttons={butonsOption}
              />
              <SelectDateMonitorModal
                title={modalTitle}
                description={modalDescription}
                type={modalType}
                isOpen={isConfirmationMonitorModalOpen}
                onRequestCancel={() => handleCloseConfirmationModalMonitoring()}
                onRequestConfirmation={date => handleStarMonitoringEquipament(date)}
                buttons={butonsOption}
              />
            </>
          ) : (
            <>
              <h1>Editar Equipamento</h1>
              <p>
                Edição os dados do equipamento que será adicionado na base de dados de monitoramento. Todo equipamento por padrão é adicionado com monitoramento
                desligado!!!2
              </p>
              <StylesINput.LabelForm>Modelo</StylesINput.LabelForm>
              <Skeleton duration={0.5} height={58} style={{ borderRadius: `15px` }} />
              <StylesINput.LabelForm>Marca</StylesINput.LabelForm>
              <Skeleton duration={0.5} height={58} style={{ borderRadius: `15px` }} />
              <StylesINput.LabelForm>Categoria</StylesINput.LabelForm>
              <Skeleton duration={0.5} height={58} style={{ borderRadius: `15px` }} />
              <StylesINput.LabelForm>Descrição</StylesINput.LabelForm>
              <Skeleton duration={0.5} height={58} style={{ borderRadius: `15px`, marginBottom: '16px' }} />
              <StylesINput.LabelForm>Adicionar imagens ao equipamento</StylesINput.LabelForm>
              <Skeleton duration={0.5} height={96} style={{ borderRadius: `15px` }} />
            </>
          )}
        </S.NewEquipamentsContent>
      </S.ContainerNewEquipament>
    </GlobalDashContainer>
  );
}
