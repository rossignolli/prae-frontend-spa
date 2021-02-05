import React, {useEffect, useState} from 'react'
import { FiAlertTriangle, FiAlignLeft, FiBarChart, FiBell, FiDelete, FiEdit2, FiHardDrive, FiPlus } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import manProfile from '../../assets/temp_assets/man-profile.jpg'
import NavigationBar from '../../components/navbar';

// import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';
import { HeadersContents } from '../Dashboard/styles';
import { NewCategoryContent, Container } from './styles';
import {ButtonPurple,ButtonPurpleInverted} from '../../components/button/styles'

  


  


const NewCategory: React.FC = ()=>{

  const history = useHistory();



    return(
        <Container>
          <NavigationBar/>
                     
          <NewCategoryContent>

            <p>Insira os dados do equipamento que será adicionado na base de dados de monitoramento. 
              Todo equipamento por padrão é adicionado com monitoramento desligado</p>  
              <form action="">
              <div className="input-block">
              <label htmlFor="about">Nome da categoria</label>
              <input type="text"/>
              </div>   

              <div className="input-block">
              <label htmlFor="about">Descrição</label>
              <textarea/>
              </div>   

              </form>
              <div className="button-holder">
              <ButtonPurpleInverted onClick={()=>{
                history.goBack();
              }} >Voltar</ButtonPurpleInverted>
              <ButtonPurple >Salvar</ButtonPurple>
              </div>
             
              

          
          </NewCategoryContent>
           


        </Container>
    )
}

export default NewCategory;