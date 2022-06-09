import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
const Layout = (props) => {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
