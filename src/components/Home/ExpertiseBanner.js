"use client";

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  "Scalable Website Development",
  "Mobile App Development",
  "Cloud Computing Solutions",
  "Custom Software Development",
  "DevOps & Continuous Integration",
  "Blockchain Development",
  "Data Analytics & Business Intelligence",
  "Internet of Things (IoT) Solutions",
  "UI/UX Design & Prototyping",
  "API Integration & Development",
  "Legacy System Modernization",
  "E-commerce Solutions",
  "Quality Assurance & Testing",
  "Technical Support & Maintenance",
  "CRM & ERP Systems",
  "Digital Transformation Consulting",
  "IT Infrastructure Management"
];

const ExpertiseBanner = () => {
  const settingsLeftToRight = {
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    swipeToSlide: true,
    rtl: true, 
    responsive: [
      {
        breakpoint: 1026,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden py-2 md:py-4 ">
      {/* First Slider: Right to Left */}
      <Slider {...settingsLeftToRight}>
        {services.map((service, index) => (
          <div key={index} className="p-2">
            <div className="h-20 w-full flex items-center justify-center rounded-lg bg-white ">
              <p className="text-xs md:text-lg font-semibold">{service}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ExpertiseBanner;
