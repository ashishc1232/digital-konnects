import Banner from "../components/About/Banner";
import Card from "../components/About/Card";
import SectionTwo from "../components/About/SectionTwo";
import ValuesMissions from "../components/About/ValuesMissions";
import Footer from "../components/Common/Footer";
import Navbar from "../components/Header/Navbars";
import Clients from "../components/Home/Clients";
import Head from "next/head";
import React from "react";

const About = () => {
  return (
    <div className="">
      <Head>
        <title>
          About Us | Digital-Konnect Service & Consulting Pvt Ltd Innovations</title>
        <meta name="description" content="We are all about changing lives and solving problems.
Digital-Konnect is known for its innovative approach, teamwork, and commitment to excellence. " />
      </Head>
      {/* <Header /> */}
      <Navbar />
      <Banner />
      <ValuesMissions />
      
      {/* <Section /> */}

      <Card />

      {/* <VideoSection /> */}

      <SectionTwo />
      <Clients />
      <Footer />
    </div>
  );
};

export default About;
