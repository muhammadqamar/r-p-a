import React from "react";
import Header from "./header";
import Footer from "./footer";

const Index = ({ props, children }) => {
  return (
    <div>
      <Header />
      <div {...props}>{children}</div>
      <Footer />
    </div>
  );
};

export default Index;
