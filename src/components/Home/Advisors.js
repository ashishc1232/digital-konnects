import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import ComponentHead from '../Common/ComponentHead';
import Image from 'next/image';

const Advisors = () => {
  const advisor = [
    {
      id: 1,
      image: '/assets/images/experts/expert1.png',
      alt: 'Paid Marketing services in India',
      name: 'Justin Mathew',
      desc: 'I had the pleasure of working with  deep understanding of the latest technologies and trends in the industry was evident from the start, and they were able to provide valuable insights and guidance throughout the entire project.',
      link: '/advisorDetailPage',
    },
    {
      id: 2,
      image: '/assets/images/experts/expert4.png',
      alt: 'Digital Marketing Services in India',
      name: 'Danial Evans',
      desc: 'Technology and business visionary with over 22+  strategic direction on technology initiatives such as implementing Multiple ERP Modules in line with the core organizational goals and business & profit objectives of the company.',
      link: 'advisorDetailPage',
    },
    {
      id: 3,

      image: '/assets/images/experts/expert5.png',
      alt: 'Digital marketing experts in India',
      name: 'Susane Nelson',
      desc: 'Good innovation is about finding creative and effective solutions to problems. It involves thinking outside the box, taking risks, and being open to new ideas. Good innovation can lead to significant advancements in technology.',
      link: '/advisorDetailPage',
    },
    {
      id: 4,

      image: '/assets/images/experts/expert2.png',
      alt: 'Marketing agency experts in India',
      name: 'Simon Dsouza',
      desc: 'Company motivation is crucial for ensuring that employees remain engaged and productive. A motivated workforce is more likely to go the extra mile to achieve company goals, and this can lead to increased productivity, better customer satisfaction, and higher profits.',
      link: '/advisorDetailPage',
    },
    {
      id: 5,

      image: '/assets/images/experts/expert3.png',
      alt: 'Digital marketing experts in India',
      name: 'Olly Fernandes',
      desc: 'Company quality refers to the level of excellence that a company strives to achieve in all aspects of its operations. This includes the quality of its products or services, customer service, employee satisfaction, and overall reputation.',
      link: '/advisorDetailPage',
    },
  ];

  return (
    <div className="">
      <div className="px-5 container-ack md:px-4 ">
        <ComponentHead
          title="Advisors"
          sub="Our Industry Experts
          "
          head="At Digital-Konnect, we transform imagination into action. Our seasoned experts understand the importance of cultivating a responsible approach towards our clients, and society."
        />

        <div className="grid gap-6 pt-2 md:grid-cols-3">
          {advisor.map((item, e) => (
            <>
              <div className="group advisors" key={e}>
                <div className="advisor-card relative text-center py-4 border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2 hover:drop-shadow-sm hover:bg-[#F6F8F9] hover:border-2 rounded-xl md:h-[22rem]">
                  <div className="inline-flex items-center justify-center rounded-md md:mt-4 ">
                    <Image
                      src={item.image}
                      alt="advisor"
                      height={80}
                      width={80}  
                      className="w-20 h-20 mx-auto rounded-[100%]"
                    />
                  </div>

                  <h2 className="py-3 space-y-2 text-lg font-semibold text-center text-black">
                    <span>{item.name}</span>
                    <hr className="w-12 h-1 mx-auto text-center rounded-md text-cyan-300 bg-yellow-500" />
                  </h2>

                  <p className="px-5 text-sm tracking-tighter text-justify text-black/50 group-hover:text-black ">
                    {item.desc}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="flex justify-center pt-5 pb-10">
          <Link href="/advisors">
            <button className="px-12 py-2 rounded-md button-2">
              <div className="eff-2"></div>
              <span className="flex items-center text-base ">
                {' '}
                View All
                <MdKeyboardArrowRight className="text-base " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Advisors;
