import React from 'react';
import Head from 'next/head';
import Header from '../components/Common/Header';
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

const UiDesign = () => {
  const processes = [
    {
      id: '1',
      name: 'Research',
      desc: 'By combining data-driven research and creative magic, we unravel the mystery of user behaviour. Our intellectual team delves deep into human interaction to create engaging user interfaces.',
    },
    {
      id: '2',
      name: 'Wireframing',
      desc: 'We lay the foundation for your digital masterpiece and unleash creativity with every hit, ideas come to life, and your vision expands.',
    },
    {
      id: '3',
      name: 'Execution',
      desc: 'We fascinate designs by blending the vision of our people with artistic talent, sketching, refining, and sculpting. Data-driven insights support our creative excellence by making every interaction a catalyst for customer satisfaction.',
    },
    {
      id: '4',
      name: 'Testing',
      desc: 'Our team transforms into brave adventurers and embarks on sea voyages to make your UI win hearts. User experience and feedback become our cues, our marks of success.',
    },
    {
      id: '5',
      name: 'Launch',
      desc: 'At Digital-Konnect, we push your brand to the limits of creativity and innovation. Our exciting process begins with a storm of ideas fueled by the strength of our strong team.',
    },
    {
      id: '6',
      name: 'Vibrancy',
      desc: "Passion, creativity, and creative firework define Digital-Konnect's USA UI design journey. Live studio brand magic, eye-catching interfaces, and user craving.",
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
      para: 'Our Design vision has created captivating experiences that keep users connected, and we combine creative excellence with data-driven insights to ensure every pixel tells the right story.',
      bgcolor: 'bg-[#fff]',
      cols: 'md:col-span-2',
      textcolor: 'text-secondary',
      display: 'hidden',
      maintitle: 'SERVICE',
      subtitle: 'UI Design Service',
    },
    {
      id: 2,
      icon: '01',
      title: 'Website design',
      para: 'A beautiful customer can attract visitors to stay on your website longer, delight their eyes and improve their experience.',
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
      title: 'Mobile app design',
      para: "Stunning and user-friendly mobile user interface that guarantees your app will rank high on users' home screens.",
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
      title: 'Web and Mobile design',
      para: 'Digital-Konnect creates a unified user experience, deploys web apps for desktop and mobile, or compares UI for mobile and web apps.',
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
      title: 'Saas design',
      para: 'Our expertly crafted SaaS user interface is designed to appeal to the target audience of your software product and provides a unique customer experience.',
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
      title: 'Creative Direction',
      para: 'We adopt an agile, collaborative approach to creating unique digital experiences that are consistent with brand needs.',
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
      title: 'Usability Testing',
      para: 'Through intelligent analysis, continuously delight customers by generating more accurate digital experiences that unify purpose, improve quality, and drive development.',
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
          bannertitle="UI Designing company in USA"
          bannersubtext="Digital-Konnect - UI designing company in USA, Our passion for design is to create a music of visual delight. We are experts in pixels, masters of beauty, and architects of unforgettable customer experiences. Our creative spirit knows no bounds, and we do each project with a unique touch of magic."
          serviceimg="/assets/images/service/svg/desi.png"
          serviceimgAlt="UI Designing company"
          servicehead="Our UI Design Services Provide Visual Symphony"
          servicedesc1="At Digital-Konnect, every project is a testament to our commitment to creating UI experiences that represent the moment. We are more than a UI design company; We are dream weavers creating digital experiences that captivate users."
          servicedesc2="UI design in Digital-Konnect is about pixels on the screen, and our team creates eye-catching visuals that resonate with your target audience as well; as we discover the essence of your brand, understand its spirit, and connect it to all our designs. Our experience as a UI Design Company in USA embodies Excellence and innovation. We bring your brand to life and create unforgettable experiences."
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
              processhead="PROCESS"
              processsub="UI Design Process"
              processdesc="Digital-Konnect's journey as a UI design agency in USA was filled with passion, creativity, and innovation. We are innovative designers who create visual impressions, bring your brand to life in our live studio, and let inspiration ignite like a firework. We create interfaces that make your users want more with bright colours and smart characters."
              processimg="/assets/images/service/svg/desi1.png"
              proocessalt="ui design service"
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

export default UiDesign;
