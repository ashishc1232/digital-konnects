import React from 'react';
import Head from 'next/head';
import Footer from '../components/Common/Footer';
import Banner from '../components/Home/Banner';
// import Header from '../components/Common/Header';
import About from '../components/Home/About';
import Advisors from '../components/Home/Advisors';
import Memories from '../components/Home/Memories';
import Leaders from '../components/Home/Leaders';
import Videos from '../components/Home/Videos';

import Testimonial from '../components/Home/Testimonials';
import Clients from '../components/Home/Clients';
import Card from '../components/Home/Card';
import OurServices from '../components/Home/OurServices';
import Portfolio from '../components/Home/Portfolio';
import OurGroups from '../components/Home/OurGroups';
import BannerResponsive from '../components/Home/BannerResponsive';
import Navbars from "../components/Header/Navbars"
import HomepageTopSection from '../components/Home/HomepageTopSection';
import ExpertiseBanner from '../components/Home/ExpertiseBanner';
import Service from '../components/Home/Service';
import BannerSlide from '../components/Home/BannerSlider';
import Spotlight from '../components/Home/Spotlight';


const index = () => {
  return (
    <>
      <Head>
        <title>Digital-Konnect IT Solutions </title>
        <meta
          name="description"
          content="Digital-Konnect Innovations is an award-winning best Marketing agency in India. We offer's a experts team that will help you grow your business traditional to digital & Join us Today!"
        />
        <meta
          name="keywords"
          content="Best Markeitng Ageny in India
          Top Markeitng Agency in India
          Digital Marketing services in India
          Web development services in India
          Website Marketing Services in India
          Seo Marketing services in India
          Best seo Marketing Agency in India
          Social Media Marketing Agency in India
          Best pr Markitng Agency in India
          Marketing Agency in India"
        />
        <link rel="canonical" href="https://www.digitalkonnect.com/" />

        <meta
          property="og:title"
          content=" Award Winning Marketing Agency in India | Digital-Konnect"
        />
        <meta
          property="og:description"
          content="Digital-Konnect Innovations is an award-winning best Marketing agency in India. We offer's a experts team that will help you grow your business traditional to digital & Join us Today!"
        />
        <meta property="og:url" content="https://www.digitalkonnect.com/" />
        <meta
          property="og:image"
          content="https://www.digitalkonnect.com/assets/images/logoack.png"
        />
        <meta name="robots" content="index,follow" />

        <script type="application/ld+json">
          {`{ "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Digital-Konnect",
  "alternateName": "Advertising Agency",
  "url": "https://www.digitalkonnect.com/",
  "logo": "https://www.digitalkonnect.com/assets/images/logoack.png",
  "sameAs": [
    "https://m.facebook.com/people/digitalkonnect-Innovations-Pvt-Ltd/100076925016084/",
    "https://www.instagram.com/digitalkonnect",/",
    "https://in.linkedin.com/company/digitalkonnect","
  ]}`}
        </script>

        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "digitalkonnect",
  "image": "https://www.digitalkonnect.com/assets/images/banner/banner-one.png",
  "@id": "",
  "url": "https://www.digitalkonnect.com/",
  "telephone": "+91-9910190071",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot No. 136, 3rd Floor, Rider House, Sector 44",
    "addressLocality": "Gurgaon",
    "postalCode": "122003",
    "addressCountry": "IN"
  } ,
  "department": {
    "@type": "LocalBusiness",
    "name": "digitalkonnect",",
    "image": "https://www.digitalkonnect.com/assets/images/banner/banner-one.png",
    "telephone": "+91-9910190071"
  }}`}
        </script>
      </Head>
      <Navbars />

      <BannerSlide />
      <Spotlight />
      {/* <ExpertiseBanner />
      <Service /> */}
      {/* <Header /> */}
      {/* <OurGroups/> */}
      <Advisors />
      {/* <Memories /> */}
      <Card />
      <Portfolio />
      <Leaders />
      <Clients />

      <Testimonial />
      <Footer />
    </>
  );
};

export default index;
