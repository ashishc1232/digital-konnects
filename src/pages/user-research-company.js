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

const Research = () => {
  const processes = [
    {
      id: '1',
      name: 'CRO and Research experts',
      desc: 'Like experimenters and search pioneers, we use our expertise to glorify your CRO strategy. Thousands of hours and no new changes come together to unleash the power that inspires you to go beyond the stars.',
    },
    {
      id: '2',
      name: 'Roadmap Prioritization',
      desc: "We develop a uniquely creative approach to extending creative excellence that is closely aligned with your business goals and your customers' needs. Together, we have illuminated a wonderful path that will profoundly impact the world.",
    },
    {
      id: '3',
      name: 'Research and Data-Powered Results',
      desc: 'Be enchanted by Digital-Konnect; as brave research wizards, we create results from the invisible power of data and insight. With our data-driven capabilities, we create experiences that leave a lasting impression on your users and take you to unparalleled success.',
    },
    {
      id: '4',
      name: 'Vision Transformation',
      desc: 'Our enthusiastic team combines data-driven insights with creativity to create exciting user experiences that bring your vision to life.',
    },
    {
      id: '5',
      name: 'Experiential Learning',
      desc: 'Digital-Konnect, your dependable User Research and Recruitment firm, offers user comprehension and practical insights for exceptional experiences.',
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
      para: 'User research services we offer',
      bgcolor: 'bg-[#fff]',
      cols: 'md:col-span-2',
      textcolor: 'text-secondary',
      display: 'hidden',
      maintitle: 'Expertise',
      subtitle: 'We are your User Research Experts',
      para: 'At Digital-Konnect, we believe that user experience research is the key to defining innovation and driving success. Our particular approach to user research distinguishes us in the business. We go beyond simply gathering data and instead engage in an exciting journey to genuinely understand the essence of your audience.',
    },
    {
      id: 2,
      icon: '01',
      title: 'Innovation',
      para: 'At Digital-Konnect, we are at the forefront of innovation. Our UX research services in USA aim to push boundaries, challenge conventions, and redefine the world of possibilities. Our innovative research methods enable us to provide insights that support and improve your products and services.',
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
      title: 'User-Centric Expertise',
      para: 'Our dedicated research team embodies the user-centered spirit. By grasping their motivations, desires, and pain points, we gain insight into the minds of our target audience. Through insight, we deeply understand your users and enable you to fully meet their needs',
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
      title: 'Usability Testing',
      para: 'We bring creativity to the testing process, making it a fun and insightful experience. Our researchers carefully monitor how users navigate your interface, collecting feedback to improve your design.',
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
      title: 'Design Thinking',
      para: "Start the thinking process with our Design Thinking workshops. Together, we reveal the full potential of your team's creativity and foster an environment where ideas can flourish. We use collective intelligence to create solutions that have a lasting impact.",
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
      title: 'Promoting startups',
      para: 'Digital-Konnect supports startups through innovative research based on their needs. We understand the importance of profitability, and our creative approach helps startups build a solid foundation for success.',
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
      title: 'User Surveys',
      para: 'At Digital-Konnect, we do user research to make it interactive and exciting. Our creative ideas allow users to share their ideas, creating a rich source of information for you to discover.',
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
          bannertitle="Digital-Konnect: Innovating as the Leading User Research Company in USA"
          bannersubtext="Digital-Konnect is a prominent User Research Firm based in USA. Our voyage into human experience and innovation yields a comprehensive understanding map that affects the future by precisely unraveling user behaviors, preferences, and aspirations."
          serviceimg="/assets/images/service/svg/ur.png"
          serviceimgAlt="user research company"
          servicehead="Our User Research Agency is a Guide To Exellence"
          servicedesc1="At Digital-Konnect, we believe that user experience research is the key to defining innovation and driving success. Our particular approach to user research distinguishes us in the business. We go beyond simply gathering data and instead engage in an exciting journey to genuinely understand the essence of your audience."
          servicedesc2="Our dedicated staff goes deep into the hearts and brains of users to untangle their ideas and wonders, combining analytical skills with artistic genius. As a leading User Research Agency in USA, we offer comprehensive user experience research services tailored to your specific requirements."
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
              processhead="Steps"
              processsub="Why choose Digital-Konnect?"
              processdesc="Our team of creative and passionate professionals is dedicated to creating engaging user experiences. With a combination of data-driven insights and innovative approaches, we bring your vision to life and turn it into reality."
              processimg="/assets/images/service/svg/ur1.png"
              proocessalt="user experience research services"
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

export default Research;
