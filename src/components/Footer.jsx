import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {Routes, Route} from 'react-router-dom'

const LoggedInFooter = () => (
  <FooterContainer>
    <Link to="/videos">Home</Link>
    <FabButton to="/videos/nuevo">+</FabButton>
    <Link to="/usuarios/miperfil">Perfil</Link>
  </FooterContainer>
);

const LoggedOutFooter = () => (
  <SimpleFooterContainer>
    <Routes>
      <Route path="/usuarios/registro" element={<p>¿Ya tienes cuenta? <Link to="/usuarios/login">Iniciar sesion</Link></p>}></Route>
      <Route path="/usuarios/login" element={<p>¿No tienes cuenta? <Link to="/usuarios/registro">Crear una cuenta</Link></p>}></Route>
    </Routes>
  </SimpleFooterContainer>
);

const Footer = () => {
  let user = useSelector((state) => state.user.user);
  return user ? <LoggedInFooter /> : <LoggedOutFooter />;
};

const SimpleFooterContainer = styled.footer`
background-color: ${({theme}) => theme.colors.gray};
padding: ${({theme}) => theme.dims.padding.largePadding};
text-align: center;
`

const FabButton = styled(Link)`
  border-radius: ${({ theme }) => theme.dims.borderRadius.normal};
  padding: ${({ theme }) => theme.dims.padding.largePadding};
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  font-size: 1.5em;
  align-items: center;
  border: 0;
  box-shadow: ${({ theme }) => theme.shadows.depth2};
  cursor: pointer;
  position: relative;
  top: -1em;
  font-size: 22px;
  text-decoration: none;
  z-index: 1;
  transform-style: preserve-3d;

  &::after,
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    top: 0px;
    border-radius: ${({ theme }) => theme.dims.borderRadius.normal};
    position: absolute;
    z-index: -1;
    background-color: pink;
    transform: translateZ(-1px);
  }
  &::before {
    left: -10px;
    background-color: ${({ theme }) => theme.colors.blue};
  }
  &::after {
    right: -10px;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: minmax(auto, 1fr) auto minmax(auto, 1fr);
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray};
  height: 3em;
  text-align: center;
  justify-content: space-around;
  align-items: center;
`;

export default Footer;
