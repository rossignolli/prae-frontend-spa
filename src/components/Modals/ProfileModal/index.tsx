import Modal from 'react-modal';
import * as S from './styles';
import { ChangeEvent, useEffect, useState } from 'react';
import 'react-nice-dates/build/style.css';
import Button from '../../Button';
import Header from '../../Header';

import AvatarEditor from 'react-avatar-editor';
import manProfile from '../../../assets/temp_assets/man-profile.png';
import InputTextField from '../../TextField';
import { useAuth } from '../../../hooks/AuthContext';
import InputImageFile from '../../ImageField';
import api from '../../../services/api';
import { ThreeDots } from 'react-loading-icons';

interface NewTranctionModalProps {
  isOpen: boolean;
  onRequestCancel: () => void;
  onRequestConfirmation: () => void;
  title?: string;
  description?: string;
  type?: 'warning' | 'error' | 'sucess' | 'info';
  buttons?: boolean;
}

interface User {
  id: string;
  avatar: string;
  name: string;
  email: string;
}

interface PreviewImage {
  name: string;
  url: string;
}

export default function ProfileModal({ isOpen, onRequestCancel, onRequestConfirmation }: NewTranctionModalProps) {
  const [editor, setEditor] = useState<AvatarEditor>();
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [previewImages, setPreviewImages] = useState<PreviewImage[]>([]);
  const [scale, setScale] = useState(1.2);
  const [rotation, setRotation] = useState(0);

  const { user, updateUser } = useAuth();

  useEffect(() => {
    setName(user.name);
  }, [user.name]);

  async function handleSaveAvatar() {
    const data = new FormData();

    if (loading) {
      return;
    }

    setLoading(true);

    if (editor && images) {
      const canvasScaled = editor.getImageScaledToCanvas();
      const avatarUrl = canvasScaled.toDataURL();
      const blobToSend = await fetch(avatarUrl).then(r => r.blob());
      data.append('image', blobToSend);
      data.append('id', user.id);
      data.append('name', name);

      const response = await api.patch<User>('users/avatar', data);

      if (response.status !== 200) {
        setError(true);
        return;
      }

      const updatedUser = response.data;

      updateUser({
        id: updatedUser.id,
        avatar: updatedUser.avatar,
        name: updatedUser.name,
        email: updatedUser.email,
      });

      setLoading(false);
      setImages([]);
      setPreviewImages([]);
      setName(updatedUser.name);
      onRequestConfirmation();
      data.delete('name');
      data.delete('id');
      data.delete('image');

      return;
    }

    data.append('id', user.id);
    data.append('name', name);

    const response = await api.patch<User>('users/avatar', data);

    if (response.status !== 200) {
      setError(true);
      return;
    }

    const updatedUser = response.data;

    updateUser({
      id: updatedUser.id,
      avatar: updatedUser.avatar,
      name: updatedUser.name,
      email: updatedUser.email,
    });

    setLoading(false);
    setImages([]);
    setPreviewImages([]);
    setName(updatedUser.name);
    onRequestConfirmation();
    data.delete('name');
    data.delete('id');
    data.delete('image');
  }

  const setEditorRef = (editor: any) => {
    editor = setEditor(editor);
  };

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }
    const selectedImages = Array.from(event.target.files);

    event.target.value = '';

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return { name: image.name, url: URL.createObjectURL(image) };
    });

    setPreviewImages(selectedImagesPreview);
  }

  function handleZoom(e: ChangeEvent<HTMLInputElement>) {
    const scale = parseFloat(e.target.value);
    setScale(scale);
  }

  function handleRotation(e: ChangeEvent<HTMLInputElement>) {
    const rotation = parseFloat(e.target.value);
    setRotation(rotation);
  }

  return (
    <Modal isOpen={isOpen} overlayClassName="react-modal-overlay" className="react-modal-content" ariaHideApp={false}>
      <S.ContainerModal>
        <Header title="Editar Perfil" description="" />
        <S.ModalContainer>
          {images.length !== 0 && (
            <>
              <AvatarEditor
                ref={setEditorRef}
                image={previewImages[0].url}
                width={200}
                height={200}
                rotate={rotation}
                borderRadius={100}
                border={30}
                scale={scale}
              />
              <h1>Zoom</h1>
              <input type="range" min={0.1} max={4} step="0.01" onChange={handleZoom} />
              <h1>Rotação</h1>
              <input type="range" min={0} max={360} step="1" onChange={handleRotation} />
            </>
          )}
          <S.Userdiv>
            {!previewImages.length && <img src={user.avatar ? user.avatar : manProfile} alt="" />}
            {!previewImages.length && <InputImageFile name="file" accept="image/*" label="Critico" title={'Escolher arquivo'} onChange={handleSelectImages} />}
          </S.Userdiv>
          <InputTextField name="name" label="Nome do perfil" value={name} placeholder={''} onBlur={() => null} onChange={e => setName(e.target.value)} />
        </S.ModalContainer>
        <S.ButtonHolder>
          <Button type="button" customColor="#E1F5EC" onClick={() => handleSaveAvatar()}>
            {loading ? <ThreeDots style={{ width: '42px' }} /> : 'Salvar'}
          </Button>
          <Button
            type="button"
            customColor="#F5E9EC"
            minimal
            onClick={() => {
              setLoading(false);
              setImages([]);
              setPreviewImages([]);
              onRequestCancel();
            }}>
            Cancelar
          </Button>
        </S.ButtonHolder>
      </S.ContainerModal>
    </Modal>
  );
}
