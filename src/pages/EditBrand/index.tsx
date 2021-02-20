import React, {useEffect, useState} from 'react'
import { useHistory, useParams } from 'react-router-dom';
import NavigationBar from '../../components/navbar';

// import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';
import { NewCategoryContent, Container } from './styles';
import {ButtonPurple,ButtonPurpleInverted} from '../../components/button/styles'
import * as Yup from 'yup'
import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

  
interface Brand {
  id: string;
  name: string;
  description: string;
}

interface BrandsParams{
  id: string;
}



const NewBrand: React.FC = ()=>{

  const history = useHistory();
  
  const params = useParams<BrandsParams>()
  const [brand, setBrand] = useState<Brand>();

  useEffect(()=>{
    api.get(`brands/details/${params.id}`).then(response =>{
      setBrand(response.data)
    })
  },[params.id])


  
  const  {handleSubmit, handleChange,setFieldValue,values, touched, errors, handleBlur, setErrors, isSubmitting, setSubmitting} = useFormik({
    initialValues: {
      brandName: brand?.name,
      description: brand?.description,
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
      }

      console.log(data)
  

       await api.post(`brands/update/${params.id}`, data).then((response)=>{
         setSubmitting(false)
       });
      history.goBack()
  
      
      },
      
  })


  
  useEffect(()=>{
   
    setFieldValue('brandName', brand?.name)
    setFieldValue('description', brand?.description)
    
  },[brand?.name, brand?.description, setFieldValue])





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