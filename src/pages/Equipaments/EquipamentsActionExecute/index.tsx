import { GlobalDashContainer } from '../../../components/Container/styles';
import NavigationBar from '../../../components/Navbar';
import * as S from './styles';
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
import { AiFillCheckCircle, AiOutlineMinus, AiOutlinePlusCircle } from 'react-icons/ai';
import Jobs from '../../../stale/JobsPage';
import InputSelectField from '../../../components/SelectField';

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

interface JobsType {
  id: string;
  name: string;
  created_at: Date;
  description: string;
  checked: boolean;
  monitor: boolean;
  dateOfExpiration: string;
  updated_at: Date;
  category: {
    name: string;
  };
  supply: {
    name: string;
    pricePerJob: string;
  };
}

export default function EquipamentsPreventiveExecute() {
  const [jobs, setJobs] = useState<JobsType[]>([]);
  const [jobsExecution, setJobsExecution] = useState<JobsType[]>([]);
  const [total, setTotal] = useState(0);
  const [totalJobs, setTotalJobs] = useState(0);

  const [modalTitle, setModalTitle] = useState('Sucesso');
  const [modalDescription, setModalDescription] = useState('Categoria adicionada com sucesso.');
  const [butonsOption, setButtonsOption] = useState(false);

  const [isCritical, setCritical] = useState(false);

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

  const criticaloptions = [
    { value: 'false', label: 'Preventiva' },
    { value: 'true', label: 'Corretiva' },
  ];

  function AddJobToExecution(job: JobsType) {
    if (job.checked === true) {
      job.checked = false;
      setJobsExecution([...jobsExecution, job]);
      setTotal(total - parseFloat(job.supply.pricePerJob));
      setTotalJobs(totalJobs - 1);
      return;
    }
    job.checked = true;
    setJobsExecution([...jobsExecution, job]);
    setTotalJobs(totalJobs + 1);
    setTotal(total + parseFloat(job.supply.pricePerJob));
  }

  return (
    <GlobalDashContainer>
      <NavigationBar />
      <S.ContainerEquipaments>
        <S.HeaderTitle>
          <b>Ações disponiveis na categoria</b>
        </S.HeaderTitle>
        <InputSelectField
          name="critical"
          label="Essa ação é preventiva ou corretiva?"
          placeholder={'Selecione o tipo da ação'}
          options={criticaloptions}
          value={isCritical}
          errorMesage={false}
          onChange={(value: any) => setCritical(value)}
        />
        <StyledTable style={{ marginTop: '16px' }}>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Nome do Suprimento</th>
                <th>Categoria</th>
                <th>Custo</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {jobs?.map((job, index) => (
                <tr key={job.id}>
                  <td>{job.name}</td>
                  <td>{job.supply.name}</td>
                  <td>{job.category.name}</td>
                  <td>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(parseFloat(job.supply.pricePerJob))}
                  </td>
                  <td>
                    {job.checked ? (
                      <AiFillCheckCircle color={'#04D361'} onClick={() => AddJobToExecution(jobs[index])} />
                    ) : (
                      <AiOutlinePlusCircle onClick={() => AddJobToExecution(jobs[index])} />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <section>
            <span>Ações disponiveis para execução</span>
          </section>
        </StyledTable>

        <S.HeaderTitle>
          <p>
            Após todo procedimento, o tempo entre a data de inicio de monitoramento e a data selecionada para a expiração é a mesma para todas as próximas
            ações.
          </p>
        </S.HeaderTitle>

        <S.ResumeActions>
          <S.HeaderTitle>
            <b>Ações a serem executadas:</b> {totalJobs}
            <b>Preço total dos suprimentos:</b>{' '}
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(total)}
          </S.HeaderTitle>
          <Button minimal>Voltar</Button>
          <Button>Confirmar e Aplicar</Button>
        </S.ResumeActions>
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
