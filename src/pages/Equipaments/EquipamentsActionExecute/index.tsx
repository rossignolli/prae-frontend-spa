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
import { AiOutlineMinus, AiOutlinePlusCircle } from 'react-icons/ai';

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
  name: string;
  created_at: Date;
  description: string;
  monitor: boolean;
  dateOfExpiration: string;
  updated_at: Date;
  supply: {
    name: string;
    pricePerJob: string;
  };
}

interface JobExecution {
  id: string;
  name: string;
  created_at: Date;
  description: string;
  monitor: boolean;
  dateOfExpiration: string;
  updated_at: Date;
  supply: {
    name: string;
    pricePerJob: string;
  };
}

export default function EquipamentsPreventiveExecute() {
  const [jobs, setJobs] = useState<Jobs[]>([]);
  const [jobsExecution, setJobsExecution] = useState<JobExecution[]>([]);

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
    api.get(`/jobs/details/categories/${id}`).then(response => {
      setJobs(response.data);
    });
  }, [id]);

  function AddJobToExecution(job: Jobs) {
    setJobsExecution([...jobsExecution, job]);
  }

  return (
    <GlobalDashContainer>
      <NavigationBar />
      <S.ContainerEquipaments>
        <S.HeaderTitle>
          <b>Ações disponiveis na categoria</b>
        </S.HeaderTitle>
        <StyledTable>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Nome do Suprimento</th>
                <th>Custo</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {jobs?.map((job, index) => (
                <tr key={job.id}>
                  <td>{job.name}</td>
                  <td>{job.supply.name}</td>
                  <td>{job.supply.pricePerJob}</td>
                  <td>
                    <AiOutlinePlusCircle onClick={() => AddJobToExecution(jobs[index])} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <section>
            <span>Ações disponiveis para execução</span>
          </section>
        </StyledTable>
      </S.ContainerEquipaments>
      <S.ContainerEquipaments>
        <S.HeaderTitle>
          <b>Ações a serem executadas</b>
        </S.HeaderTitle>
        <StyledTable>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Nome do Suprimento</th>
                <th>Custo</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {jobsExecution?.map(job => (
                <tr key={job.id}>
                  <td>{job.name}</td>
                  <td>{job.supply.name}</td>
                  <td>{job.supply.pricePerJob}</td>
                  <td>
                    <AiOutlineMinus />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <section>
            <span>Ações adicionadas como executadas</span>
          </section>
        </StyledTable>
      </S.ContainerEquipaments>

      <ConfirmationModal
        title={modalTitle}
        description={modalDescription}
        type={modalType}
        isOpen={isNewTConfirmationModalOpen}
        onRequestCancel={() => null}
        buttons={butonsOption}
      />
    </GlobalDashContainer>
  );
}
