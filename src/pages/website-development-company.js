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

const WebsiteDevelopment = () => {
  const processes = [
    {
      id: '1',
      name: 'Request for Proposal',
      desc: 'The journey begins with your request for a proposal. Share your project requirements, objectives, and expectations with us. Our team will carefully review your needs to ensure a comprehensive understanding of your project goals.',
    },
    {
      id: '2',
      name: 'Research and Analysis',
      desc: "Next, we delve into in-depth research and analysis. We study your industry, target audience, competitors, and market trends. This step is crucial for crafting a strategy tailored to your specific needs and ensuring a solid foundation for your website project.",
    },
    {
      id: '3',
      name: 'UI/UX Designing',
      desc: "With insights gathered from research, we embark on the UI/UX design phase. Our talented designers conceptualize user-friendly interfaces and engaging user experiences. We focus on creating intuitive navigation, captivating visuals, and seamless interactions to enhance user satisfaction.",
    },
    {
      id: '4',
      name: 'Design & Development',
      desc: "Once the design is approved, our development team steps in to bring your vision to life. Using cutting-edge technologies and best practices, we meticulously craft each element of your website. From front-end development to back-end integration, we ensure a seamless and responsive website experience across all devices.",
    },
    {
      id: '5',
      name: 'Testing and Quality Assurance',
      desc: 'Before launch, we conduct rigorous testing and quality assurance procedures. Our team performs comprehensive testing to identify and address any bugs, errors, or usability issues. We strive to deliver a flawless website that meets the highest standards of performance, functionality, and security.',
    },
    {
      id: '6',
      name: 'Beta Launch',
      desc: 'With thorough testing completed, we proceed to the beta launch phase. Your website is deployed to a controlled environment, allowing for final adjustments and refinements based on user feedback. This phase serves as a final validation before the full-scale launch, ensuring that your website is ready to make a lasting impression on your audience.',
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
      subtitle: 'Our Web Development Services',
    },
    {
      id: 2,
      icon: '01',
      title: 'Custom Web Development',
      para: 'Our Web Development Services specialize in creating custom websites from scratch, designed to align with your brand identity and specific requirements.',
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
      title: 'Responsive Web Design',
      para: 'As a web development agency, Brand Cover ensures that websites developed are responsive and adapt smoothly to different devices, providing an optimal user experience on desktops, tablets, and smartphones.',
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
      title: 'E-commerce Solutions',
      para: 'Our Website Development Company provides robust e-commerce integration, enabling secure payment gateways, intuitive product catalogs, and user-friendly checkout processes for online businesses.',
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
      title: 'Content Management Systems (CMS)',
      para: 'Our Website Design Company optimizes websites for search engines, improving their visibility and ranking on search results pages to attract more organic traffic.',
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
      title: 'UI/UX Design',
      para: 'As a web design company, Brand Cover focuses on creating user-friendly interfaces and smooth navigation to enhance the overall user experience and reduce bounce rates.',
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
      title: 'Web Application Development',
      para: 'Our Website Development Company develops web applications that cater to specific business needs, ensuring seamless functionality and enhanced user engagement.',
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
          bannertitle="Ingenious Web Design and Development Company"
          bannersubtext="Brand Cover has established itself as a well-known Web Design and Website Development Company in USA, India, with a solid reputation for its emphasis on innovation and originality. Our team of talented designers and programmers is dedicated to providing outstanding web design and development solutions that are customized to meet the specific requirements of each client."
          serviceimg="/assets/images/service/svg/web.png"
          serviceimgAlt="Web Development Company"
          servicehead="One scalable team for start-to-finish development"
          servicedesc1="At Brand Cover, we pride ourselves on our One Scalable Team For Start-To-Finish Development approach. What this means for our clients is that they have the convenience and assurance of working with a single, cohesive team from the initial stages of a project all the way through to its completion. Rather than juggling multiple teams or worrying about communication breakdowns between different vendors, our clients can trust that every aspect of their project is being handled seamlessly by our expert team. "
          servicedesc2="From brainstorming ideas to designing, coding, testing, and deploying the final product, our team works together harmoniously to ensure a smooth and successful journey for our clients, with results that exceed expectations."
        />
      </div>
      <Cards card={cards} />
      <div className="px-5 container-ack md:px-0">
        <ComponentHead
          title="Technology"
          sub="Website Development"
          head="The technology stack for Website Development can vary depending on the specific requirements of the application and the chosen modernization approach."
        />
        <Technology tech={techs} />
      </div>

      <div className="px-5 container-ack md:px-0">
        <ProccessHead
          processhead="PROCESS"
          processsub="Website Development Process"
          processdesc="Brand Cover follows a structured approach to ensures a systematic and collaborative process from initial discovery to final launch, resulting in a well-designed and functional website that meets our client's objectives and exceeds user expectations."
          processimg="/assets/images/service/svg/app1.png"
          proocessalt="website Design Company"
        />
        <Process process={processes} />
      </div>

      <div>
        <div
          style={{
            backgroundImage:
              'url("/assets/images/service/servicebackground.png")',
          }}
        >
          {/* <div className="px-5 container-ack md:px-0">
            <ProcessHead
              processhead="Services"
              processsub="App Modernization On Peek"
              processdesc="Full-scope app modernization services you can start using quickly (even in weeks!) to fix, boost, and revamp your systems with teams that have worked for over 160 companies."
              processimg="/assets/images/service/videoservice.png"
            />
            <Process process={processes} />
          </div> */}
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

export default WebsiteDevelopment;
