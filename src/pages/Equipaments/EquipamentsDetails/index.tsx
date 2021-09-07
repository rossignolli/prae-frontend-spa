import { GlobalDashContainer } from "../../../components/Container/styles";
import NavigationBar from "../../../components/Navbar";
import * as S from '../EquipamentsDetails/styles'
// import { useAuth } from '../../hooks/AuthContext';
import ImageGallery from 'react-image-gallery';
import '../../../../node_modules/react-image-gallery/styles/css/image-gallery.css'
import { StyledTable } from "../../../components/StyledTable/styles";
import Button from "../../../components/Button";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import api from "../../../services/api";

interface EditCategoryParams {
  id: string;
}

interface Images {
  id: string;
  path: string;
}

interface Equipament {
  id: string;
  name: string;
  created_at: Date;
  description: string;
  updated_at: Date;
  brand: {
    name: string;
  }
  images: Images[]
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





export default function EquipamentsDetails(){
  const [equipament, setEquipament] = useState<Equipament>();

  const { id } = useParams<EditCategoryParams>();

  useEffect(() => {
    api.get(`/equipaments/details/${id}`).then((response) => {
      setEquipament(response.data);
    });
  }, [id]);



  return (
    <GlobalDashContainer>
      <NavigationBar />
      <S.ContainerEquipaments>
        <S.HeaderEquipament>
          <S.GalleryEquipament>
            <ImageGallery items={images}  />
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
            <S.ResumeContainer>
            </S.ResumeContainer>
          </S.EquipamentDetails>
        </S.HeaderEquipament>
        <S.ButtonContainer>
          <div style={{flex: '1'}}>
          <Button minimal >
            Voltar
          </Button>
          </div>
          <Button customColor='#24A3FF'>
          Relatório
          </Button>
          <Button customColor='#28C76F'>
          Monitorar
          </Button>
          <Button >
          Editar
          </Button>
          <Button customColor='#FF787A'>
          Iniciar Ação
          </Button>
          </S.ButtonContainer>
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


