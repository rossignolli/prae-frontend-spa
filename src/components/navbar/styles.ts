import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import {appearFromLeft} from '../../pages/SignIn/styles'


export const Container = styled.div`
display: flex;
height: 100vh;
justify-items: center;

`;


export const Navbar = styled.div`
display: flex;
flex-direction: column;
min-width: 320px;
background-color: #FFFFFF;


a {
    text-decoration: none;
    text-decoration-style: none;
    color: #717478;
}



`;


export const NavigationBarHeader = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;




export const ImgLogo = styled.div`
display: flex;
justify-content: center;

img {
        width: 132px;
        margin-top: 40px;
    }

`;


export const Userdiv = styled.div`

display: flex;
align-items: center;
justify-content: center;
margin-top: 70px;
margin-bottom: 60px;
width:  270px;
height: 73px;
border-radius: 15px;
border: 1px solid #F5F5F5;
padding: 10px;





img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
    }


h2 {
    color: black;
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
    line-height: 19px;
    margin-left: 10px;
}

h3 {
    color: #707479;
    font-size: 14px;
    margin-top: 6px;
    margin-left: 14px;
}

div {
    display: flex;
    flex-direction: column;
    flex: 1;
}




svg {
        margin-left: 10px;
    }






`;


export const TitleMenu = styled.h3`
        color: black;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        margin-left: 35px;
        

        h3 > h3 {
            margin-top: 35px;
        }


`;



const activeClassName = 'active';
export const StyledNavLink = styled(NavLink).attrs({
  activeClassName: activeClassName,
})`


    padding: 10px;
    height: 45px;
    border-left: 5px solid #FFF;
   




    svg {
        margin-left: 20px;
        margin-right: 10px;   
    }



  &.${activeClassName} {
    color: #7367F0;
    border-left: 5px solid #7367F0;
  }
`




export const Content = styled.div`
display: flex;
width: 100%;
background-color: #E5E5E5;




`;



