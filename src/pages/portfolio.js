import React from "react";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import PortfolioListing from "../components/Portfolio/PortfolioListing";
import Head from "next/head";
import Heading from "../components/Common/Heading";
import Navbar from "../components/Header/Navbars";
function portfolio() {
  return (
    <>
      <Head>
        <title> Portfolio | Digital-Konnect </title>
        <meta
          name="description"
          content="Dive into the dynamic portfolio of Digital-Konnect, which showcases innovative solutions and cutting-edge projects. A testament to their expertise and vision."/>
      </Head>
      <Navbar />
      <Heading
        titletext="Portfolio"
        title="Portfolio"
        subtext="Take a look at some of our work"
      />
    
      <PortfolioListing />
      <Footer />
    </>
  );
}
export default portfolio;
