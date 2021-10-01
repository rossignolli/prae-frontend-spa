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
import Header from '../../../components/Header';

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
      pricePerJob: string;
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
  const reducer = (accumulator: any, curr: any) => accumulator.supply.pricePerJob + curr;

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

  return (
    <GlobalDashContainer>
      <NavigationBar />
      <S.ContainerEquipaments>
        <S.HeaderTitle>
          <Button minimal onClick={() => history.goBack()}>
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
                  <td>R$: {job.job.supply.pricePerJob}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <section>
            <span>Detalhes da Ações</span>
          </section>
        </StyledTable>
        <S.HeaderTitle>
          <b>Custo total dos procedimentos</b> R$:{' '}
          {jobs
            ?.map(item => parseFloat(item.job.supply.pricePerJob))
            .reduce((prev, next) => prev + next)
            ?.toFixed(2)}
        </S.HeaderTitle>
      </S.ContainerEquipaments>
    </GlobalDashContainer>
  );
}
