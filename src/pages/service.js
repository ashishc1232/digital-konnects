import React from "react";
import Head from "next/head";
import Footer from "../components/Common/Footer";
import ComponentHead from "../components/Common/ComponentHead";
import Navbar from "../components/Header/Navbars";
import Link from "next/link";

import ServicesUI from "../components/Services/ServicesUI";


const tabs = [
  {
    id: 1,
    text: 'Product Conceptualization',
  },
  {
    id: 2,
    text: 'Product Development',
  },
];

const serviceData = [
  
  {
    id: 5,
    image: '/assets/images/service/svg/res.png',
    name: 'Prototyping Design',
    desc: "Digital-Konnect is a renowned Prototype Development Company in USA.",
    link: '/website-development-services-india',
  },
  
  {
    id: 4,
    image: 'assets/images/service/svg/stra.png',
    name: 'UX Design',
    desc: "We align UX strategy to your business strategy so it provides a seamless experience across multiple customer touchpoints.",
    link: '/website-development-services-india',
  },
  {
    id: 3,
    image: 'assets/images/service/svg/desi.png',
    name: 'UI Designing',
    desc: "Digital-Konnect - UI designing company in USA, Our passion for design is to create a music of visual delight. ",
    link: '/website-development-services-india',
  },
  {
    id: 2,
    image: 'assets/images/service/svg/ur.png',
    name: 'User Research',
    desc: "Digital-Konnect is a prominent User Research Firm based in USA.",
    link: '/website-development-services-india',
  },
];

const DigitalModernization = [
  {
    id: 1,
    image: '/assets/images/service/svg/usa.png',
    name: 'Usability Testing',
    desc: "Usability testing's alluring power is harnessed by Digital-Konnect, a renowned usability testing company in USA, to create captivating digital experiences.",
    link: '/digital-marketing-services-india',
  },
  {
    id: 2,
    image: '/assets/images/service/svg/vis.png',
    name: 'Data Visualization',
    desc: "Digital-Konnect, your reliable Data visualization Company in USA, can help you discover the power of your data! Understanding and making sense of data are essential for businesses to succeed in today's data-driven environment. ",
    link: '/digital-marketing-services-india',
  },
  {
    id: 3,
    image: '/assets/images/service/svg/web.png',
    name: 'Web Development',
    desc: 'Our team of talented designers and programmers is dedicated to providing outstanding web design and development solutions that are customized to meet the specific requirements of each client.',
    link: '/digital-marketing-services-india',
  },
  {
    id: 4,
    image: '/assets/images/service/svg/app.png',
    name: 'App Modernization',
    desc: 'Our effective and successful services ensure that your software is upgraded for modern computing approaches, taking advantage of newer languages, frameworks, and infrastructure platforms.',
    link: '/digital-marketing-services-india',
  },
  

  
];


const Services = () => {  
  const [select, setSelect] = React.useState(2);

  return (
    <div>
      <Navbar />
      <Head>
        <title>Our Service</title>
      </Head>

      <div
      className="pb-10 bg-right"
      style={{
        backgroundImage: 'url("/assets/images/mainbackground.png ")',
      }}
    >
    <ComponentHead
        title="Our Services"
        sub="Explore, Build, Deploy"
        head="is our essence and your true success. Looking to create unforgettable experiences?"
      />
      </div>
      {/* <div className="px-5 container-ack md:px-0">
      <div>
        <div className="flex justify-center space-x-2 cursor-pointer md:space-x-3">
          {tabs.map((item, index) => (
            <div
              onClick={() => setSelect(item.id)}
              className="py-10 group"
              key={index}
            >
              <div
                className={` md:px-12 px-3 py-2 rounded-md ${
                  select === item.id
                    ? 'bg-secondary text-white border-2 '
                    : '   border-2 border-black/90'
                }`}
              >
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        {select === 1 ? (
          <>
            <div className="grid gap-1 md:grid-cols-3">
              {serviceData.map((item, index) => (
                <div className="service-card" key={index}>
                  <div>
                    <div className="group p-6 md:h-[33rem]" key="id">
                      <div className="service-content relative text-center  flex flex-col justify-between  border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-[0px_0px_20px#bfdbfe] hover:bg-[#F6F8F9]/40 hover:border-2 rounded-xl md:h-[26rem]">
                        <div className="">
                          <img
                            src={item.image}
                            alt=""
                            className="rounded-lg "
                          />
                        </div>

                        <h2 className="pt-5 pb-2 text-lg font-semibold text-center text-black">
                          {item.name}
                        </h2>

                        <p className="px-3 pb-4 text-sm text-center text-black/50 group-hover:text-black ">
                          {item.desc}
                        </p>

                        <div className="pb-5">
                          <Link href={item.link}>
                            <button className="py-2 text-sm font-semibold border-b-2 text-cyan-300 group-hover:border-cyan-300 group-hover:border-b-2">
                              Know More
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="grid gap-1 md:grid-cols-3 ">
              {DigitalModernization.map((item, index) => (
                <div className="service-card" key={index}>
                  <div>
                    <div className="group p-6 md:h-[39rem]" key="id">
                      <div className="service-content flex flex-col justify-between relative text-center  border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-[0px_0px_20px#bfdbfe] hover:bg-[#F6F8F9]/40 hover:border-2 rounded-xl ">
                        <div className="">
                          <img
                            src={item.image}
                            alt=""
                            className="rounded-lg "
                          />
                        </div>

                        <h2 className="pt-5 pb-2 text-lg font-semibold text-center text-black">
                          {item.name}
                        </h2>

                        <p className="px-3 pb-4 text-sm text-center text-black/50 group-hover:text-black ">
                          {item.desc}
                        </p>

                        <div className="pb-5">
                          <Link href={item.link}>
                            <button className="py-2 text-sm font-semibold border-b-2 text-cyan-300 group-hover:border-cyan-300 group-hover:border-b-2">
                              Know More
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div> */}
    <ServicesUI/>
      <Footer />
    </div>
  );
};

export default Services;
