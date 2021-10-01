import React from 'react';
import { FiArrowDown, FiUsers, FiHome, FiMonitor, FiTool, FiFileText, FiFolder, FiMenu, FiArrowLeft } from 'react-icons/fi';
import manProfile from '../../assets/temp_assets/man-profile.png';
import logosvg from '../../assets/temp_assets/logomin.svg';
import { useAuth } from '../../hooks/AuthContext';
import { useMediaQuery } from 'react-responsive';
import { Container, ImgLogo, Navbar, NavigationBarHeader, StyledNavLink, TitleMenu, Userdiv, MobileContainer, MenuHolder } from './styles';
import { useState } from 'react';
import { MdLibraryBooks, MdPhotoCamera } from 'react-icons/md';

export default function NavigationBar() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1170px)' });

  return (
    <>
      <Container isOpen={isOpen}>
        <Navbar>
          <FiArrowLeft
            size={32}
            onClick={() => {
              setIsOpen(isOpen => !isOpen);
            }}
          />
          <NavigationBarHeader>
            <ImgLogo>
              <img src={logosvg} alt="Prae - Preventivas" />
            </ImgLogo>
            <MenuHolder isOpen={isCollapsed}>
              <Userdiv>
                <img src={manProfile} alt="" />
                <div>
                  <h2>{user.name}</h2>
                  <h3>Técnico</h3>
                </div>
                <FiArrowDown onClick={() => setIsCollapsed(status => !status)} />
              </Userdiv>
              <span>
                <MdPhotoCamera /> Mudar foto de perfil
              </span>
            </MenuHolder>
          </NavigationBarHeader>
          <TitleMenu>Principal</TitleMenu>
          <StyledNavLink to="/dashboard">
            <FiHome />
            Dashboard
          </StyledNavLink>
          <StyledNavLink to="/equipaments">
            <FiMonitor />
            Equipamentos
          </StyledNavLink>
          <StyledNavLink to="/brands">
            <MdLibraryBooks />
            Marcas
          </StyledNavLink>
          <StyledNavLink to="/category">
            <FiFileText />
            Categorias
          </StyledNavLink>
          <StyledNavLink to="/job">
            <FiTool />
            Procedimentos
          </StyledNavLink>
          <StyledNavLink to="/supply">
            <FiFolder />
            Suprimentos
          </StyledNavLink>
          <TitleMenu>Outros</TitleMenu>
          <StyledNavLink to="/user">
            <FiUsers />
            Técnicos
          </StyledNavLink>
        </Navbar>
      </Container>
      {isTabletOrMobile && (
        <MobileContainer>
          <FiMenu
            size={32}
            onClick={() => {
              setIsOpen(isOpen => !isOpen);
            }}
          />
        </MobileContainer>
      )}
    </>
  );
}
