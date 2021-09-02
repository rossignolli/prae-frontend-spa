import React, { ChangeEvent, useState } from "react";

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

interface PreviewImage {
  name: string;
  url: string;
}

export default function NewEquipament() {
  const { user } = useAuth();
  const [modalTitle, setModalTitle] = useState("Sucesso");
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
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(6, "Nome de categoria precisa ter ao menos 6 caracteres")
        .required("*Nome da categoria é requerido."),
    }),
    onSubmit: async (values, e) => {
      const response = await api.post("categories", {
        ...values,
        technician_id: user.id,
      });

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


  const [previewImages, setPreviewImages] = useState<PreviewImage[]>([]);
  const [images, setImages] = useState<File[]>([]);

  const brandsOptions = [
    { value: "chocolate", label: "Apple" },
    { value: "strawberry", label: "LG" },
    { value: "vanilla", label: "HP" },
  ];

  const criticaloptions = [
    { value: "false", label: "Sim" },
    { value: "true", label: "Não" },
    { value: "vanilla", label: "Refrigeradores" },
  ];

  const categoriesloptions = [
    { value: "false", label: "Desktop" },
    { value: "true", label: "Refrigeradores" },
    { value: "teste", label: "Casa de máquinas" },
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
          <form>
            <InputTextField
              name="Apelido"
              label="Apelido"
              placeholder={"Ex: Ar-condicionado Servidor"}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <InputTextField
              name="model"
              label="Modelo"
              placeholder="Ar Condicionado Portátil Elgin Eco Cub, 9000 BTUs"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <InputTextField
              name="Apelido"
              label="Registro de Patrimonio"
              placeholder={"Ex: Ar-condicionado Servidor"}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <InputSelectField
              name="brands"
              label="Marcas"
              placeholder="Selecione uma marca"
              options={brandsOptions}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <InputSelectField
              name="nickname"
              label="Categorias"
              placeholder="Selecione uma categoria"
              options={criticaloptions}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <InputSelectField
              name="critical"
              label="Critico"
              placeholder="Seleciona a importancia do equipamento"
              options={categoriesloptions}
            />
            <InputTextField
              name="description"
              label="Descrição"
              placeholder="O conceito de ar-condicionado Portátil proporciona praticidade e fácil instalação..."
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
              name="critical"
              label="Critico"
              onChange={handleSelectImages}
            />
          </form>

          <S.ButtonHolder>
            <Button>Adicionar</Button>
          </S.ButtonHolder>
        </S.NewEquipamentsContent>
      </S.ContainerNewEquipament>
    </GlobalDashContainer>
  );
}
