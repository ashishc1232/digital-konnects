import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';
import ComponentHead from '../Common/ComponentHead';

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

const Testimonial = () => {
  const settings = {
    className: 'center',
    slidesToShow: 3,
    focusOnSelect: true,
    dots: false,
    infinite: true,
    arrows: true,
    loop: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    lazyLoad: true,
    accessibility: true,
    cssEase: 'ease-out',
    swipeToSlide: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 4000,
        },
      },
    ],
  };

  return (
    <>
      <div className="px-5 pt-12 container-ack mmd:px-0 md:pt-0">
        <div>
          <ComponentHead
            title="Testimonials"
            sub="Customer Success Stories "
            head="Our clients aren't just satisfied, they're empowered. Hear how:"
          />

          <div className="">
            <Slider {...settings} className="mx-auto testimonialSlider">
              {clientsData.map((item, index) => (
                <>
                  <div className="relative py-10 testimonial group" key={index}>
                    <div className="hover:bg-[#F6F8F9] border-2 border-[#F6F8F9] text-left mx-3 py-8 rounded-md  hovertestimonial">
                      <div className="flex flex-col items-center justify-left">
                        <img
                          src={item.image}
                          alt=" "
                          className="  rounded-xl w-[25%] absolute top-0  left-[9rem]"
                        />
                        <div className="px-4 pt-6">
                          <div className="pt-4 text-sm text-center text-textcolor font-text">
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
            </Slider>
          </div>

          <div className="flex justify-center pt-5 pb-10">
            <Link href="/testimonials">
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
    </>
  );
};

export default Testimonial;
