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

const Usability = () => {
  const processes = [
    {
      id: '1',
      name: 'Director of Usability Testing in USA',
      desc: 'Digital-Konnect is the leading usability testing firm in USA, delivering amazing user experiences via our significant expertise.',
    },
    {
      id: '2',
      name: 'Dedication to Excellence',
      desc: 'Our reputed usability testing company places a premium on understanding user wants and behaviours, guaranteeing that your software exceeds industry standards.',
    },
    {
      id: '3',
      name: 'Progressive Evaluation Methods',
      desc: "Our usability testing services carefully examine your product's usability using modern technology, combining real-world scenarios and user input.",
    },
    {
      id: '4',
      name: 'Customised User-Centered Solutions',
      desc: 'Digital-Konnect creates custom usability services in USA that increase user pleasure and loyalty through personalised, user-focused techniques.',
    },
    {
      id: '5',
      name: 'Empowering User Experiences',
      desc: 'When Digital-Konnect is your usability testing partner, you can expect efficient processes, insightful outcomes, and profound audience insights.',
    },
    {
      id: '6',
      name: 'Demonstrate Excellence, Engagement',
      desc: 'Select Digital-Konnect for user-friendly interfaces and interactions that boost engagement while improving overall performance and differentiating your brand.',
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
      para: 'Digital-Konnect has a remarkable network of usability specialists who are skilled in deciphering the mysteries of interactive design through heuristic evaluations and smart A/B testing, all supported by thorough data analytics. Our usability testing services go above and beyond the norm by evaluating software usability circumstances with genuine users and simulated drug users.',
      bgcolor: 'bg-[#fff]',
      cols: 'md:col-span-2',
      textcolor: 'text-secondary',
      display: 'hidden',
      maintitle: 'SERVICES',
      subtitle: 'Our Remarkable Usability Testing Services',
    },
    {
      id: 2,
      icon: '01',
      title: 'Remote usability testing',
      para: 'We provide remote testing with the best online software tools and equipment. Dive into the best software usability testing experience across multiple geographies and cultures.',
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
      title: 'Website Usability testing (A/B testing)',
      para: "Delight in effortless services and embrace enchanting websites that cast a mesmerising spell on users. With Digital-Konnect's website usability testing, they weave captivating digital wonders.",
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
      title: 'Mobile App Usability Testing',
      para: 'Digital-Konnect combines user interaction, captivating design, enjoyable usability, and user-friendliness, empowering it with unbeatable security and flawless functionality.',
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
      title: 'Expert Review',
      para: 'Our usability testers work magic when testing software applications, analysing every aspect. Get a wealth of helpful services, quick product reviews, and quality reviews to support your digital creations to their full potential.',
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
      title: 'Automatic Expert Review',
      para: 'Our expert review process delivers fast and efficient results to our customers worldwide. Our magic lies in creating consistent and accurate websites and applications using software programs rooted in user experience design and intuitive models.',
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
      title: 'Hallway Testing',
      para: 'Digital-Konnect can greatly assist the expansion and success of your company with our thorough usability testing services. We provide specialised solutions that guarantee your software and websites are user-friendly, intuitive, and effective as a top usability testing company in USA. ',
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
          bannertitle="Digital-Konnect: Distinctive Usability Testing Company"
          bannersubtext="Usability testing's alluring power is harnessed by Digital-Konnect, a renowned usability testing company in USA, to create captivating digital experiences. In order to develop custom performance tests, our talented team approaches design with empathic curiosity and a great grasp of consumers' wants and concerns."
          serviceimg="/assets/images/service/svg/usa.png"
          serviceimgAlt="Usability Testing Services"
          servicehead="Elevating Digital Experiences: Expert Usability Testing Services"
          servicedesc1="We optimise the usability testing procedure using A/B testing, carefully examining each component to guarantee flawless digital experiences. Through the integration of user input, data analytics, and creativity, our usability test boiler creates engaging and individualised experiences across platforms. Users have pleasant and enticing experiences whether they are navigating the magical world of websites or setting out on the otherworldly trip of mobile applications."
          servicedesc2="We hold the key to understanding individual preferences and creating enduring bonds between consumers and companies through carefully developed, personalised experiences. We create enchantment in every digital interaction with the help of our usability testing services in USA, leaving an enduring imprint of understanding and contentment."
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
              processhead="Why ChooseUS"
              processsub="Why Choose Us"
              processdesc="Digital-Konnect distinguishes out as the go-to company in USA for usability testing. We are committed to giving your users outstanding experiences thanks to our broad expertise and commitment to offering top-notch usability testing services."
              processimg="/assets/images/service/svg/usa1.png"
              proocessalt="usability testing company"
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

export default Usability;
