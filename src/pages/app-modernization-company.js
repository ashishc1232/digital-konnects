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

const AppModernizationDetails = () => {
  const processes = [
    {
      id: '1',
      name: 'Unrivalled Knowledge',
      desc: "Digital-Konnect excels as USA's leading application modernization firm, revitalising obsolete systems with current languages, frameworks, and databases.",
    },
    {
      id: '2',
      name: 'Revival of a Legacy',
      desc: 'We specialise in old programmes and use current technologies to adapt obsolete languages and platforms, improving performance and usefulness.',
    },
    {
      id: '3',
      name: 'Thorough Process',
      desc: 'Our complete modernization approach assures smooth migrations from legacy systems to cutting-edge technology, with agility, scalability, and security as top priorities.',
    },
    {
      id: '4',
      name: 'Customised Solutions',
      desc: "We tailor solutions to your application's specific needs, maximising its potential for growth, agility, scalability, and security.",
    },
    {
      id: '5',
      name: 'End-to-End Service',
      desc: 'Digital-Konnect, as your go-to modernization agency, provides end-to-end assistance, from strategy to implementation and ongoing maintenance, assuring successful conversions.',
    },
    {
      id: '6',
      name: 'Repeated Success',
      desc: "Digital-Konnect's creative solutions have received praise, making us a top choice among USA application modernization suppliers.",
    },
  ];
  const techs = [
    {
      id: '1',
      img: '/assets/images/service/svg/react.svg',
      name: 'React.js',
    },
    {
      id: '2',
      img: '/assets/images/service/svg/flutter.svg',
      name: 'Angular',
    },
    {
      id: '3',
      img: '/assets/images/service/svg/next.png',
      name: 'Next.js',
    },
    {
      id: '4',
      img: '/assets/images/service/svg/nodejs.svg',
      name: 'Node.js',
    },
    {
      id: '5',
      img: '/assets/images/service/svg/express.png',
      name: 'Express',
    },
    {
      id: '6',
      img: '/assets/images/service/svg/html.png',
      name: 'HTML',
    },
    {
      id: '7',
      img: '/assets/images/service/svg/bootstrap.png',
      name: 'Bootstrap',
    },
    {
      id: '8',
      img: '/assets/images/service/svg/php.png',
      name: 'php',
    },
    {
      id: '9',
      img: '/assets/images/service/svg/laravel.png',
      name: 'Laravel',
    },
    {
      id: '10',
      img: '/assets/images/service/svg/codeigniter.png',
      name: 'Codeigniter',
    },
    {
      id: '11',
      img: '/assets/images/service/svg/net.png',
      name: 'Asp.net',
    },
    {
      id: '12',
      img: '/assets/images/service/svg/phython.png',
      name: 'phython',
    },
    {
      id: '13',
      img: '/assets/images/service/svg/java.svg',
      name: 'JAVA',
    },
    {
      id: '14',
      img: '/assets/images/service/svg/andriod.png',
      name: 'Android',
    },
    {
      id: '15',
      img: '/assets/images/service/svg/flutter.svg',
      name: 'Flutter',
    },
    {
      id: '16',
      img: '/assets/images/service/svg/ios.svg',
      name: 'iOS',
    },
    {
      id: '17',
      img: '/assets/images/service/svg/react.svg',
      name: 'ReactNative',
    },
    {
      id: '18',
      img: '/assets/images/service/svg/sql.png',
      name: 'MySQL',
    },
    {
      id: '19',
      img: '/assets/images/service/svg/mongodb.png',
      name: 'MonogoDb',
    },
    {
      id: '20',
      img: '/assets/images/service/svg/postgresql.svg',
      name: 'PostgreSQL',
    },
    {
      id: '21',
      img: '/assets/images/service/svg/amazon-web-services.svg',
      name: 'AWS',
    },
    {
      id: '22',
      img: '/assets/images/service/svg/wordpress.png',
      name: 'Wordpress',
    },
    {
      id: '23',
      img: '/assets/images/service/svg/shopify.svg',
      name: 'Shopify',
    },
    {
      id: '24',
      img: '/assets/images/service/svg/joomla.svg',
      name: 'Joomla',
    },
    {
      id: '25',
      img: '/assets/images/service/svg/magento.svg',
      name: 'Magento',
    },
    {
      id: '26',
      img: '/assets/images/service/svg/webflow.svg',
      name: 'Webflow',
    },
    {
      id: '27',
      img: '/assets/images/service/svg/firebase.svg',
      name: 'Firebase',
    },
    {
      id: '28',
      img: '/assets/images/service/svg/jquery.svg',
      name: 'JQuery',
    },
  ];
  const cards = [
    {
      id: 1,
      para: "Our modernization solutions revolutionize your applications' performance, scalability, agility, & maintainability. We enable seamless integration with emerging technologies, optimize infrastructure, & streamline workflows to ensure your applications are future-proof.",
      bgcolor: 'bg-[#fff]',
      cols: 'md:col-span-2',
      textcolor: 'text-secondary',
      display: 'hidden',
      maintitle: 'SERVICES',
      subtitle: 'Our foolproof Application Modernisation Services',
    },
    {
      id: 2,
      icon: '01',
      title: 'Expert Consultancy',
      para: 'As a reputable Application Modernisation Company in USA, our expert team does a thorough examination of your application code and infrastructure. We provide extensive recommendations to help you get the most out of your prior investments by mining requirements and identifying areas for improvement.',
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
      title: 'Capturing Cloud Competence',
      para: 'Digital-Konnect, a leading Application Modernisation Company in USA, offers customised cloud migration solutions. Depending on your application and business needs, we provide the following cloud migration options: application re-hosting, application replatforming, and application rearchitecting.',
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
      title: 'Reforming Application Modernisation',
      para: 'We provide containerisation solutions as a top application modernization company to streamline your apps and improve their performance. Your applications become segregated through containerisation, which reduces resource consumption, makes measurements simpler, allows for smooth transition between environments, and supports CI/CD practises.',
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
      title: 'Application Redesigning',
      para: "Our professional team can rapidly recover and modify code and design for your long-running enterprise systems as a leading Application Modernisation Company. Digital-Konnect provides comprehensive services to upgrade your applications, ensuring they remain relevant in today's digital landscape.",
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
      title: 'Application Automation',
      para: 'We specialise in revitalising the app systems built on obsolete languages and platforms such as PowerBuilder, Delphi, VB, C++, COBOL, and ageing technologies such as Java and.NET versions as a leading Application Modernisation Company in USA.',
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
      title: 'Rehosting',
      para: 'Digital-Konnect delivers rehosting services, in which we move your existing on-premises apps to the cloud without modifying them. This approach guarantees that business objectives, such as quicker product launches or the shift away from on-premises data centres, are met.',
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
          bannertitle="Digital-Konnect - Transform Your Business with our Application Modernisation Solutions"
          bannersubtext="Digital-Konnect, the top Application Modernisation Company in USA, will help you realise the full potential of your old applications. Our effective and successful services ensure that your software is upgraded for modern computing approaches, taking advantage of newer languages, frameworks, and infrastructure platforms."
          serviceimg="/assets/images/service/svg/app.png"
          serviceimgAlt="App Modernization Services"
          servicehead="Digital-Konnect's excellent Application Modernisation Services may breathe new life into legacy applications"
          servicedesc1="Digital-Konnect's Application Modernisation Agency will help you secure your investments while also embracing technological developments. Our strong modernisation strategy decreases resource requirements while increasing deployment frequency and dependability, as well as increasing uptime and resiliency. Improve efficiency and safety by seamlessly integrating modern infrastructure, tools, and languages into your software portfolio."
          servicedesc2="Our Application Modernisation Services are designed for businesses looking for an efficient digital transformation plan. We recognise the importance of your current application portfolio and provide solutions that improve your application's platform infrastructure and internal architecture. Take advantage of faster feature delivery and expose current functionality via APIs for smooth integration with other services."
        />
      </div>
      <Cards card={cards} />
      <div className="px-5 container-ack md:px-0">
        <ComponentHead
          title="Technology"
          sub="App Modernization"
          head="The technology stack for app modernization can vary depending on the specific requirements of the application and the chosen modernization approach."
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
              processdesc="From early analysis and planning to smooth implementation and continuous maintenance, we offer end-to-end support. Numerous happy clients who have benefited from our innovative solutions attest to our track record as one of the Best Application Modernization providers."
              processimg="/assets/images/service/svg/app1.png"
              proocessalt="Legacy Application Modernization Services"
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

export default AppModernizationDetails;
