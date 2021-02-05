import React, {useEffect, useState} from 'react'
import { FiAlertTriangle, FiAlignLeft, FiBarChart, FiBell, FiDelete, FiEdit2, FiHardDrive, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import manProfile from '../../assets/temp_assets/man-profile.jpg'
import { ButtonPurple, ButtonPurpleInverted } from '../../components/button/styles';
import NavigationBar from '../../components/navbar';

// import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';
import { HeadersContents } from '../Dashboard/styles';
import { NewEquipamentsContent, Container } from './styles';


  


  


const NewEquipament: React.FC = ()=>{


    return(
        <Container>
          <NavigationBar/>
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


               <p className="warning">*Os tipos de equipamentos são importantes para atribuir os procedimentos corretos criado pelo administrador para cada tipo de equipamento
                 durante um eventual procedimento de preventiva ou corretiva.</p>   


              <div className="input-select-block">
              <label htmlFor="brands">Escolha o tipo do equipamento</label>
                <select name="brands" > 
                <option value="apple">Refrigeração</option>
                <option value="dell">Porteiro Eletronico</option>
                <option value="hp">Câmera de Segurança</option>
                <option value="hp">Switch de rede</option>
                <option value="lenovo">Estação de Trabalho</option>
                <option value="lenovo">Notebook</option>
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

              <label htmlFor="about">Prioridade do equipamento</label>

              <p className="warning-equip">Equipamentos classificados como críticos recebem prioridades em exibição de lista,
              classificação prioriatária em planejamentos de preventivas e alertas de vencimento em tempo real</p>  

              <div className="input-block-check">
              <input type="checkbox" id="checkbox-style"/>
              <label htmlFor="checkbox-style">Crítico</label>
              </div>  
              

              <div className="input-select-block">
              <input multiple type="file" id="image[]"/>
              </div>   


              <div className="input-select-block">
              <label htmlFor="brands">Nível para gerenciar</label>
                <select name="brands"> 
                <option value="apple">Supervisor</option>
                <option value="dell">Gerente</option>
                <option value="hp">Técnico</option>
                </select>
              </div>   

             


              </form>
            
              <div className="button-holder">
              <ButtonPurpleInverted>Voltar</ButtonPurpleInverted>
              <ButtonPurple>Adicionar</ButtonPurple>
              </div>
              
              
          
          </NewEquipamentsContent>
           


        </Container>
    )
}

export default NewEquipament;