
import React from 'react'
import {Container, Content, ADBIG, Form} from './styles'
import {useFormik} from 'formik'
import * as Yup from 'yup'

 import {useAuth} from '../../hooks/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import girlit from '../../assets/temp_assets/girlit.jpg'

export default function SigninPage() {


  const {signIn} = useAuth();
  const history = useHistory()


  


  const  {handleSubmit, handleChange, values, touched, errors, handleBlur, setErrors} = useFormik({
    initialValues: {
      login: '',
      password: '',
      invalidlogin: '',
    },
    validationSchema: Yup.object({
      login: Yup.string().min(10, 'Login Must be loger than 10 characters').required('Required'),
      password: Yup.string().min(6, 'Password should be longer than 6 characters').required()
    }),
    onSubmit: async (values) =>{
      signIn({
        email: values.login,
        password: values.password
      }).then(response =>{
        if(response.message){
          setErrors({
            invalidlogin: response.message
          })
        }
        else{
           history.push('/dashboard');
         }


         
         
      })
      
      },
      
  })






    return (
       <Container>
        <ADBIG>
      
          {/* <span>Watch.</span>
          <span>Prevent.</span>
          <span>Fix.</span> */}
        </ADBIG>
        <Content>
          <h1>Prae</h1>
          <Form onSubmit={handleSubmit}>
            <input 
            onBlur={handleBlur}
            value={values.login}
            onChange={handleChange}
             type="text"
              name="login" 
              placeholder="E-mail" />
              {touched.login && errors.login ? (
                <div>{errors.login}</div>
              ): null}
            <input
            onBlur={handleBlur}
            value={values.password}
             onChange={handleChange}
              type="password"
               placeholder="password"
                 name="password"/>
                 {touched.password && errors.password ? (
                <div>{errors.password}</div>
              ): null}
            <button type="submit" >Sign in</button>
          </Form>
          <div>{errors?.invalidlogin}</div>
          <h3>Dont have an account?</h3>
          <Link to="/signup">
          <h3 style={{
            color: "#0070F3",
            }} >Register here</h3>
          </Link>
         
        </Content>
       </Container>
    )
  }
  
  