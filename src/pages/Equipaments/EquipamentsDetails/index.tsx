import { GlobalDashContainer } from "../../../components/Container/styles";
import SucessLogo from '../../../assets/svgs/sucess_modal_type.svg'
import NavigationBar from "../../../components/Navbar";
import * as S from '../EquipamentsDetails/styles'
// import { useAuth } from '../../hooks/AuthContext';
import ImageGallery from 'react-image-gallery';
import '../../../../node_modules/react-image-gallery/styles/css/image-gallery.css'
import { StyledTable } from "../../../components/StyledTable/styles";

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];


export default function EquipamentsDetails(){
  return (
    <GlobalDashContainer>
      <NavigationBar />
      <S.ContainerEquipaments>
        <S.HeaderEquipament>
          <S.GalleryEquipament>
            <ImageGallery items={images} />
          </S.GalleryEquipament>
          <S.EquipamentDetails>
            <S.EquipamentTitle>Computador HP ProDesk 400 G5 Intel Core i5-8500 4GB 500GB Windows 10 Pro</S.EquipamentTitle>
            <S.EquipamentDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quam nibh, rhoncus ut turpis sit amet, egestas faucibus ex. Aliquam gravida eget neque quis auctor. Mauris lobortis ligula ac dignissim volutpat. Fusce ut malesuada ante. Nulla a suscipit magna</S.EquipamentDescription>
            <S.ResumeEquipament>
            <S.ResumeInfo>
              <h1>HP</h1>
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
            <S.ResumeActions>
            <S.CardEquipament>
            <img src={SucessLogo} alt="" width={32} height={32}/> <span> <b>Valida </b> até: 2021-02-14 21:22:15  </span>
            </S.CardEquipament>
            <S.CardEquipament>
            <img src={SucessLogo} alt="" width={32} height={32}/> <span> Confiável  </span>
            </S.CardEquipament>
            </S.ResumeActions>
          </S.EquipamentDetails>
        </S.HeaderEquipament>

      </S.ContainerEquipaments>
      <S.ContainerEquipaments>
      <StyledTable>
                  <table>
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Criado por</th>
                      </tr>
                    </thead>
                    <tbody>
                      
                        <tr >
                          <td>teste</td>
                          <td>teste</td>
                          <td>
                            
                            
                          </td>
                        </tr>
                      
                    </tbody>
                  </table>
                  <section>
                    <span>Marcas cadastradas na base de dados</span>
                  </section>
            </StyledTable>
      </S.ContainerEquipaments>
    </GlobalDashContainer>
  );
};


