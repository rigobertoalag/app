import React from "react";
import { LayoutContainer } from "../theme";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <LayoutContainer>
      <nav>
        <Header />
      </nav>
      <main>{props.children}</main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
