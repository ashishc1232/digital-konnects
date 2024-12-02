import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BannerSlide = () => {
  const slides = [
    {
      title: "Digital-Konnect's groundbreaking Global Generative AI Insights Report",
      image: "/assets/Home/Banner/top-kv_01_pc.webp",
      link: "/link1",
    },
    {
      title: "Capture the opportunity: Unlocking your Generative AI potential",
      image: "/assets/Home/Banner/slide2.webp",
      link: "/link2",
    },
    {
      title: "Driving innovation in the energy and petroleum sector",
      image: "/assets/Home/Banner/slide3.webp",
      link: "/link3",
    },
    {
      title: "Thrive in a landscape transformed by Generative AI",
      image: "/assets/Home/Banner/slide4.webp",
      link: "/link4",
    },
    {
      title: "Empowering Tomorrow: Redefining Success Through Innovation",
      image: "/assets/Home/Banner/slide5.webp",
      link: "/link5",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative pt-[90px]">
      <h2 className="sr-only">Carousel Section</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="w-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative h-[500px] md:h-[700px] w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="object-cover w-full h-full"
              />
              {/* Dashes above the text */}
             

            
              <div className="absolute inset-0 flex flex-col justify-center items-start bg-black bg-opacity-50 px-5 md:px-16 text-white">
              <div className="absolute  flex justify-center pb-52 space-x-2 z-10">
                {slides.map((_, dashIndex) => (
                  <div
                    key={dashIndex}
                    className={`relative h-[2px] w-12 md:w-16 bg-gray-400 overflow-hidden`}
                  >
                    <div
                      className={`absolute h-full w-full bg-white transition-all duration-[5000ms] ${
                        activeIndex === dashIndex ? "animate-slide-progress" : ""
                      }`}
                    />
                  </div>
                ))}
              </div>
                <h3 className="text-2xl md:text-4xl font-bold">{slide.title}</h3>
                <a
                  href={slides[(activeIndex + 1) % slides.length].link}
                  className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md text-lg"
                >
                  Read More
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerSlide;
