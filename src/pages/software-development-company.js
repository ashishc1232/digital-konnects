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

const SoftwareDevelopmentCompany = () => {
  const processes = [
    {
      id: '1',
      name: 'On-demand software development:',
      desc: "Digital-Konnect's On-Demand Software Development is a premium product that creates digital solutions that meet your needs. With a team of talented and talented people, we use the latest technology to create software that fits your needs.",
    },
    {
      id: '2',
      name: 'Start-up software development:',
      desc: 'With endless creativity and technology, they create digital impressions that attract customers and promote brands. As users are guided, they navigate needs and wants and develop solutions that resonate with their hearts. Following the lights of innovation and passion, they cast a spell of success, helping startups thrive in the ever-changing digital environment.     ',
    },
    {
      id: '3',
      name: 'Retail and eCommerce software development:',
      desc: 'They combine great ideas with expertise to create superior solutions. From a seamless experience to a personal journey, the software designs captivate the end user with easy navigation and engaging connections. Retail and e-commerce software developments with many innovations and user focus are a testament to the great growth and success of the brand in the digital space.',
    },
    {
      id: '4',
      name: 'Manufacturing Software development:',
      desc: 'They use their magic to create custom software that fits the specific needs of manufacturers. From product management to quality control, their production has become a conflict of knowledge, causing companies to control the originals.',
    },
    {
      id: '5',
      name: 'Real estate software development: ',
      desc: 'We produce custom software solutions for the real estate industry with a combination of creativity and expertise. From user-friendly interfaces to data-driven insight, our software brings simplicity and convenience, simplifying difficult tasks.',
    },
    {
      id: '6',
      name: 'Healthcare software development',
      desc: 'They work hard to create solutions that improve patient care and make medical operations more efficient. From electronic health records to telehealth clinics, Digital-Konnect is ​​transforming the healthcare landscape and empowering healthcare professionals with easy access to digital devices.',
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
      para: 'At Digital-Konnect, a top USA software development company, our team of experts is entrusted with developing ground-breaking software solutions that transform the digital world. We, as a Software Development Agency in USA, infuse everyone with exceptional strength and creativity and bring them to life, from the venerable trinity of Microsoft software (Word, Excel, and PowerPoint) to many more computer-focused concepts.',
      bgcolor: 'bg-[#fff]',
      cols: 'md:col-span-2',
      textcolor: 'text-secondary',
      display: 'hidden',
      maintitle: 'Solutions',
      subtitle:
        "Fostering Innovation: Digital-Konnect, USA's Prominent Software Company",
    },
    {
      id: 2,
      icon: '01',
      title: 'Software Consulting',
      para: 'Our service is a digital search engine that guides you through your search for software and services. Discover the secrets of success, harness the power of software for success, and make smart business decisions to leverage your technology. Enter the endless world where innovation and creativity know no bounds. ',
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
      title: 'Custom Software Applications',
      para: 'We are developers of custom software magic, creating beautiful apps for websites and mobile devices. Our software developers can work wonders, unlock the potential of your business processes, deliver unmatched value, and turn your vision into a reality that will amaze the world.',
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
      title: 'Enterprise Software Solutions',
      para: 'From a unique web marketing strategy to quick, easy decision-making, we can make the ordinary extraordinary. Witness the ultimate innovation as we let you fly higher and faster with unmatched ease. Welcome to a place of endless possibilities, brought to you by the wisdom of Digital-Konnect.',
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
      title: 'Application Services',
      para: 'We control, scale, accelerate, and autoscale with our advanced technology. Take control of a unique app and see your tech dreams come true like never before! The future of digital talent awaits you, and Digital-Konnect is ​​with you. ',
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
      title: 'Team extension',
      para: "At Digital-Konnect, we offer the best solutions that are an extension of our team's capabilities. Our talented staff has the skills and abilities you seek to get your project done. done with innovation and expertise. Together, we will conquer the digital world and turn your vision into a wonderful reality.",
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
      title: 'UI/UX',
      para: 'We are a UX solution provider that unlocks the secrets of engaging experiences. We create dazzling and inspiring UI designs with laser precision. From problems to solutions, we are your creative leaders who bring you unforgettable transformation products.',
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
          bannertitle="Digital-Konnect: The Software Development Company that Pushes the Envelope"
          bannersubtext="Welcome to the innovation hub in USA, where Digital-Konnect makes the technology dream a reality. We are more than just a regular Software Development Agency; we create the best digital experiences by pushing the envelope of what is conceivable."
          serviceimg="/assets/images/service/svg/soft.png"
          serviceimgAlt="Software Development Company"
          servicehead="We are Your Go-to Software Development Agency "
          servicedesc1="Digital-Konnect is a symbol of advancement in the technology of Software Development Services in USA. By keeping an eye on emerging trends, we make sure that your plans are outfitted with the most up-to-date and effective Software Design Services."
          servicedesc2="That is what we call the fantastic, fascinating experience with Digital-Konnect. Because we are a Software design firm that is a firm believer in the value of open communication and cooperation, we keep you updated at every stage. We will work to realize your dreams because they are the ones that fuel us. Our Software company, i.e., Digital-Konnect, is your one-stop shop for technology insights, whether you're interested in web development, mobile apps, or high-tech software. Enter the realm of our Software development services,  where imagination and creativity are allowed to run free, and your vision will become unforgettable."
        />
      </div>
      <Cards card={cards} />
      <div className="px-5 container-ack md:px-0">
        <ComponentHead
          title="Technologies"
          sub="Tech Powered Software Architecture"
          head="Technology moves faster than ever, and you need to catch up. Reach measurably higher scalability, performance, and cost optimization thanks to resilient software architecture development."
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
              processhead="Process"
              processsub="A Structured Process For Success"
              processdesc="Digital-Konnect, a prominent USA-based software development company, has risen to the top of the industry by recognizing the importance of innovation. You may be confident that your vision will materialize when working with Digital-Konnect, your go-to software development company in USA. We plan our hours to be as effective as possible, that every minute counts towards the success of your Software Development Services in USA."
              processimg="/assets/images/service/svg/soft1.png"
              proocessalt="Software Development Services"
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
      <Enquiry />
      <Clients />
      <Footer />
    </div>
  );
};

export default SoftwareDevelopmentCompany;
