import Link from "next/link";
import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const location = [
  {
    id: 1,
    img: "/assets/images/india.png",
    place: "Gurgaon",
    number: "+91-9910190071",
    mail: "info@digitalkonnect.com",
  },
  {
    id: 2,
    img: "/assets/images/india.png",
    place: "Banglore",
    number: "+91-8178567042",
    mail: "info@digitalkonnect.com",
  },
  {
    id: 3,
    img: "/assets/images/india.png",
    place: "Kolkata",
    number: "+91-8178567042",
    mail: "info@digitalkonnect.com",
  },
  {
    id: 4,
    img: "/assets/images/india.png",
    place: "USA",
    number: "+91-8178567042",
    mail: "info@digitalkonnect.com",
  },
  {
    id: 5,
    img: "/assets/images/UAEflag.jpg",
    place: "Dubai",
    number: "+971547097369",
    mail: "info@digitalkonnect.com",
  },
  {
    id: 6,
    img: "/assets/images/UAEflag.jpg",
    place: "Sharjah",
    number: "+971547097369",
    mail: "info@digitalkonnect.com",
  },
  {
    id: 7,
    img: "/assets/images/uk.png",
    place: "UK",
    number: "+44-7534062063",
    mail: "info@digitalkonnect.com",
  },
  {
    id: 8,
    img: "/assets/images/USAflag.jpg",
    place: "USA",
    number: "(210)879-3223",
    mail: "info@digitalkonnect.com",
  },
];
const Location = () => {
  return (
    <div className="container-sck bg-[url('../../public/assets/images/locationbackground.png')] background-size:cover background-position:center background-repeat:no-repeat bg-fixed">
      <div
        className="relative mb-50 my-10"

        // style={{ backgroundImage: `url("../../assets/images/locationbackground.png")` }}
      >
        <div className="md:text-[7rem] text-[5rem] tracking-wider text-center textdark font-bold  md:pt-10 ">
          Locations
        </div>
        <div className=" md:top-[5.8rem] font-bold  text-white left-16 text-[46px]  text-center flex flex-col md:space-y-6 absolute lg:left-[39%] bottom-[15px]">
          <h2>
            Global <span className="text-cyan-300">Spread</span>
          </h2>
        </div>
      </div>
      <div className="grid md:grid-cols-4 items-center  container-ack px-5 ">
        <div className=" md:col-span-4 grid md:grid-cols-4 items-center md:py-8 py-2 md:px-8 px-2 ">
          {location.map((item, index) => (
            <>
              <div style={{ margin: 7 }}>
                <div
                  className="relative text-left px-6  py-3 bg-gray-50 rounded-xl border mb-5"
                  key={index}
                >
                  <div className="inline-flex justify-left items-center rounded-md md:mt-8 ">
                    <img
                      src={item.img}
                      alt=""
                      className="  rounded-lg w-12 h-12 mx-auto "
                    />
                  </div>
                  <h2 className="font-semibold text-lg py-2 text-black text-left">
                    {item.place}
                  </h2>
                  <div className="grid gap-4 pb-4">
                    <Link href="tel:+918178567042">
                      <div className="flex space-x-2">
                        <BiPhoneCall size={20} />
                        <div className="text-xs">
                          <h2 className="font-semibold">PHONE</h2>
                          <p className="text-cyan-300">{item.number}</p>
                        </div>
                      </div>
                    </Link>
                    {/* <div className="flex space-x-2 cursor-pointer">
                      <FaLocationArrow size={20} />
                      <div className="text-xs">
                        <h2 className="font-semibold">ADDRESS</h2>
                        <p className="text-cyan-300 p-0">
                          {item.address}
                        </p>
                      </div>
                    </div> */}
                    <Link href="mailto:info@digitalkonnect.com">
                      <div className="flex space-x-2">
                        <MdOutlineMail size={20} />
                        <div className="text-xs">
                          <h2 className="font-semibold">EMAIL</h2>
                          <p className="text-cyan-300">{item.mail}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="grid ">
        <div className="h-full ">
          <img src="/assets/images/maplocation.gif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Location;
