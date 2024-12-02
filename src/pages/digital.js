import Footer from "../components/Common/Footer";
import ComponentHead from "../components/Common/ComponentHead";
import Head from "next/head";
import React from "react";
import Navbar from "../components/Header/Navbars";
import Link from "next/link";
import Image from "next/image";

const DigitalModernization = [
  {
    id: 1,
    image: '/assets/images/service/DigitalMarketingStrategy.png',
    name: 'Digital Marketing Strategy',
    desc: 'Unleash Digital Profits: Stop guessing and start growing. We build data-driven marketing plans that align with your goals, engage your audience, and drive profitable results. Get your Free Marketing Strategy Blueprint now.',
    link: '/digital-marketing-services',
  },
  {
    id: 2,
    image: '/assets/images/service/SearchEngineOptimization.png',
    name: 'Search Engine Optimization (SEO)',
    desc: 'Own the Search Engine Throne: Climb up to the charts of Google’s SERPs and attract organic traffic. Our SEO experts optimize your website and content, so customers can find you first. Boost Your Organic Traffic Today.',
    link: '/seo-services',
  },
  {
    id: 3,
    image: '/assets/images/service/SearchEngineMarketing.png',
    name: 'Search Engine Marketing (SEM)',
    desc: 'Turn Pay into Results: Get real ROI from online ads. We manage your SEM campaigns to bring in qualified leads at the right price. Maximize Your Ad Spend with Expert SEM.',
    link: '/search-engine-marketing-services',
  },
  {
    id: 4,
    image: '/assets/images/service/SocialMediaMarketing.png',
    name: 'Social Media Marketing (SMM)',
    desc: 'Begin Conversations, Supercharge Growth: Build a buzzing online community. We create engaging content and manage your social media presence to win hearts and convert fans. Get More Followers & Brand Advocates.',
    link: '/social-media-marketing-services',
  },
  {
    id: 5,
    image: '/assets/images/service/PublicRelation.png',
    name: 'Public Relations (PR)',
    desc: 'Write Your Story, Value Your Voice: Become a media darling. We build positive media relationships and craft compelling narratives that elevate your brand image. Increase Your Brand Reputation & Trust.',
    link: '/pr-agency',
  },
  {
    id: 6,
    image: '/assets/images/service/MediaBuyingandPlanning.png',
    name: 'Media Buying and Planning',
    desc: 'Reach the Right Audience, Every Time: Spend smarter, not harder. We target your ideal audience across platforms, track ad performance, and optimize your budget for maximum impact. Reach Your Dream Customers Efficiently.',
    link: '/media-buying-company',
  },
];



const Digital = () => {

  return (
    <div>
      <Navbar />
      <Head>
        <title>Our Digital</title>
      </Head>

      <div
      className="pb-10 bg-right"
      style={{
        backgroundImage: 'url("/assets/images/mainbackground.png ")',
      }}
    >
    <ComponentHead
        title="Our Digital"
        sub="Explore, Build, Deploy"
        head="is our essence and your true success. Looking to create unforgettable experiences?"
      />
      </div>
      
      <div className="px-5 container-ack md:px-0">
      <div>
        <div className="flex justify-center space-x-2 cursor-pointer md:space-x-3">
        
        </div>
      </div>
      <div className="">
          <>
            <div className="grid gap-1 md:grid-cols-3 ">
              {DigitalModernization.map((item, index) => (
                <div className="service-card" key={index}>
                  <div>
                    <div className="group p-6 md:h-[39rem]" key="id">
                      <div className="service-content flex flex-col justify-between relative text-center  border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-[0px_0px_20px#bfdbfe] hover:bg-[#F6F8F9]/40 hover:border-2 rounded-xl ">
                        <div className="">
                          <Image
                            src={item.image}
                            alt=""
                            height={600}
                            width={600}
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
      </div>
    </div>

      <Footer />
    </div>
  );
};

export default Digital;
