import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import Banner from "../components/Moments/Banner";
import Gallery from "../components/Moments/Gallery";
import React from "react";
import Head from "next/head";
import Navbar from "../components/Header/Navbars";
const moments = () => {
  return (
    <>

      
      <Navbar />
      <Banner />
      <Gallery />
      <Footer />
    </>
  );
};

export default moments;
