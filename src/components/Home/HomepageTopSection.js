"use client";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const HomepageTopSection = () => {
  const words = `Our team of seasoned IT professionals delivers tailored solutions to drive efficiency, innovation, and growth. Partner with us to leverage cutting-edge technology and strategic insights for your business success.`;

  return (
    <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="relative inset-0 w-full h-full object-cover"
      >
        <source src="https://rlwidovshzfisnvy.public.blob.vercel-storage.com/newvideo-zDV5xgmdEzeiOgXmRKO2QHrloVQsQ1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900 opacity-60  "></div>

      {/* Content Overlay */}
      <div className=" absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-10 lg:px-20 mt-60 lg:mt-60 2xl:mt-80">
        <div className="flex flex-col items-center w-full max-w-7xl">
          {/* Left Side Content */}
          <div className="flex-1 text-center mb-6 animate-fade-in-left px-2 md:px-4 lg:px-8">
            <h1 className="animate-zoom-in  text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight ">
              <span style={{ fontSize: "1.5em", display: 'inline-block' }} >Software &nbsp; </span>
              <TypeAnimation
                sequence={[
                  ' Development',
                  1000,
                  ' Engineering',
                  1000,
                  ' Consulting ',
                  1000,
                  ' Outsourcing',
                  1000
                ]}
                wrapper="span"
                speed={40}
                style={{ fontSize: '1.5em', display: 'inline-block' }}
                repeat={Infinity}
              />
            </h1>
            <span className="animate-zoom-in text-[14px] md:text-base lg:text-xl text-white  mb-6 px-1  md:px-8 lg:px-8 2xl:px-44">
              <TextGenerateEffect words={words} className="text-white" />
            </span>
            <div className="animate-bounce	">
              <Link href={'/services'} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,_#67e8f9_0%,_#3b82f6_50%,_#67e8f9_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 px-6 py-2 text-sm font-medium text-white backdrop-blur-3xl">
                  Discover Our Services
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageTopSection;
