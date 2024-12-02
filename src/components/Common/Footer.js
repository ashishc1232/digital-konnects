import Link from 'next/link';
import React from 'react';
import { IoMdCall, IoMdMail } from 'react-icons/io';
import { GoLocation } from 'react-icons/go';
import Subscription from '../Home/Subscription';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div
      className="relative mt-16 md:mt-12"
      style={{
        backgroundImage: 'url("/assets/images/backgroundfooter.png")',
      }}
    >
      {/*  */}
      <div className="absolute w-full px-5 md:-top-10 md:px-0 -top-12">
        <Subscription />
      </div>

      <div className="container-ack ">
        <div className="md:pt-36 pt-72 md:px-4 lg:px-8">
          <div className="grid justify-between gap-12 px-5 pb-10 md:grid-cols-12 md:px-0 mt-14 md:mt-8">
            <div className="space-y-4 md:col-span-4">
              <Link href="/">
                <div>
                {/* <img src="/assets/Logo/mcansey_logos.png" className="w-48"/> */}
                <h2 className="text-xl md:text-2xl font-semibold text-black">Digital Konnect</h2>
                </div>
              </Link>
              <p className="text-sm text-justify">
                <strong>Digital Konnect Services Pvt Ltd</strong> Is Your Partner in
                Building World-Class Products. We're empowering startups and
                enterprises of all shapes and sizes with modern tech-stack and
                smart frameworks to create rich and interactive experiences that
                captivates and engages new customers.
              </p>
              <div className="flex space-x-5">
                <Link href="https://m.facebook.com/people/digitalkonnect-Innovations-Pvt-Ltd/100076925016084/">
                  <FaFacebook className="w-5 h-5" color="#4267b2" />
                </Link>
                <Link href="#">
                  <FaInstagram className="w-5 h-5" color="#e4405f" />
                </Link>
                <Link href="https://in.linkedin.com/company/digitalkonnect">
                  <FaLinkedin className="w-5 h-5" color="#0072b1" />
                </Link>
                <Link href="#">
                  <FaXTwitter className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="p-2 md:col-span-4">
              <h2 className="text-xl font-semibold text-black">EXPLORE</h2>
              <div className="flex py-4 space-x-20">
                <ul className="explore">
                  <Link href="/">
                    <li className="text-sm hover:text-yellow-500">
                      <span className="">Home</span>
                    </li>
                  </Link>
                  <Link href="/about">
                    <li className="text-sm hover:text-yellow-500">
                      <span className="">About</span>
                    </li>
                  </Link>
                  <Link href="/service">
                    <li className="text-sm hover:text-yellow-500">
                      <span className="">Our Expertise</span>
                    </li>
                  </Link>
                  <Link href="/advisors">
                    <li className="text-sm hover:text-yellow-500">
                      <span className="">Our Team</span>
                    </li>
                  </Link>
                </ul>

                <ul className="explore">
                  <Link href="/moments">
                    <li className="text-sm hover:text-yellow-500">
                      <span className="">Gallery</span>
                    </li>
                  </Link>
                  <Link href="/career">
                    <li className="text-sm hover:text-yellow-500">
                      <span className="">Career</span>
                    </li>
                  </Link>
                  <Link href="/terms-and-conditions">
                    <li className="text-sm hover:text-yellow-500">
                      <span className="">Terms and Conditions</span>
                    </li>
                  </Link>
                  <Link href="/privacy-policy">
                    <li className="text-sm hover:text-yellow-500">
                      <span className="">Privacy Policy</span>
                    </li>
                  </Link>
                  <Link href="/cancellation-and-refund-policy">
                    <li className="text-sm hover:text-yellow-500">
                      <span>Refund Policy</span>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="p-2 md:col-span-4">
              <Link href={'/contact'}>
              <h2 className="text-xl font-semibold text-black">CONTACT</h2></Link>
              <div className="flex py-4 space-x-10">
                <ul className="">
                  <li className="cursor-pointer group">
                    <p className="py-2"> International Locations : </p>
                    <span className="flex items-center space-x-2">
                      <GoLocation
                        size={24}
                        className="mt-3 text-black group-hover:text-yellow-500"
                      />
                      <h2 className="text-sm md:w-[90%]">
                      491 Brown Ave Wilkins <br/> township, PA 15145, USA
                      </h2>
                      
                    </span>
                  </li>
                  <Link href="tel:+1 4122735579">
                    <li className="flex items-center pt-3 space-x-2 group">
                      <IoMdCall
                        size={28}
                        className="mt-3 text-black group-hover:text-yellow-500"
                      />
                      <span className="text-sm">+1 4122735579</span>
                    </li>
                  </Link>
                  <Link href="mailto:info@digitalkonnect.com">
                    <li className="flex items-center pt-3 space-x-2 group">
                      <IoMdMail
                        size={28}
                        className="text-black group-hover:text-yellow-500"
                      />
                      <span className="text-sm">info@digitalkonnect.com</span>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>

          <hr className="h-[1px] bg-dark " />
          <div className="px-5 py-5 text-sm text-center md:px-0">
            <p>
              {' '}
              © Copyright {new Date().getFullYear()}{' '}
              <span className="font-semibold">
              Digital-Konnect Services & Consulting Pvt Ltd.
              </span>{' '}
              | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
