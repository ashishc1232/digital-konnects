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

const Visualisation = () => {
  const processes = [
    {
      id: '1',
      name: 'Upgrade Business',
      desc: 'Expert Data Visualisation Services in USA Transforming Businesses.',
    },
    {
      id: '2',
      name: 'Visual Clarity',
      desc: 'For Powerful Storytelling and Action, Our Team Creates Compelling Data Representations.',
    },
    {
      id: '3',
      name: 'Interactive Excellence',
      desc: 'Digital-Konnect, your USA-based dynamic data visualisation company, provides proactive tools and technology for interactive excellence.',
    },
    {
      id: '4',
      name: 'Solutions That Fit',
      desc: 'We Comprehend Your Goals and Tailor Our Services to Meet Your Data Needs.',
    },
    {
      id: '5',
      name: 'Upscaled Decision-Making',
      desc: 'Digital-Konnect offers cutting-edge visualisations that improve analysis and performance, empowering decision-making.',
    },
    {
      id: '6',
      name: 'Discover Insights',
      desc: 'Join forces with us for data-driven development, sure decisions, and efficient communication.',
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
      para: 'Data Visualisation Services We Offer',
      bgcolor: 'bg-[#fff]',
      cols: 'md:col-span-2',
      textcolor: 'text-secondary',
      display: 'hidden',
      maintitle: 'Expertise',
      subtitle: 'OUR EXPERTISE',
    },
    {
      id: 2,
      icon: '01',
      title: 'Tracking organizational Efficiency ',
      para: 'Digital-Konnect assists its clients in putting their company’s important data and details together in an efficient manner by converting data from diverse sources into immersive visuals. ',
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
      title: 'The Accounting Records ',
      para: "To improve financial forecasts and budget planning, financials track a company's income, costs, and profitability. To assure stability and growth, it requires recognizing and controlling financial risks while constantly monitoring financial data.",
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
      title: 'Manufacturing:',
      para: 'Improving manufacturing process quality and overall equipment effectiveness by carefully observing equipment performance accelerates the development of new products and improves their quality through the detection and correction of manufacturing process flaws.',
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
      title: 'Supply Chain:',
      para: "Boost supply chain effectiveness by using Digital-Konnect's knowledgeable services. To increase the precision of demand planning and simplify order administration, our team pinpoints demand factors. We track procurement data, analyse spend, and look for options for rationalisation.",
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
      title: 'Selling and Promoting:',
      para: 'Optimise campaign planning and budgeting using predictive prospect response research to improve marketing and sales. Use consumer segmentation to create individualised marketing plans and cross-selling initiatives. Utilise client sentiment research to raise the calibre of your goods and services.',
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
      title: 'HR activities:',
      para: 'Monitoring employee activity assists in discovering performance gaps and enhancing employee performance. Data from talent management can be visualised to help with recruitment decisions and to spot top performers and open positions. An analysis of retention practices reveals factors that influence employee satisfaction and lower turnover.',
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
          bannertitle="Digital-Konnect: Most trusted Data Visualization Company in USA"
          bannersubtext="Digital-Konnect, your reliable Data visualization Company in USA, can help you discover the power of your data! Understanding and making sense of data are essential for businesses to succeed in today's data-driven environment. At Digital-Konnect, we offer excellent Data visualisation Services in USA that make it simple for our clients to obtain, examine, and comprehend complex data."
          serviceimg="/assets/images/service/svg/vis.png"
          serviceimgAlt="data visualisation company"
          servicehead="Determine the Vastness of Data with Digital-Konnect's Data Visualisation Calibre"
          servicedesc1="We serve a variety of industries, including government, finance, marketing, education, sports, and more as the go-to Data Visualisation Company in USA. For professionals looking to develop their data-driven decision-making skills and become experts at using data to make captivating visual tales, our services are crucial."
          servicedesc2="Making sense of information is essential for organizations to succeed in today's data-driven environment. Digital-Konnect is an expert in offering top-notch Data visualization Services in USA that enable our customers to easily comprehend, examine, and exchange data. As a leading Data visualization Company in USA, we provide cutting-edge solutions that make your data come to life so you can make wise decisions and discover insightful information."
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
              processhead="Approach"
              processsub="OUR APPROACH"
              processdesc="Steps we follow for
              data visualisation"
              processimg="/assets/images/service/svg/vis1.png"
              proocessalt="data visualisation agency"
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

export default Visualisation;
