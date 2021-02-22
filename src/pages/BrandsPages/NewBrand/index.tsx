import React, {FormEvent, useEffect, useState} from 'react'
import { FiAlertTriangle, FiAlignLeft, FiBarChart, FiBell, FiDelete, FiEdit2, FiHardDrive, FiPlus } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import manProfile from '../../assets/temp_assets/man-profile.jpg'
import NavigationBar from '../../../components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../../hooks/AuthContext';
import api from '../../../services/api';
import { HeadersContents } from '../../Dashboard/styles';
import { NewCategoryContent, Container } from './styles';
import {ButtonPurple,ButtonPurpleInverted} from '../../../components/button/styles'
import * as Yup from 'yup'
import withReactContent from 'sweetalert2-react-content'
import Swal, { SweetAlertResult } from 'sweetalert2'
import { useFormik } from 'formik';
import { isValid } from 'date-fns';
const MySwal = withReactContent(Swal)


const NewBrand: React.FC = ()=>{

  const history = useHistory();
  const { user } = useAuth();



  
    




 


  

  
  const  {handleSubmit, handleChange, values, touched, errors, handleBlur, setErrors, isSubmitting, setSubmitting} = useFormik({
    initialValues: {
      brandName: '',
      description: '',
    },
    validationSchema: Yup.object({
      brandName: Yup.string().min(4, 'Nome da marca precisa ter no minimo 4 caracteres').required('Required'),
      description: Yup.string().min(6, 'A descrição precisa ter no minimo 10 caracteres').required()
    }),
    onSubmit: async (values) =>{
    
      setSubmitting(true)
  
      const data = {
        name: values.brandName,
        description: values.description,
        technician_id: user.id,
      }

      await api.post('brands', data).then((response)=>{
        setSubmitting(false)

      });
      history.goBack()
  
      
      },
      
  })



    return(
        <Container>
          <NavigationBar/>
                     
          <NewCategoryContent>
            <p>Insira os dados da marca</p>  
                <form  onSubmit={handleSubmit}>
                <div className="input-block">
                <label htmlFor="about">Nome da marca</label>
                <input 
                onBlur={handleBlur}
                value={values.brandName}
                onChange={handleChange}
                type="text"
                name="brandName" 
                placeholder="Descrição da marca" />
                {touched.brandName && errors.brandName ? (
                  <div>{errors.brandName}</div>
                ): null}
                </div>   

                <div className="input-block">
                <label htmlFor="about">Descrição</label>
                <textarea 
                onBlur={handleBlur}
                value={values.description}
                onChange={handleChange}
                name="description" 
                placeholder="Descrição da marca"/>
              
                {touched.description && errors.description ? (
                  <div>{errors.description}</div>
                ): null}
                </div>   
                <div className="button-holder">
                <ButtonPurpleInverted onClick={()=>{
                  history.goBack();
                }} >Voltar</ButtonPurpleInverted>
                <ButtonPurple  type="submit"> {isSubmitting ? <span><FontAwesomeIcon  icon={faSpinner} className="fa-spin" /> Carregando</span>  : 'Salvar' } </ButtonPurple>
                </div>
              </form>
             
             
              

          
          </NewCategoryContent>
           


        </Container>
    )
}

export default NewBrand;