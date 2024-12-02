import Footer from "../components/Common/Footer";

import Locations from "../components/Contact/Locations";
import React from "react";
import Navbar from "../components/Header/Navbars";
import TestimonialSlider from "../components/Contact/TestimonialSlider";
import ContactBanner from "../components/Contact/ContactBanner";
import IconSlider from "../components/Contact/IconSlider";

const contact = () => {
  return (
    <>
      <Navbar />
      <ContactBanner/>
      <IconSlider />  
      <TestimonialSlider/>
      <Locations />
      <Footer />
    </>
  );
};

export default contact;
