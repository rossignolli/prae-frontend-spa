import React, {useEffect, useState} from 'react'
import { useHistory, useParams } from 'react-router-dom';
import NavigationBar from '../../../components/navbar';

// import { useAuth } from '../../hooks/AuthContext';
import api from '../../../services/api';
import { EditBrandContent, Container } from './styles';
import {ButtonPurple,ButtonPurpleInverted} from '../../../components/button/styles'
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



const EditBrand: React.FC = ()=>{

  const history = useHistory();
  
  const params = useParams<BrandsParams>()
  const [brand, setBrand] = useState<Brand>();
  let unMonted = false;


  
  useEffect(()=>{

    if(!unMonted){
      api.get(`brands/details/${params.id}`).then(response =>{
        setBrand(response.data)
      })
  }

  return ()=>{
    unMonted = true;
  }



  },[params.id, unMonted])

 






  
  const  {handleSubmit, handleChange,setFieldValue,values, touched, errors, handleBlur, isSubmitting, setSubmitting} = useFormik({
    initialValues: {
      brandTitle: '',
      brandDescription: '',
    },
    validationSchema: Yup.object({
      brandTitle: Yup.string().min(4, 'Nome da marca precisa ter no minimo 4 caracteres').required('Required'),
      brandDescription: Yup.string().min(6, 'A descrição precisa ter no minimo 10 caracteres').required()
    }),
    onSubmit: async (values) =>{
    
      setSubmitting(true)

      
      const data = {
        name: values.brandTitle,
        description: values.brandDescription,
      }

      console.log(data)
  

       await api.post(`brands/update/${params.id}`, data).then((response)=>{
         setSubmitting(false)
       });
      history.goBack()
  
      
      },
      
  })


  useEffect(()=>{
   
    if(brand){
      setFieldValue('brandTitle', brand.name)
      setFieldValue('brandDescription', brand.description)
    }

  },[brand?.name, brand?.description, setFieldValue, brand])
  




    return(
        <Container>
          <NavigationBar/> 
          <EditBrandContent>
            <p>Insira os dados da marca</p>  
                <form  onSubmit={handleSubmit}>
                <div className="input-block">
                <label htmlFor="about">Nome da marca</label>
                <input 
                onBlur={handleBlur}
                value={values.brandTitle}
                onChange={handleChange}
                type="text"
                name="brandTitle" 
                placeholder="Descrição da marca" />
                {touched.brandTitle && errors.brandTitle ? (
                  <div>{errors.brandTitle}</div>
                ): null}
                </div>   
                <div className="input-block">
                <label htmlFor="about">Descrição</label>
                <textarea 
                onBlur={handleBlur}
                value={values.brandDescription}
                onChange={handleChange}
                name="brandDescription" 
                placeholder="Descrição da marca"/>
                {touched.brandDescription && errors.brandDescription ? (
                  <div>{errors.brandDescription}</div>
                ): null}
                </div>   
                <div className="button-holder">
                <ButtonPurpleInverted onClick={()=>{
                  history.goBack();
                }} >Voltar</ButtonPurpleInverted>
                <ButtonPurple  type="button"> {isSubmitting ? <span><FontAwesomeIcon  icon={faSpinner} className="fa-spin" /> Carregando</span>  : 'Salvar' } </ButtonPurple>
                </div>
              </form>                        
          </EditBrandContent>          
        </Container>
    )
}

export default EditBrand;