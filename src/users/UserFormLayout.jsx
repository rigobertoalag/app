import React from "react";
import styled from "styled-components";
import { CenteredContainer, SmallContainer, Title } from "../theme";

const UserFormLayout = (props) => {
  return (
    <CenteredContainer>
      <SmallContainer>
        <Header>
          <img src="/logo.svg" alt="Logo de la aplicacion" height="120" />
          <div>
            <Title>TikTak</Title>
          </div>
        </Header>
        {props.children}
      </SmallContainer>
    </CenteredContainer>
  );
};

const Header = styled.header`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.dims.margin.normal};
`;

export default UserFormLayout;
