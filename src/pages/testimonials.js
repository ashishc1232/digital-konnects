import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header';
import Navbar from '../components/Header/Navbars';
import List from '../components/Testimonial/List';
import Head from 'next/head';
import React from 'react';

const Testimonials = () => {
  return (
    <div>
      <Navbar />
      <List />
      <Footer />
    </div>
  );
};

export default Testimonials;
