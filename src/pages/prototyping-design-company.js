import React from 'react';
import Banner from '../components/Services/DetailPage/Banner';
import Cards from '../components/Services/DetailPage/Cards';
import ComponentHead from '../components/Common/ComponentHead';
import Technology from '../components/Services/DetailPage/Technology';
import ProccessHead from '../components/Services/DetailPage/ProcessHead';
import Process from '../components/Services/DetailPage/Process';
import Work from '../components/Services/DetailPage/Work';
import Enquiry from '../components/Services/DetailPage/Enquiry';
import Clients from '../components/Home/Clients';
import Footer from '../components/Common/Footer';
import Navbar from '../components/Header/Navbars';

const Prototyping = () => {
  const processes = [
    {
      id: '1',
      name: 'Industry knowledge',
      desc: 'The best prototype development company in USA, Digital-Konnect, brings years of experience to the table to ensure that your vision is carried out precisely.',
    },
    {
      id: '2',
      name: 'Complete Solutions',
      desc: 'With our all-encompassing prototype development services in USA, we provide complete services that turn ideas into reality.',
    },
    {
      id: '3',
      name: 'A Range of Industries',
      desc: 'Our broad experience enables us to manage a variety of tasks with accuracy and proficiency, from electronics to consumer goods.',
    },
    {
      id: '4',
      name: 'Innovative Technology',
      desc: 'Our cutting-edge tools and processes, such as additive manufacturing, quickly and effectively generate high-quality prototypes.',
    },
    {
      id: '5',
      name: 'Collaborative Methodology',
      desc: ' Work together with us throughout the process to make sure your input influences the finished product and consistently meets or exceeds expectations.',
    },
    {
      id: '6',
      name: 'Prompt Delivery',
      desc: 'We value deadlines and stick to them by using a simplified method to produce products on time and for a reasonable price.',
    },
  ];
  const techs = [
    {
      id: '1',
      img: '/assets/images/service/svg/figma.svg',
      name: 'Figma',
      desc: ' Figma is browser-based, allowing teams to work together seamlessly, regardless of their operating systems. ',
    },
    {
      id: '2',
      img: '/assets/images/service/svg/sketch.svg',
      name: 'Sketch',
      desc: 'A popular vector-based design tool for creating user interfaces and wireframes. ',
    },
    {
      id: '3',
      img: '/assets/images/service/svg/photoshop.svg',
      name: 'Adobe Photoshop',
      desc: 'A versatile design tool used for image editing, graphic design, and UI design.  ',
    },
    {
      id: '4',
      img: '/assets/images/service/svg/adobe-xd.svg',
      name: ' Adobe XD',
      desc: 'A comprehensive design and prototyping tool that allows designers to create interactive prototypes, wireframes, and user interfaces. ',
    },
    {
      id: '5',
      img: '/assets/images/service/svg/illustrator.svg',
      name: ' Adobe Illustrator',
      desc: 'A vector-based design tool used for creating scalable and resolution-independent graphics. ',
    },
    {
      id: '6',
      img: '/assets/images/service/svg/invision.svg',
      name: 'InVision',
      desc: ' A prototyping and collaboration tool that allows designers to create interactive and animated prototypes.',
    },
    {
      id: '7',
      img: '/assets/images/service/svg/axure.png',
      name: 'Axure RP',
      desc: ' Axure RP is often used for complex interactions and user flows.',
    },
    {
      id: '8',
      img: '/assets/images/service/svg/marvel.png',
      name: 'Marvel',
      desc: ' A user-friendly prototyping tool that enables designers to create interactive prototypes with ease. ',
    },
    {
      id: '9',
      img: '/assets/images/service/svg/zepline.png',
      name: 'Zeplin',
      desc: '  Zeplin generates style guides, assets, and CSS code snippets to ensure smooth collaboration between designers and developers.',
    },
    {
      id: '10',
      img: '/assets/images/service/svg/principle.png',
      name: 'Principle',
      desc: ' Principle integrates well with Sketch and enables designers to add motion to their designs.',
    },
    {
      id: '11',
      img: '/assets/images/service/svg/procreate.png',
      name: 'Procreate',
      desc: 'A digital illustration app designed specifically for iPad.',
    },
    {
      id: '12',
      img: '/assets/images/service/svg/logobal.png',
      name: 'Balsamiq',
      desc: ' Balsamiq enables designers to quickly sketch out interface ideas and concepts.',
    },
  ];
  const cards = [
    {
      id: 1,
      para: 'Steps we follow for prototyping',
      bgcolor: 'bg-[#fff]',
      cols: 'md:col-span-2',
      textcolor: 'text-secondary',
      display: 'hidden',
      maintitle: 'Services',
      subtitle: 'Our Exemplary Prototype Development Services',
    },
    {
      id: 2,
      icon: '01',
      title: 'Requirements Gathering Process',
      para: 'The process of prototyping software begins with acquiring project requirements from clients or product users.',
      bgcolor: 'bg-[#F6F8F9]',
      cols: 'md:col-span-1',
      display: 'icon',
      textsize: 'text-xl',
      fontbold: 'font-bold',
      textcolor: 'text-secondary',
      main: 'hidden',
    },
    {
      id: 3,
      icon: '02',
      title: 'Swift Prototype Development',
      para: 'During the first stage of product development, a quick and simple design of the entire product is created, allowing for rapid prototype development.',
      bgcolor: 'bg-[#F6F8F9]',
      cols: 'md:col-span-1',
      display: 'icon',
      textsize: 'text-xl',
      fontbold: 'font-bold',
      textcolor: 'text-secondary',
      main: 'hidden',
    },
    {
      id: 4,
      icon: '03',
      title: 'Development Services for Prototyping',
      para: 'These services entail the creation of working models or replicas of products in order to test and validate their design and functionality prior to full-scale production.',
      bgcolor: 'bg-[#F6F8F9]',
      cols: 'md:col-span-1',
      display: 'icon',
      textsize: 'text-xl',
      fontbold: 'font-bold',
      textcolor: 'text-secondary',
      main: 'hidden',
    },
    {
      id: 5,
      icon: '04',
      title: 'Additive Manufacturing',
      para: 'Additive Manufacturing, also known as 3D printing, creates objects layer by layer from computer models. It allows for complicated designs and rapid prototyping.',
      bgcolor: 'bg-[#F6F8F9]',
      cols: 'md:col-span-1',
      display: 'icon',
      textsize: 'text-xl',
      fontbold: 'font-bold',
      textcolor: 'text-secondary',
      main: 'hidden',
    },
    {
      id: 6,
      icon: '05',
      title: 'Prototype Creation',
      para: 'A small-scale functioning model of the product will be rigorously created during this critical stage. A prototype is built using detailed information and specifications acquired from clients or consumers.',
      bgcolor: 'bg-[#F6F8F9]',
      cols: 'md:col-span-1',
      display: 'icon',
      textsize: 'text-xl',
      fontbold: 'font-bold',
      textcolor: 'text-secondary',
      main: 'hidden',
    },
    {
      id: 7,
      icon: '06',
      title: 'Mock-up prototypes',
      para: 'Mock-up prototypes are non-functional representations of items that are used for visual evaluation and testing the design aesthetics and ergonomics.',
      bgcolor: 'bg-[#F6F8F9]',
      cols: 'md:col-span-1',
      display: 'icon',
      textsize: 'text-xl',
      fontbold: 'font-bold',
      textcolor: 'text-secondary',
      main: 'hidden',
    },
  ];
  return (
    <div>
      
      <Navbar />
      <div
        className="bg-right "
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner
          bannertitle="Empowering Vision with USA’s leading Prototype Development Company
          "
          bannersubtext="Digital-Konnect is a renowned Prototype Development Company in USA. We specialize in creating working duplicates of products to ensure that they fit market standards and user specifications."
          serviceimg="/assets/images/service/svg/res.png"
          serviceimgAlt="prototyping design company"
          servicehead="Our Foolproof Prototype Development Services"
          servicedesc1="Our skilled team adheres to an efficient Prototype Development Process, which allows us to discover and rectify design flaws early in the development cycle. Our prototypes attract potential buyers by imitating the real product, giving them a personal sense of what's to come and creating trust in your concept."
          servicedesc2="Whether your project is small or large, our Prototype Development Solutions are designed to your exact requirements. We develop commercially feasible and profitable products that meet the needs of your clients. We adapt to the size and complexity of your project, from simple paper sketches to fully functional models."
          servicedesc3="We design and iterate prototypes quickly using our fast prototyping approach, allowing you to provide feedback throughout the development process."
        />
      </div>
      <Cards card={cards} />
      <div className="px-5 container-ack md:px-0">
        <ComponentHead
          title="Technology"
          sub="Tools we are using In UI/UX Designing & Strategy"
          head="The technology stack for Data Visualisation can vary depending on the specific requirements of the application and the chosen modernization approach."
        />
        <Technology tech={techs} />
      </div>

      <div>
        <div
          style={{
            backgroundImage:
              'url("/assets/images/service/servicebackground.png")',
          }}
        >
          <div className="px-5 container-ack md:px-0">
            <ProccessHead
              processhead="Why Choose Us"
              processsub="Why Choose Us"
              processdesc="Digital-Konnect takes great pleasure in being USA's go-to Prototype Development Agency. We provide innovative Prototype Development Services that are targeted to your specific needs, with an emphasis on creativity, competence, and customer-centricity."
              processimg="/assets/images/service/svg/res1.png"
              proocessalt="Prototype Design Agency"
            />
            <Process process={processes} />
          </div>
        </div>
        <div
          className="h-[7.5rem]"
          style={{
            backgroundImage: 'url("/assets/images/service/wave.png")',
          }}
        ></div>
      </div>

      <Work />
      {/* <Section /> */}
      <Enquiry />
      <Clients />
      <Footer />
    </div>
  );
};

export default Prototyping;
