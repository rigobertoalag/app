import React from "react";
import { CenteredContainer, SmallContainer } from "../theme";

const UserFormLayout = (props) => {
  return (
    <CenteredContainer>
      <SmallContainer>
          <Header>
              
          </Header>
          {props.children}
        </SmallContainer>
    </CenteredContainer>
  );
};

export default UserFormLayout;
