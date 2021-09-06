import React, { ChangeEvent, useEffect, useState } from "react";

import NavigationBar from "../../../components/Navbar";
import * as Yup from "yup";
import * as S from "./styles";
import InputTextField from "../../../components/TextField";
import InputSelectField from "../../../components/SelectField";
import GlobalDashContainer from "../../../components/Container";
import InputImageFile from "../../../components/ImageField";
import Button from "../../../components/Button";
import { useFormik } from "formik";
import api from "../../../services/api";
import { useAuth } from "../../../hooks/AuthContext";
import ConfirmationModal from "../../../components/Modals/ConfirmationModal";
import { useHistory } from "react-router";

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
  value: string, label: string ;
}



export default function NewEquipament() {
  const { user } = useAuth();
  const [modalTitle, setModalTitle] = useState("Sucesso");
  const [brands, setBrands] = useState<Option[]>([])
  const [categories, setCategories] = useState<Option[]>([])
  const history = useHistory();

  const [modalDescription, setModalDescription] = useState(
    "Categoria adicionada com sucesso."
  );
  const [butonsOption, setButtonsOption] = useState(false);
  const [isNewTConfirmationModalOpen, setIsNewTConfirmationModalOpen] =
    useState(false);
  const [modalType, setModalType] = useState<
    "warning" | "error" | "sucess" | "info" | undefined
  >("sucess");

  const {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    handleBlur,
    setFieldValue,
    isSubmitting,
  } = useFormik({
    initialValues: {
      nickname: "",
      model: "",
      brand: "",
      critical: "",
      categories: "",
      description: "",
    },
    validationSchema: Yup.object({
      nickname: Yup.string()
        .min(6, "Nome de categoria precisa ter ao menos 6 caracteres")
        .required("*Nome da categoria é requerido."),
        brand: Yup.string()
        .required("*É necessário selecionar uma marca cadastrada para o equipamento."),
        model: Yup.string()
        .min(6, "Modelo precisa ter ao menos 6 caracteres")
        .required("*Modelo é requerido."),
        
    }),
    onSubmit: async (values, e) => {
      
      const data = new FormData();

      images.forEach(image => {
        data.append('images', image);
      });

      const equipamentData = {
        name:  values.model,
        description:  values.description,
        technician_id: user.id,
        monitor: false,
        critical: values.critical,
        levelToManage: 0,
        category_id: values.categories,
        brand_id: values.brand
      }


      data.append('data', JSON.stringify(equipamentData));

      console.log(equipamentData)

      const response = await api.post("equipaments", data);

      if (response.status !== 200) {
        setModalTitle("Ops... Algo deu errado.");
        setModalDescription("Tente novamente mais tarde");
        setModalType("error");
        setButtonsOption(false);
        setIsNewTConfirmationModalOpen(true);
        return;
      }
      setIsNewTConfirmationModalOpen(true);
      
    },
  });

  useEffect(() => {
    api.get(`/brands`).then((response) => {
      const brands = response.data
      const parsedBrand:  Option[] = [];
      brands.map((brand: Brands) => {
        parsedBrand.push({ value: brand.id, label: brand.name },)
      })
      setBrands(parsedBrand);
    });
  }, []);

  useEffect(() => {
    api.get(`/categories`).then((response) => {
      const categories = response.data
      const parsedCategories:  Option[] = [];
      categories.map((category: Category) => {
        parsedCategories.push({ value: category.id, label: category.name },)
      })
      setCategories(parsedCategories);
    });
  }, []);


  function handleCloseConfirmationModal() {
    setIsNewTConfirmationModalOpen(false);
    history.goBack();
  }


  


  const [previewImages, setPreviewImages] = useState<PreviewImage[]>([]);
  const [images, setImages] = useState<File[]>([]);


  const criticaloptions = [
    { value: "false", label: "Sim" },
    { value: "true", label: "Não" }
  ];



  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }
    const selectedImages = Array.from(event.target.files);

    event.target.value = "";

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map((image) => {
      return { name: image.name, url: URL.createObjectURL(image) };
    });

    setPreviewImages(selectedImagesPreview);
  }



  return (
    <GlobalDashContainer>
      <S.ContainerNewEquipament>
        <NavigationBar />
        <S.NewEquipamentsContent>
          <h1>Adicionar Equipamento</h1>
          <p>
            Insira os dados do equipamento que será adicionado na base de dados
            de monitoramento. Todo equipamento por padrão é adicionado com
            monitoramento desligado!!!
          </p>
          <form onSubmit={handleSubmit}>
            <InputTextField
              name="nickname"
              label="Modelo"
              placeholder="Ar Condicionado Portátil Elgin Eco Cub, 9000 BTUs"
              value={values.nickname}
              errorMesage={touched.nickname && errors.nickname ? errors.nickname : false}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <InputTextField
              name="model"
              label="Apelido"
              errorMesage={touched.model && errors.model ? errors.model : false}
              placeholder="Ar Condicionado Portátil Elgin Eco Cub, 9000 BTUs"
              onBlur={handleBlur}
              onChange={handleChange}
            />
              <InputSelectField
              name="brand"
              label="Marcas"
              placeholder={"Selecione uma marca"}
              options={brands}
              value={values.brand}
              errorMesage={touched.brand && errors.brand ? errors.brand : false}
              onChange={(value: any) => setFieldValue('brand', value.value)}
            />
            <InputSelectField
              name="critical"
              label="Critico?"
              placeholder={"Selecione a situação do equipamento"}
              options={criticaloptions}
              value={values.critical}
              errorMesage={touched.critical && errors.critical ? errors.critical : false}
              onChange={(value: any) => setFieldValue('critical', value.value)}
            />
            <InputSelectField
              name="categories"
              label="Categoria"
              placeholder={"Selecione uma categoria"}
              options={categories}
              value={values.categories}
              errorMesage={touched.categories && errors.categories ? errors.categories : false}
              onChange={(value: any) => setFieldValue('categories', value.value)}
            />
            <InputTextField
              name="register"
              label="Registro de Patrimonio"
              placeholder={"MSD4684652"}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <InputTextField
              name="description"
              label="Descrição"
              placeholder="O conceito de ar-condicionado Portátil proporciona praticidade e fácil instalação..."
              errorMesage={touched.description && errors.description ? errors.description : false}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <S.ImageContainer>
              {previewImages.map((image) => {
                return (
                  <div key={image.url}>
                    <span
                      className="remove-image"
                      onClick={() => {
                        console.log(`you may remove this image later.`);
                      }}
                    ></span>
                    <img
                      src={image.url}
                      alt={"Your uploaded file"}
                      className="new-image"
                    />
                  </div>
                );
              })}
            </S.ImageContainer>
            <InputImageFile
              name="file"
              label="Critico"
              onChange={handleSelectImages}
            />
            <S.ButtonHolder>
            <Button type="submit">Adicionar</Button>
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
        </S.NewEquipamentsContent>
      </S.ContainerNewEquipament>
    </GlobalDashContainer>
  );
}
