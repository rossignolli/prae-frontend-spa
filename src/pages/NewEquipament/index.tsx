import React, {useEffect, useState} from 'react'
import { FiAlertTriangle, FiAlignLeft, FiBarChart, FiBell, FiDelete, FiEdit2, FiHardDrive, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import manProfile from '../../assets/temp_assets/man-profile.jpg'
import NavigationBar from '../../components/navbar';

// import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';
import { HeadersContents } from '../Dashboard/styles';
import { NewEquipamentsContent, Container } from './styles';


  


  


const NewEquipament: React.FC = ()=>{


    return(
        <Container>
          <NavigationBar/>
                     
          <HeadersContents>
              <div>
                <FiAlignLeft size={26} color='#000000'/>
                <h3>Adicionar Equipamento</h3>
              </div>
                  <div>
                  <Link to=''>
                  <FiAlertTriangle size={26} color='#000000' />
                  <span>4</span>
                </Link>
                <Link to=''>
                  <FiHardDrive size={26} color='#000000' />
                  <span>4</span>
                </Link>
                <Link to=''>
                  <FiBell size={26} color='#000000' />
                  <span>4</span>
                </Link>
                  </div>                          
            </HeadersContents>
          <NewEquipamentsContent>

            <p>Insira os dados do equipamento que será adicionado na base de dados de monitoramento. 
              Todo equipamento por padrão é adicionado com monitoramento desligado</p>  
              <form action="">
              <div className="input-block">
              <label htmlFor="about">Nome do equipamento</label>
              <input type="text"/>
              </div>   

              <div className="input-block">
              <label htmlFor="about">Descrição</label>
              <textarea/>
              </div>   


              <div className="input-block">
              <label htmlFor="about">Sobre</label>
              <input type="text"/>
              </div>  

               <p className="warning">*Os tipos de equipamentos são importantes para atribuir os procedimentos corretos criado pelo administrador para cada tipo de equipamento
                 durante um eventual procedimento de preventiva ou corretiva.</p>   


              <div className="input-select-block">
              <label htmlFor="brands">Escolha o tipo do equipamento</label>
                <select name="brands" > 
                <option value="apple">Apple</option>
                <option value="dell">Dell Inc</option>
                <option value="hp">HP</option>
                <option value="lenovo">Lenovo</option>
                </select>
              </div>   

              <div className="input-select-block">
              <label htmlFor="brands">Escolha a marca</label>
                <select name="brands" > 
                <option value="apple">Apple</option>
                <option value="dell">Dell Inc</option>
                <option value="hp">HP</option>
                <option value="lenovo">Lenovo</option>
                </select>
              </div>   

              </form>
              

          
          </NewEquipamentsContent>
           


        </Container>
    )
}

export default NewEquipament;