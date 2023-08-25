import React from "react";
import MainNavigation from "./MainNavigation";
import Footer from "@/components/Layout/Footer";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
