import React, {useEffect, useState} from 'react'
import {  FiBarChart, FiEdit2, FiPlus } from 'react-icons/fi';
import {  AiOutlineDelete } from 'react-icons/ai';

import { Link, useHistory } from 'react-router-dom';

import { ButtonPurpleInverted, ButtonPurple } from '../../../components/button/styles';
import NavigationBar from '../../../components/navbar';






import api from '../../../services/api';

import { BrandlistContent, Container } from './styles';
import Swal, { SweetAlertResult } from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal)

interface Brand {
    id: string;
    name: string;
    pricePerJob: number;
}
  

const Brands: React.FC = ()=>{


  let unMonted = false;

  const [brands, setBrands] = useState<Brand[]>();


  const history = useHistory();

  


  useEffect(()=>{
  
  

    if(!unMonted){
      api.get(`/brands`).then(response =>{
        setBrands(response.data)
      })
    }


    return ()=>{
      unMonted = true;
    }


  },[brands])


  function handleclicl (id:number) {

    if(brands){
        const idToDelete = brands[id].id
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

    return(
        <Container>
          <NavigationBar/>
                    
          <BrandlistContent>
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
            <thead>
                <tr>
                  <th>Nome da Marcassss</th>
                  <th>Criado por</th>
                </tr>
            </thead>
            <tbody>
              {brands?.map((brand, index) => (
                  <tr  key={brand.id} >
                      <td  >{brand.name}</td>
                      <td >   <Link to={`/brands/details/${brand.id}`}>
                      <FiEdit2 size={22} /></Link> <AiOutlineDelete  size={22} onClick={()=>{
                    handleclicl(index);
                  }}  /></td>
                  </tr>
              ))}
              </tbody>
              </table>


          
          </BrandlistContent>
           


        </Container>
    )
}

export default Brands;