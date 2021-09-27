import NavigationBar from '../../components/Navbar';
import { GlobalDashContainer } from '../../components/Container/styles';
import * as S from './styles';
import CardData from '../../components/CardData';
import Chart from 'react-apexcharts';
import CardEquipament from '../../components/CardEquipament';
import { FiMonitor, FiTool, FiUsers } from 'react-icons/fi';
import { MdLibraryBooks } from 'react-icons/md';
import AvatarEditor from 'react-avatar-editor';
import Profile from '../../assets/temp_assets/profile.png';

export default function Dashboard() {
  const series = [44, 55, 41, 17];
  const options = {
    type: 'donut',
    labels: ['Em dia', 'Vencidos', 'Vencendo', 'Não Monitorados'],
    colors: ['#04D361', '#FF6347', '#FFB167', '#3CD3C1'],
    responsive: [
      {
        breakpoint: 1600,
        options: {
          chart: {
            height: '400px',
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    plotOptions: {
      pie: {
        expandOnClick: false,
      },
    },
    fill: {
      colors: ['#04D361', '#FF6347', '#FFB167', '#3CD3C1'],
    },
    states: {
      active: {
        filter: {
          type: 'none',
        },
      },
      filter: {
        filter: {
          type: 'ligthen',
        },
      },
    },
  };

  return (
    <GlobalDashContainer>
      <NavigationBar />
      <S.ContainerDash>
        <S.EquipamentsContainer>
          <S.TitleSection>Vencimentos</S.TitleSection>
          <S.SubTitleSection>Esses equipamentos precisarão de atenção em breve</S.SubTitleSection>
          <CardEquipament title="Computador da Recepção" status={'expired'} subtitle="Estação de trabalho" />
          <CardEquipament title="Computador da Recepção" status={'expired'} subtitle="Estação de trabalho" />
          <CardEquipament title="Computador da Recepção" status={'expiring'} subtitle="Estação de trabalho" />
          <CardEquipament title="Computador da Recepção" status={'expiring'} subtitle="Estação de trabalho" />
          <CardEquipament title="Computador da Recepção" status={'expiring'} subtitle="Estação de trabalho" />
          <CardEquipament title="Computador da Recepção" status={'expiring'} subtitle="Estação de trabalho" />
          <CardEquipament title="Computador da Recepção" status={'expiring'} subtitle="Estação de trabalho" />
        </S.EquipamentsContainer>

        <S.DataCardsContainer>
          <S.ChartContainer>
            <S.TitleSection>Visão Geral da Organização</S.TitleSection>
            <S.SubTitleSection>Resumo da situação da organização</S.SubTitleSection>
            <Chart options={options} type="pie" series={series} />
          </S.ChartContainer>
          <S.TitleSection>Estatísticas de Entidades</S.TitleSection>
          <S.SubTitleSection>Esses equipamentos precisarão de atenção em breve</S.SubTitleSection>
          <S.DataCardsInsideContainer>
            <CardData title="25" icon={<FiMonitor size={32} color={'#8257E5'} />} subtitle="Equipamentos" />
            <CardData title="12" icon={<FiMonitor size={32} color={'#8257E5'} />} subtitle="Preventivas" />
          </S.DataCardsInsideContainer>
          <S.DataCardsInsideContainer>
            <CardData title="36" icon={<MdLibraryBooks size={32} color={'#8257E5'} />} subtitle="Marcas" />
            <CardData title="2" icon={<FiUsers size={32} color={'#8257E5'} />} subtitle="Técnicos" />
          </S.DataCardsInsideContainer>
        </S.DataCardsContainer>
      </S.ContainerDash>
    </GlobalDashContainer>
  );
}
