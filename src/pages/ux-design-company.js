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

const UiStrategy = () => {
  const processes = [
    {
      id: '1',
      name: 'Excellent UX Strategy Services',
      desc: 'As the leading UX design agency in USA, pick Digital-Konnect because we consistently provide top-notch UX strategy services that help businesses succeed. Every element of your digital experience will be in line with your company objectives thanks to our specialised UX design strategy, which is adapted to your particular needs.',
    },
    {
      id: '2',
      name: 'UX Strategy Experts',
      desc: "Offering the best UX strategy services in USA, we have a team of seasoned professionals who use precise methods and industry best practises to produce an easy user experience. Our UX business strategy places a strong emphasis on comprehending your target market's needs and pain spots. This helps us create engaging interactions that are logical and visually appealing.",
    },
    {
      id: '3',
      name: 'Elevating Experiences, Driving Conversions',
      desc: 'We take great pride in developing user-centric solutions that elevate your brand and improve customer happiness as a top UX Strategy Agency in USA. Our data-driven methodology, in conjunction with in-depth research, enables us to create a UX design strategy that encourages long-term engagement and increases conversions.',
    },
    {
      id: '4',
      name: 'Empowering Your Digital Experience',
      desc: 'At Digital-Konnect, we place a high value on teamwork, making sure that your vision guides all design choices. Wireframing, prototyping, and usability testing are all parts of our UX strategy services, which take a comprehensive approach to improving your digital experience.',
    },
    {
      id: '5',
      name: 'Improve Your User Experience Strategy',
      desc: "By choosing us for the top UX strategy services in USA, you can raise your company's performance and stand out from the crowd. Your brand will experience elevated consumer loyalty, greater conversions, and long-term success in the digital environment with the help of our UX Design Company in USA.",
    },
    {
      id: '6',
      name: 'Empowering Growth Through UX',
      desc: "Choosing our top-tier UX strategy services in USA boosts your company's performance and distinguishes it from competitors. With Digital-Konnect, the premier UX Design Company in USA, your brand will gain greater consumer loyalty, increased conversions, and long-term digital success. Count on us to work with you to develop a UX design strategy that will fuel your company's success.",
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
      para: 'Steps we follow to develop UX strategy',
      bgcolor: 'bg-[#fff]',
      cols: 'md:col-span-2',
      textcolor: 'text-secondary',
      display: 'hidden',
      maintitle: 'Services',
      subtitle: 'Our Unique UX Design Services',
    },
    {
      id: 2,
      icon: '01',
      title: 'UX Design Strategy',
      para: 'UX design concepts convey the essence of creativity, which includes innovation for every pixel and interaction. Our approach is based on understanding users in a relationship and exploring their desires and pain points.',
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
      title: 'Innovative Strategy',
      para: "At Digital-Konnect, we consult our avant-garde ideas, break the mould and breathe new life into the market. With a keen understanding of unmet needs, we've developed ways to help users exceed expectations.",
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
      title: 'Business Consulting',
      para: 'To bring the business to its maximum potential, we get to the heart of its business, uncovering ideas and challenges. Together with our customers, we create effective solutions that use digital resources to delight users while digitising their content',
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
      para: "From practical capabilities and strategic thinking to identifying the best solutions, we partner with your account management team to empower the user. By creating a target group, we investigate the user's behaviour, uncover their challenges.",
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
      title: 'Research',
      para: 'Our products deliver value and are designed with a passion for science to ensure that every business has growth potential, is growth-driven, and is budget-friendly. By focusing on research, we understand finance, business trends, and modern technology.',
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
      icon: '06',
      title: 'Branding',
      para: 'Your brand name comprises countless elements such as a catchy tone of communication, the catchy music of your website and the voice of your marketing strategy, social cohesion. We build partnerships with people in the middle to ensure every interaction is strong with your vision.',
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
          bannertitle="Intuitive Digital Art: Digital-Konnect - Your Trusted UX Design Company in USA"
          bannersubtext="We align UX strategy to your business strategy so it provides a seamless experience across multiple customer touchpoints."
          serviceimg="/assets/images/service/svg/stra.png"
          serviceimgAlt="UX strategy services"
          servicehead="Digital-Konnect Crafts UX Design Services"
          servicedesc1="UX design is an art form at Digital-Konnect, where every digital encounter is meticulously crafted to connect with users. Our passionate, hardworking team of UX experts crafts simple, aesthetically pleasing, and long-lasting experiences. We explore our audience's thoughts through in-depth UX research, charting user journeys and developing wireframes that serve as the basis for digital art. Meeting consumers' wants and preferences is our first priority when using a user-centred approach."
          servicedesc2="
          Extensive research, painstaking design, and stringent testing are all part of our approach to quality, which results in a finished product that is both beautiful to look at and enjoyable to use. We take pride in creating simple, comprehensible solutions to complicated problems We provide outstanding UX strategy services that equip organisations with powerful UX design solutions as a top UX design company in USA."
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
              processsub="Why choose us?"
              processdesc="Full-scope app modernization services you can start using quickly (even in weeks!) to fix, boost, and revamp your systems with teams that have worked for over 160 companies."
              processimg="/assets/images/service/svg/stra1.png"
              proocessalt="UX Design Strategy"
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

export default UiStrategy;
