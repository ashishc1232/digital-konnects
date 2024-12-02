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
import CaseStudies from '../components/Services/DetailPage/CaseStudies';
import Navbar from '../components/Header/Navbars';

const Marketing = () => {
  const processes = [
    {
      id: '1',
      name: 'Expert Team',
      desc: 'Talented experts developing data-driven strategies for significant digital growth.',
    },
    {
      id: '2',
      name: 'Customized Solutions',
      desc: "Strategies that are in line with your company's objectives to provide the highest return on investment.",
    },
    {
      id: '3',
      name: 'Diverse Services',
      desc: 'A comprehensive offering of PPC, social media, SEO, and other digital marketing services.',
    },
    {
      id: '4',
      name: 'Proven Results',
      desc: 'Results that have been demonstrated through improved online exposure and engagement.',
    },
    {
      id: '5',
      name: 'Client-Centric Approach',
      desc: 'A collaborative relationship that puts your individual needs and goals first.',
    },
    {
      id: '6',
      name: 'Constant Innovation',
      desc: 'Keeping abreast of the most recent developments to keep your online presence current.',
    },
  ];
  const techs = [
    {
      id: '1',
      img: '/assets/images/service/svg/google.svg',
      name: 'Google',
    },
    {
      id: '2',
      img: '/assets/images/service/svg/google-ads.svg',
      name: 'Google Ads',
    },
    {
      id: '3',
      img: '/assets/images/service/svg/google-analytics.svg',
      name: 'google Analytics',
    },
    {
      id: '4',
      img: '/assets/images/service/svg/facebook.svg',
      name: 'Facebook',
    },
    {
      id: '5',
      img: '/assets/images/service/svg/instagram.svg',
      name: 'Instagram',
    },
    {
      id: '6',
      img: '/assets/images/service/svg/twitter.svg',
      name: 'Twitter',
    },
    {
      id: '7',
      img: '/assets/images/service/svg/linkedin.svg',
      name: 'LinkedIn',
    },
    {
      id: '8',
      img: '/assets/images/service/svg/youtube.svg',
      name: 'YouTube',
    },
    {
      id: '10',
      img: '/assets/images/service/svg/pinterest.svg',
      name: 'Pinterest',
    },
    {
      id: '11',
      img: '/assets/images/service/svg/snapchat.svg',
      name: 'Snapchat',
    },
    {
      id: '12',
      img: '/assets/images/service/svg/tiktok.svg',
      name: 'TikTok',
    },
    {
      id: '13',
      img: '/assets/images/service/svg/quora.svg',
      name: 'Quora',
    },
    {
      id: '14',
      img: '/assets/images/service/svg/reddit.svg',
      name: 'Reddit',
    },
    {
      id: '15',
      img: '/assets/images/service/svg/mailchimp.png',
      name: 'Mailchimp',
    },
    {
      id: '16',
      img: '/assets/images/service/svg/semr.png',
      name: 'SEMrush',
    },
    {
      id: '17',
      img: '/assets/images/service/svg/ahref.png',
      name: 'Ahrefs',
    },
    {
      id: '18',
      img: '/assets/images/service/svg/moz.png',
      name: 'Moz',
    },
    {
      id: '19',
      img: '/assets/images/service/svg/analytics.webp',
      name: 'Adobe Analytics',
    },
    {
      id: '20',
      img: '/assets/images/service/svg/cj.png',
      name: 'Commission Junction',
    },
    {
      id: '21',
      img: '/assets/images/service/svg/shareasale.png',
      name: 'ShareASale',
    },
    {
      id: '22',
      img: '/assets/images/service/svg/hubspot.png',
      name: 'HubSpot',
    },
    {
      id: '23',
      img: '/assets/images/service/svg/pardot.png',
      name: 'Pardot',
    },
    {
      id: '24',
      img: '/assets/images/service/svg/marketo.png',
      name: 'Marketo',
    },
    {
      id: '25',
      img: '/assets/images/service/svg/tumblr.svg',
      name: 'Tumblr',
    },
  ];
  const cards = [
    {
      id: 1,
      para: 'Digital-Konnect is your partner in attaining digital marketing excellence, helping you with everything from developing compelling content that connects with your audience to implementing data-driven tactics that provide quantifiable results. Allow us to lead you through the dynamic world of digital marketing, turning obstacles into chances and elevating your brand to the top of the online marketplace.',
      bgcolor: 'bg-[#fff]',
      cols: 'md:col-span-2',
      textcolor: 'text-secondary',
      display: 'hidden',
      maintitle: 'SUCCESS',
      subtitle: 'Diverse Digital Marketing Services for Your Success',
    },
    {
      id: 2,
      icon: '01',
      title: 'SEO Optimisation',
      para: 'With the help of our SEO know-how, increase your online presence. In order to keep your brand at the top of search engine results, we optimize your website, improve keyword ranks, and increase organic traffic.',
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
      title: 'PPC Campaigns',
      para: 'With our focused PPC campaigns, you can maximize your ROI. To generate high-quality traffic and conversions, our specialists create persuasive advertising, control bids, and keep track of performance.',
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
      title: 'Social Media Campaigns',
      para: "Utilize social media's strength by using its many channels. To effectively connect and engage with your audience, we develop compelling content, manage profiles, and put data-driven initiatives into practice.",
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
      title: 'Content marketing',
      para: 'Give your brand fuel by creating insightful content. In order to establish authority and increase audience engagement, our team creates educational and entertaining material, including blogs and infographics.',
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
      title: 'Email marketing',
      para: 'We provide effective email campaigns to stay in touch with your audience. We create, carry out, and evaluate campaigns that develop leads, uphold engagement, and raise conversions.',
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
      title: 'Analytics & Reporting',
      para: 'Use data-driven insights to gauge success. To optimize campaigns for ongoing growth, we give complete analytics, monitor important data, and deliver thorough reports.',
      bgcolor: 'bg-[#F6F8F9]',
      cols: 'md:col-span-1',
      display: 'icon',
      textsize: 'text-xl',
      fontbold: 'font-bold',
      textcolor: 'text-secondary',
      main: 'hidden',
    },
  ];

  const casestudies = [
    {
      id: 1,
      image: '/assets/images/service/caseone.png',
      name: 'Logical Fallacies',
      desc: 'What I’m talking about is the sensationalist posts attempting to boil down a successful company into a blog post of no more than a few thousand words. ',
    },
    {
      id: 2,
      image: '/assets/images/service/casetwo.png',
      name: 'Long term risk',
      desc: 'What I’m talking about is the sensationalist posts attempting to boil down a successful company into a blog post of no more than a few thousand words. ',
    },
    {
      id: 3,
      image: '/assets/images/service/casethree.png',
      name: 'growth hackers',
      desc: 'What I’m talking about is the sensationalist posts attempting to boil down a successful company into a blog post of no more than a few thousand words. ',
    },
    {
      id: 4,
      image: '/assets/images/service/casetwo.png',
      name: ' whole lot of factors',
      desc: 'What I’m talking about is the sensationalist posts attempting to boil down a successful company into a blog post of no more than a few thousand words. ',
    },
    {
      id: 5,
      image: '/assets/images/service/casethree.png',
      name: 'Outliers’ success',
      desc: 'What I’m talking about is the sensationalist posts attempting to boil down a successful company into a blog post of no more than a few thousand words. ',
    },
    {
      id: 6,
      image: '/assets/images/service/caseone.png',
      name: 'North Star Metric',
      desc: 'What I’m talking about is the sensationalist posts attempting to boil down a successful company into a blog post of no more than a few thousand words. ',
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
          bannertitle="Grow Your Business with Digital-Konnect, the Best Digital Marketing Company in USA"
          bannersubtext="We take pride in being your all-inclusive digital marketing solution at Digital-Konnect. We are dedicated to developing your online presence into a thriving success story as a top digital marketing firm. Our knowledgeable team is aware that a successful online business requires more than just a website; it also needs a carefully planned digital marketing strategy that supports your company's objectives."
          serviceimg="/assets/images/service/svg/dig.png"
          serviceimgAlt="digital marketing company"
          servicehead="Promote Your Brand with Digital-Konnect's Integrated Digital Marketing Solutions"
          servicedesc1=" Our customized digital marketing services are made to support your growth whether you're a startup trying to build your brand or an established company trying to widen your digital presence."
          servicedesc2=" We set out on a journey to increase your online exposure, engage your target audience, and drive conversions with a well-defined digital marketing strategy in place. We provide a broad range of internet marketing services, such as search engine optimization (SEO), pay-per-click advertising (PPC), social media marketing, content marketing, email marketing, and more as an established digital marketing agency. Every area of your online presence will be optimized for maximum impact thanks to our all-encompassing strategy."
        />
      </div>
      <Cards card={cards} />
      <div className="px-5 container-ack md:px-0">
        <ComponentHead
          title="Platforms"
          sub="Digital Marketing"
          head="The Platforms stack for Digital Marketing can vary depending on the specific requirements of the application and the chosen modernization approach."
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
              processsub=" Why Choose Us "
              processdesc="For professional strategies, specialised solutions, a variety of services, tested outcomes, a client-centric approach, and ongoing innovation driving your online success story, choose Digital-Konnect as your trusted digital marketing partner."
              processimg="/assets/images/service/svg/dig1.png"
              proocessalt="digital market agency"
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
      <ComponentHead title="Studies" sub="Case Studies" />
      <CaseStudies casestudies={casestudies} />
      <Work />
      {/* <Section /> */}
      <Enquiry />
      <Clients />
      <Footer />
    </div>
  );
};

export default Marketing;
