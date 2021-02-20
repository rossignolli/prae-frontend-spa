import React, {useEffect, useState} from 'react'
import { FiAlertTriangle, FiAlignLeft, FiBarChart, FiBell, FiDelete, FiEdit2, FiHardDrive, FiPlus } from 'react-icons/fi';
import {  AiOutlineDelete } from 'react-icons/ai';

import { Link, useHistory } from 'react-router-dom';

import { ButtonPurpleInverted, ButtonPurple } from '../../components/button/styles';
import NavigationBar from '../../components/navbar';






import api from '../../services/api';

import { CategoryContent, Container } from './styles';
import Swal, { SweetAlertResult } from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal)

interface Supplies {
    id: string;
    name: string;
    pricePerJob: number;
    created_at: Date;
    description: string;
    updated_at: Date;
  }
  

  


const Brands: React.FC = ()=>{

    // const hookAu = useAuth();
  const [equipaments, setEquipaments] = useState<Supplies[]>();


  const history = useHistory();

  


  useEffect(()=>{
    api.get(`/brands`).then(response =>{
      setEquipaments(response.data)
    })
  },[equipaments])


  function handleclicl (id:number) {

    if(equipaments){
      const idToDelete = equipaments[id].id


      MySwal.fire({
        title: 'Você tem certeza?',
        text: "Essa ação não poderá ser desfeita",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Sim, deletar'
      }).then(async (result: SweetAlertResult) => {
  

        if (result.isConfirmed) {

          await api.post(`brands/delete/${idToDelete}`).then((response)=>{
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          })
          
        }

      
      
     
  
          
        });


    }


   

     
  }

  
  // if (!equipaments){
  //   return <p>Carregando....</p>
  // }

    return(
        <Container>
          <NavigationBar/>
                    
          <CategoryContent>
            <section>
           
            <ButtonPurpleInverted >
            <FiBarChart/>
              Gerar relatório
            </ButtonPurpleInverted>

            <ButtonPurple onClick={()=>{
              history.push('brands/new')
            }} >
            <FiPlus/>
              Adicionar
            </ButtonPurple>

            </section>
            
          <table>
              <tr>
                <th>Nome da Marca</th>
                <th>Criado por</th>
              </tr>
              {equipaments?.map((equipament, index) => (
                  <tr  key={equipament.id} >
                      <td  > <input type="checkbox" /> {equipament.name}</td>
                      <td >   <Link to={`/brands/details/${equipament.id}`}>
                      <FiEdit2 size={22} /></Link> <AiOutlineDelete  size={22} onClick={()=>{
                    handleclicl(index);
                  }}  /></td>
                  </tr>
              ))}
              </table>


          
          </CategoryContent>
           


        </Container>
    )
}

export default Brands;