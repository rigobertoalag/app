import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <Link to="/videos">Home</Link>
      <FabButton to="/videos/nuevo">+</FabButton>
      <Link to="/user/profile">Perfil</Link>
    </FooterContainer>
  );
};

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

  &::after, &::before{
      content: '';
      width: 100%;
      height: 100%;
      top: 0px;
      border-radius: ${({ theme }) => theme.dims.borderRadius.normal};
      position: absolute;
      z-index: -1;
      background-color: pink;
      transform: translateZ(-1px);
  }
  &::before{
      left: -10px;
      background-color: ${({theme}) => theme.colors.blue};
  }
  &::after{
      right: -10px;
      background-color: ${({theme}) => theme.colors.accent};
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
