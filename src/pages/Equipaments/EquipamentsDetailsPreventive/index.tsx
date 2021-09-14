import { GlobalDashContainer } from '../../../components/Container/styles';
import NavigationBar from '../../../components/Navbar';
import * as S from '../EquipamentsDetailsPreventive/styles';
import { useAuth } from '../../../hooks/AuthContext';
import ImageGallery from 'react-image-gallery';
import '../../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import { StyledTable } from '../../../components/StyledTable/styles';
import Button from '../../../components/Button';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import api from '../../../services/api';
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

interface Jobs {
  id: string;
  preventive: {
    isCorrective: boolean;
  };
  job: {
    description: string;
    name: string;
    supply: {
      name: string;
      pricePerJob: number;
    };
  };
}

interface Equipament {
  id: string;
  name: string;
  created_at: Date;
  description: string;
  monitor: boolean;
  dateOfExpiration: string;
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

export default function EquipamentsDetailsPreventive() {
  const [equipament, setEquipament] = useState<Equipament>();
  const [jobs, setJobs] = useState<Jobs[]>();
  const [modalTitle, setModalTitle] = useState('Sucesso');
  const [modalDescription, setModalDescription] = useState('Categoria adicionada com sucesso.');
  const [butonsOption, setButtonsOption] = useState(false);
  const [isNewTConfirmationModalOpen, setIsNewTConfirmationModalOpen] = useState(false);
  const [isConfirmationMonitorModalOpen, setIsConfirmationMonitorModalOpen] = useState(false);

  const [modalType, setModalType] = useState<'warning' | 'error' | 'sucess' | 'info' | undefined>('sucess');
  const { id } = useParams<EditCategoryParams>();
  const history = useHistory();
  const { user } = useAuth();

  useEffect(() => {
    api.get(`/preventives/details/${id}`).then(response => {
      setJobs(response.data);
    });
  }, [id]);

  function handleCloseConfirmationModalMonitoring() {
    setIsConfirmationMonitorModalOpen(false);
  }

  function handleCloseConfirmationModal() {
    setIsNewTConfirmationModalOpen(false);
  }

  function handleOpenMonitoringModal() {
    if (equipament?.monitor) {
      setModalTitle('Aviso');
      setModalDescription('Esse equipamento já está sendo monitorado.');
      setModalType('warning');
      setButtonsOption(false);
      setIsNewTConfirmationModalOpen(true);
      return;
    }

    setIsConfirmationMonitorModalOpen(true);
  }

  async function handleStarMonitoringEquipament(date: string) {
    const MonitoringDate = {
      date,
    };
    const response = await api.post(`preventives/monitor/${id}`, MonitoringDate);

    if (response.status !== 200) {
      setModalTitle('Ops... Algo deu errado.');
      setModalDescription('Tente novamente mais tarde');
      setModalType('error');
      setButtonsOption(false);
      setIsNewTConfirmationModalOpen(true);
      return;
    }

    if (equipament) {
      setEquipament({ ...equipament, monitor: true, dateOfExpiration: date });
    }

    setModalTitle('Sucesso.');
    setModalDescription('Equipamento está sendo monitorado.');
    setModalType('sucess');
    setButtonsOption(false);
    setIsConfirmationMonitorModalOpen(false);
    setIsNewTConfirmationModalOpen(true);
  }

  return (
    <GlobalDashContainer>
      <NavigationBar />
      <S.ContainerEquipaments>
        <S.HeaderTitle>
          <Button minimal onClick={() => () => history.goBack()}>
            Voltar
          </Button>
          <b>Ação</b> #{jobs && jobs[0].id} - <b>{jobs && jobs[0].preventive.isCorrective ? `Corretiva` : `Preventiva`}</b>
        </S.HeaderTitle>
        <StyledTable>
          <table>
            <thead>
              <tr>
                <th>Procedimento</th>
                <th>Suprimento</th>
                <th>Custo</th>
              </tr>
            </thead>
            <tbody>
              {jobs?.map(job => (
                <tr key={job.id}>
                  <td>{job.job.name}</td>
                  <td>{job.job.supply.name}</td>
                  <td>{job.job.supply.pricePerJob}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <section>
            <span>Detalhes da Ações</span>
          </section>
        </StyledTable>
      </S.ContainerEquipaments>
      <SelectDateMonitorModal
        title={modalTitle}
        description={modalDescription}
        type={modalType}
        isOpen={isConfirmationMonitorModalOpen}
        onRequestCancel={() => handleCloseConfirmationModalMonitoring()}
        onRequestConfirmation={date => handleStarMonitoringEquipament(date)}
        buttons={butonsOption}
      />
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
