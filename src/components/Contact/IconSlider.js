'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/swiper-bundle.css';

const IconSlider = () => {
  const images = [
    { src: '/assets/images/clients/wonderland.png', alt: 'wonderland' },
    { src: '/assets/images/clients/lords-logo.png', alt: 'Lords' },
    { src: '/assets/images/clients/xposure.png', alt: 'Coal' },
    { src: '/assets/images/clients/ehesas.png', alt: 'Ehesas' },
    { src: '/assets/images/clients/kazuki-official.png', alt: 'Kazuki' },
    { src: '/assets/images/clients/i2v.png', alt: 'I2v' },
    { src: '/assets/images/clients/itdi.png', alt: 'ITDI' },
    { src: '/assets/images/clients/insaano-health.png', alt: 'Health' },
    { src: '/assets/images/clients/payments-pro.png', alt: 'Payment-pro' },
  ];

  return (
    <div className="flex w-full md:h-[160px] lg:h-[280px] mx-auto xl:w-[85%] flex-col lg:flex-row px-4 py-2"> 
      <div className="w-full lg:w-1/3 flex justify-center"> 
        <Swiper
          spaceBetween={20} 
          slidesPerView={3}  
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
          }}
          loop={true}       
          autoplay={{
            delay: 2500,      
            disableOnInteraction: false,  
          }}
          modules={[Autoplay]} 
          className="w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image src={image.src} alt={image.alt} className="h-24 lg:h-24" height={220} width={150} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden lg:block lg:w-2/3"></div> 
    </div>
  );
};

export default IconSlider;
