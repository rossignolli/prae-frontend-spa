import { GlobalDashContainer } from '../../../components/Container/styles';
import NavigationBar from '../../../components/Navbar';
import * as S from '../EquipamentsDetails/styles';
// import { useAuth } from '../../hooks/AuthContext';
import ImageGallery from 'react-image-gallery';
import '../../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import { StyledTable } from '../../../components/StyledTable/styles';
import Button from '../../../components/Button';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import api from '../../../services/api';
import Header from '../../../components/Header';
import { format, parseISO } from 'date-fns';
import { AiOutlineArrowRight } from 'react-icons/ai';
import ConfirmationModal from '../../../components/Modals/ConfirmationModal';
import { useHistory } from 'react-router-dom';
import SelectDateMonitorModal from '../../../components/Modals/SelectDateMonitorModal';

interface EditCategoryParams {
  id: string;
}

interface Images {
  id: string;
  path: string;
}

interface Preventive {
  id: string;
  name: string;
  created_at: string;
  description: string;
  updated_at: Date;
  brand: {
    name: string;
  };
  images: Images[];
  isCorrective: boolean;
  technician: {
    name: string;
  };
  equipament: {
    technician: {
      name: string;
    };
  };
}

interface Equipament {
  id: string;
  name: string;
  created_at: Date;
  description: string;
  updated_at: Date;
  brand: {
    name: string;
  };
  images: Images[];
}

const images = [
  {
    original: 'http://localhost:3333/files/0b50de5f4aae8ebf9858-760148446251347.jpeg',
    originalWidth: 250,
    originalHeight: 250,
    thumbnail: 'http://localhost:3333/files/0b50de5f4aae8ebf9858-760148446251347.jpeg',
  },
  {
    original: 'http://localhost:3333/files/daa5bda676f87d904d47-762130207961785.jpeg',
    originalWidth: 250,
    originalHeight: 250,
    thumbnail: 'http://localhost:3333/files/daa5bda676f87d904d47-762130207961785.jpeg',
  },
  {
    original: 'http://localhost:3333/files/be29c49654b49f9d11f9-763128805964384.jpeg',
    originalWidth: 250,
    originalHeight: 250,
    thumbnail: 'http://localhost:3333/files/be29c49654b49f9d11f9-763128805964384.jpeg',
  },
  {
    original: 'http://localhost:3333/files/258da99226c2a204dfe8-764140683729824.jpeg',
    originalWidth: 250,
    originalHeight: 250,
    thumbnail: 'http://localhost:3333/files/258da99226c2a204dfe8-764140683729824.jpeg',
  },
  {
    original: 'http://localhost:3333/files/ee2fc3a6091764ecec60-765186449538074.jpeg',
    originalWidth: 250,
    originalHeight: 250,

    thumbnail: 'http://localhost:3333/files/ee2fc3a6091764ecec60-765186449538074.jpeg',
  },
  {
    original: 'http://localhost:3333/files/c5e834a04d4e020e268f-769109686298883.jpeg',
    originalWidth: 250,
    originalHeight: 250,
    thumbnail: 'http://localhost:3333/files/c5e834a04d4e020e268f-769109686298883.jpeg',
  },
];

export default function EquipamentsDetails() {
  const [equipament, setEquipament] = useState<Equipament>();
  const [preventives, setPreventives] = useState<Preventive[]>();
  const [modalTitle, setModalTitle] = useState('Sucesso');
  const [modalDescription, setModalDescription] = useState('Categoria adicionada com sucesso.');
  const [butonsOption, setButtonsOption] = useState(false);
  const [isNewTConfirmationModalOpen, setIsNewTConfirmationModalOpen] = useState(true);
  const [modalType, setModalType] = useState<'warning' | 'error' | 'sucess' | 'info' | undefined>('sucess');
  const { id } = useParams<EditCategoryParams>();
  const history = useHistory();

  useEffect(() => {
    api.get(`/equipaments/details/${id}`).then(response => {
      setEquipament(response.data);
    });

    api.get(`/preventives/equipament/${id}`).then(response => {
      setPreventives(response.data);
    });
  }, [id]);

  function handleCloseConfirmationModal() {
    setIsNewTConfirmationModalOpen(false);
    history.goBack();
  }

  return (
    <GlobalDashContainer>
      <NavigationBar />
      <S.ContainerEquipaments>
        <S.HeaderEquipament>
          <S.GalleryEquipament>
            <ImageGallery items={images} />
          </S.GalleryEquipament>
          <S.EquipamentDetails>
            <S.EquipamentTitle>{equipament?.name}</S.EquipamentTitle>
            <S.EquipamentDescription>{equipament?.description}</S.EquipamentDescription>
            <S.ResumeEquipament>
              <S.ResumeInfo>
                <h1>{equipament?.brand.name}</h1>
                <span>Marca</span>
              </S.ResumeInfo>
              <S.ResumeInfo>
                <h1>86</h1>
                <span>dias sem corretivas</span>
              </S.ResumeInfo>
              <S.ResumeInfo>
                <h1>12</h1>
                <span>preventivas executadas</span>
              </S.ResumeInfo>
            </S.ResumeEquipament>
            <S.ResumeContainer></S.ResumeContainer>
          </S.EquipamentDetails>
        </S.HeaderEquipament>
        <S.ButtonContainer>
          <div style={{ flex: '1' }}>
            <Button minimal>Voltar</Button>
          </div>
          <Button customColor="#24A3FF">Relatório</Button>
          <Button customColor="#28C76F">Monitorar</Button>
          <Button>Editar</Button>
          <Button customColor="#FF787A">Iniciar Ação</Button>
        </S.ButtonContainer>
      </S.ContainerEquipaments>
      <S.ContainerEquipaments>
        <Header title="Preventivas" description="Listagem completa de todas as preventivas executadas no equipamento" />
        <StyledTable>
          <table>
            <thead>
              <tr>
                <th>Data de execução</th>
                <th>Tipo</th>
                <th>Realizado por</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {preventives?.map(preventive => (
                <tr key={preventive.id}>
                  <td>{format(parseISO(preventive.created_at), " dd 'de' MMMM'")}</td>
                  <td>{preventive.isCorrective ? 'Corretiva' : 'Preventiva'}</td>
                  <td>{preventive.equipament.technician.name}</td>
                  <td>
                    <AiOutlineArrowRight />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <section>
            <span>Preventivas executadas nesse equipamento</span>
          </section>
        </StyledTable>
      </S.ContainerEquipaments>
      <SelectDateMonitorModal
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
