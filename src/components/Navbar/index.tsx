import React from 'react';
import { FiArrowDown, FiUsers, FiHome, FiMonitor, FiTool, FiFileText, FiFolder, FiMenu, FiArrowLeft } from 'react-icons/fi';
import manProfile from '../../assets/temp_assets/man-profile.png';
import logosvg from '../../assets/temp_assets/logomin.svg';
import { useAuth } from '../../hooks/AuthContext';
import { useMediaQuery } from 'react-responsive';
import { Container, ImgLogo, Navbar, NavigationBarHeader, StyledNavLink, TitleMenu, Userdiv, MobileContainer, MenuHolder } from './styles';
import { useState } from 'react';
import { MdExitToApp, MdLibraryBooks, MdModeEdit, MdPhotoCamera } from 'react-icons/md';
import ProfileModal from '../Modals/ProfileModal';

export default function NavigationBar() {
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [modalTitle, setModalTitle] = useState('Sucesso');
  const [modalDescription, setModalDescription] = useState('Categoria adicionada com sucesso.');
  const [butonsOption, setButtonsOption] = useState(false);

  const [isConfirmationMonitorModalOpen, setIsConfirmationMonitorModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'warning' | 'error' | 'sucess' | 'info' | undefined>('sucess');

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1170px)' });

  function handleCloseConfirmationModal() {
    setIsConfirmationMonitorModalOpen(false);
  }

  function handleConfirmation() {
    setIsConfirmationMonitorModalOpen(false);
  }

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
                <img src={user.avatar ? user.avatar : manProfile} alt="" />
                <div>
                  <h2>{user.name}</h2>
                  <h3>Técnico</h3>
                </div>
                <FiArrowDown onClick={() => setIsCollapsed(status => !status)} />
              </Userdiv>
              <span onClick={() => setIsConfirmationMonitorModalOpen(true)}>
                <MdModeEdit /> Editar perfil
              </span>
              <span onClick={() => signOut()}>
                <MdExitToApp /> Sair
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
        <ProfileModal
          title={modalTitle}
          description={modalDescription}
          type={modalType}
          isOpen={isConfirmationMonitorModalOpen}
          onRequestConfirmation={handleConfirmation}
          onRequestCancel={() => handleCloseConfirmationModal()}
          buttons={butonsOption}
        />
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
