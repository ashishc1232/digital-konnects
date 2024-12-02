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

const ProductDdesignCompany = () => {
  const processes = [
    {
      id: '1',
      name: 'UI/UX',
      desc: 'Dive into the endless possibilities of Digital-Konnect UI and UX expertise! See amazing user flows, wireframes, and designs to bring your dreams to life. Our team conquers cutting-edge mobile and web app design technologies to create experiences that amaze audiences. Work proficiently with developers or export easily to your in-house team - the choice is yours! Your vision, our image - together, we will create miracles!      ',
    },
    {
      id: '2',
      name: 'WEB',
      desc: "Open the doors to endless possibilities with our many dynamic services! We have everything from design reviews to advanced UI/UX masterpieces to mind-blowing prototyping and seamless development! Whether you dream of building a new website from scratch or need a modern update, our full range of services ensures your digital presence is integrated and innovative. Let's redesign your website to impress your competitors!",
    },
    {
      id: '3',
      name: 'MOBILE APPS',
      desc: 'Let your apps shine with unique designs in a sea of ​​2 million apps daily! iOS, Android, Web, or cross-platform, we help you. We will turn your ideas into masterpieces by creating lightning-fast, user-friendly, and exciting mobile applications that delight your target customers. Enjoy using our ideas to create something extraordinary!',
    },
    {
      id: '4',
      name: 'BRANDING',
      desc: 'Reveal the secrets of top customers with Digital-Konnect! Build trust and recognition with compelling images, text, and products that speak directly to your audience. From legendary global titans to the biggest business giants, we will create a magnetic link to keep them coming back! Experience the magic of effective communication and watch your brand rise to unprecedented heights.',
    },
    {
      id: '5',
      name: 'ICON/ ILLUSTRATION',
      desc: "These little things can convey your message quickly and intelligently so you can say more with less. Turn your own eyes into captivating creative music that words alone can't do. Get ready to prove the impact of this powerful design, impress your audience, and take your brand to new heights!",
    },
    {
      id: '6',
      name: 'TEAM EXTENSION',
      desc: 'Speed ​​up your product development process with the Digital-Konnect support team! Our product developers can integrate with your existing team, making it creative and experienced. Get ready to improve your digital product development and see innovation reach new heights! Increase your success with a successful partnership with Digital-Konnect.',
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
      maintitle: 'Revitalize',
      subtitle: 'Revolutionize Your Applications With Modernization Solutions',
    },
    {
      id: 2,
      icon: '01',
      title: 'Improved Productivity',
      para: 'We aim to enhance productivity by addressing the limitations, inefficiencies, & outdated aspects of existing applications.',
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
      title: 'Cost Optimization',
      para: 'The strategic efforts to reduce expenses associated with application development, maintenance, & operations while maximizing value & efficiency.',
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
      title: 'Better Security',
      para: 'Fewer vulnerabilities generated by old and disorderly legacy code (threat identified by OWASP).',
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
      title: 'Improved CX',
      para: 'Enhanced performance and easier 3rd party integrations lead to improved customer experience (CX).',
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
      title: 'Better Business Performance',
      para: 'Higher sales through improved CX (IBM reports that app modernization leads to a 14% revenue increase).',
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
      title: 'New Growth Possibilities',
      para: 'New business possibilities for a modernized app, including AI, machine learning, big data, and the public cloud.',
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
          bannertitle="Manifest Creative Digital Product Design and Development with Digital-Konnect          "
          bannersubtext="
          Digital-Konnect is USA's top Digital Product Design Company which assists your business to access endless creativity. Take advantage of Digital-Konnect's Digital Product Design Services in USA to set out on an exciting voyage of creation. As we create magnificent interfaces and amazing experiences that will astound your audience, let your boldest and most transformative ideas come to life. Our goal as a premier Digital Product Development Company is to make your ideas a reality. As a Digital Product Agency, we produce designs that are smooth and appealing that please your target market."
          serviceimg="/assets/images/service/svg/pro.png"
          serviceimgAlt="Digital Product Design Company"
          servicehead="Top Digital Product Design Agency Redefining Excellence"
          servicedesc1="We're glad you're here at Digital-Konnect Innovation, an advanced digital product design firm in USA. Our Digital Product Design is a masterpiece of imagination and in-depth knowledge of human behaviour. Our design team at Digital-Konnect is a formidable force, equipped with pioneering tools and concepts that push the frontiers of creativity and keep up with changing business trends."
          servicedesc2="When you work with us, your products will sparkle on the online store and shine like illuminating beacons in the night. Because we fully believe in the value of cooperation and collaboration, we actively involve our clients in the design process. We listen, learn, and adjust throughout the process, making sure that the finished product exceeds your expectations."
        />
      </div>
      {/* <Cards card={cards} /> */}
      <div className="px-5 container-ack md:px-0">
        <ComponentHead
          title="Technology"
          sub="Product Design Company "
          head="Digital-Konnect, a leading firm in USA for digital product design & development, is your devoted associate in reaching digital excellence. Put your faith in our digital product design services and watch your items shine and be distinguished. Witness the strength of Digital-Konnect, your acclaimed USA-based digital product agency, and work with us to build a digital environment that redefines greatness."
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
              processhead="Stages"
              processsub="Key to Success (Our services)"
              processdesc="Leading USA-based digital product design firm Digital-Konnect has mastered the art of developing beautiful digital products that solve customer problems and boost revenue across a range of sectors. You are where the magic begins! To deliver the best possible user experience, our team of brilliant digital product designers and skilled business analysts intimately understands your requirements."
              processimg="/assets/images/service/svg/pro1.png"
              proocessalt="Digital Product Design Services"
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

export default ProductDdesignCompany;
