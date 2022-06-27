import React, { useEffect } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const Layout = (props) => {
  useEffect(() => {
    const shrinkHeader = () => {
      document.documentElement.scrollTop = 0;
    };
    shrinkHeader();
  }, [props]);
  return (
    <div>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
