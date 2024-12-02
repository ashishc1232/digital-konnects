import Image from 'next/image';
import React from 'react';

const List = () => {
  const clientsData = [
    {
      id: 1,
      image: '/assets/images/testimonials/testimonial-img-05.jpg',
      text: 'Mr. Peter',
      designation: '(Founder Chauffeur Melbourne)',
      para: "We got the feeling that our goals are shared and that we're all working towards a common objective. I like their drive for innovation and the company spirit.",
    },
    {
      id: 2,

      image: '/assets/images/testimonials/testimonial-img-01.webp',
      text: 'Abiola Mishael',
      designation: '(CMO Repik)',
      para: "'I am so glad to get an opportunity to work with Digital-Konnect. It doesn't only give me a source of income but satisfaction of doing something beneficial for the society.'",
    },
    {
      id: 3,

      image: '/assets/images/user.png',
      text: 'Mrs. Jyotsana',
      designation: '(Director Reddington Global)',
      para: 'We’ve been working with them for four years and have grown their team from 80 to 140 people. Their ability to scale easily without sacrificing performance or product quality stands out to us.',
    },
    {
      id: 4,
      image: '/assets/images/testimonials/testimonial-img-02.webp',
      text: 'Mrs. Jasmine L',
      designation: '(Founder Nestohub)',
      para: '"Digital-Konnect is doing great work. They are working to benefit others rather than thinking  just of profit. They are working for development."',
    },
    {
      id: 5,
      image: '/assets/images/testimonials/testimonial-img-03.webp',
      text: 'Mr.Jordan A',
      designation: '(CTO Intech Organics Ltd)',
      para: 'Thanks to the Digital-Konnect, we reduced maintenance costs by 40% for the mobile app and by 25% for the production environment with the use of newer technologies.',
    },
    {
      id: 6,
      image: '/assets/images/testimonials/testimonial-img-04.jpg',
      text: 'Mr John',
      designation: '(DGM Web)',
      para: 'We regard the Digital-Konnect team as co-founders in our business . In 12 months alone, we grew from 6 to 49 people, while our revenues and profits grew multiple times.',
    },
  ];

  return (
    <div className="pt-10 pb-5 container-ack md:pt-0 md:pb-0">
      <div
        className="bg-no-repeat "
        style={{
          backgroundImage: 'url("/assets/images/backgroundtestimonial.png ")',
        }}
      >
        <div className="">
          <div className="relative">
            <div className="md:text-[10rem] text-[3rem] text-white tracking-wider text-center texttransparent font-bold  md:pt-20 ">
              Testimonial
            </div>
            <div className="absolute md:top-[11.5rem] top-[6rem] inset-x-0 flex justify-center">
              <div className="max-w-xl text-3xl font-bold text-center">
                Testimonial
              </div>
            </div>
          </div>
          <p className="text-base text-gray-400 text-center w-[80%] mx-auto ">
            Our clients aren't just satisfied, they're empowered. Hear how:
          </p>
        </div>
        <div>
          <div className="grid pt-10 md:grid-cols-3 gap-7">
            {clientsData.map((item, e) => (
              <>
                <div className="relative py-10 group" key={e}>
                  <div className="hover:bg-[#F6F8F9] border-2 border-[#F6F8F9] text-left mx-3 py-8 rounded-md  hovertestimonial">
                    <div className="flex flex-col items-center justify-left md:h-72 lg:h-52">
                      <Image
                        src={item.image}
                        alt=" "
                        height={100}
                        width={100}
                        className="rounded-lg w-[25%] absolute top-0  xl:left-[9rem]"
                      />
                      <div className="px-4 pt-6">
                        <div className="pt-4 text-center text-secondary">
                          {item.para}
                        </div>
                        <div className="pt-3 text-xl font-semibold text-center text-black">
                          {item.text}
                        </div>
                        <div className="text-sm text-center text-black">
                          {item.designation}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          {/* <div className="flex items-center justify-center md:pb-10">
            <button className="px-12 py-2 bg-white border-2 rounded-md border-secondary text-secondary hover:bg-secondary hover:text-white">
              View All
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default List;
