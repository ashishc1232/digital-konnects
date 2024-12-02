import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const List = () => {
  const advisors = [
    {
      id: 1,
      image: '/assets/images/experts/expert1.png',
      alt: 'Paid Marketing services in India',
      name: 'Justin Mathew',
      desc: 'I had the pleasure of working with Digital-Konnect on a complex technology project, and I was blown away by their expertise and professionalism. Their deep understanding of the latest technologies and trends in the industry was evident from the start, and they were able to provide valuable insights and guidance throughout the entire project.',
      link: '/advisorDetailPage',
    },
    {
      id: 2,
      image: '/assets/images/experts/expert4.png',
      alt: 'Digital Marketing Services in India',
      name: 'Danial Evans',
      desc: 'Technology and business visionary with over 22+ years of successful & fruitful career in IT Management, who provided strategic direction on technology initiatives such as implementing Multiple ERP Modules in line with the core organizational goals and business & profit objectives of the company.',
      link: '/advisorDetailPage',
    },
    {
      id: 3,

      image: '/assets/images/experts/expert5.png',
      alt: 'Digital makreting experts in India',
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
    <div className="container-ack">
      <div className="grid gap-6 pt-6 pb-16 md:grid-cols-3">
        {advisors.map((item, index) => (
          <>
            <div className="group " key={index}>
              <div className="relative text-center py-6 border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-sm hover:bg-[#F6F8F9]/40 hover:border-2 rounded-xl md:h-[27rem]">
                <div className="inline-flex items-center justify-center rounded-md md:mt-8 ">
                  <Image
                    src={item.image}
                    height={80}
                    width={80}
                    alt=""
                    className="w-20 h-20 mx-auto rounded-lg "
                  />
                </div>

                <h2 className="py-3 text-lg font-semibold text-center text-yellow-500">
                  {item.name}
                </h2>

                <p className="px-5 py-2 pb-4 text-sm tracking-tighter text-justify text-black/50 group-hover:text-black ">
                  {item.desc}
                </p>

                <div className="pb-5">
                  {/* if link will be used only in one in maping */}
                  {/* <Link href={item.link ? item?.link : ''}> */}
                  {/* <Link href={item.link}>
                    <button className="py-2 text-sm text-black border-b group-hover:border-primary group-hover:border-b-2">
                      See More
                    </button>
                  </Link> */}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default List;
