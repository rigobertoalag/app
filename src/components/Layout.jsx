import React from "react";
import { Route, Routes } from "react-router";
import { LayoutContainer } from "../theme";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <LayoutContainer>
      <nav>
        <Routes>
          <Route path="/videos" element={<nav></nav>} />
          <Route path="/usuarios/login" element={<nav></nav>} />
          <Route path="/usuarios/registro" element={<nav></nav>} />
          <Route path="*" element={<Header />} />
        </Routes>
      </nav>
      <main>{props.children}</main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
