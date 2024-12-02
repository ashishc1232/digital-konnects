import React from 'react';
import Image from 'next/image';
import ComponentHead from '../Common/ComponentHead';

const Leaders = () => {
  const cardData = [
    {
      name: 'Caleb Worou ',
      img: '/assets/Home/OurTeam/team1.webp',
      role: 'C.E.O',
      exp: 'Exp: 23 Years in Digital Marketing',
    },
    {
      name: 'John Kwateng',
      img: '/assets/Home/OurTeam/team2.webp',
      role: 'C.O.O',
      exp: 'Exp: 19 years in Digital Marketing',
    },
    {
      name: 'Sania O',
      img: '/assets/Home/OurTeam/team3.webp',
      role: 'Web Marketer',
      exp: 'Exp: 10 years in Digital Marketing',
    },
  ];
  return (
    <div className="px-5 pt-12 container-ack md:px-0 md:pt-0 ">
      <ComponentHead
        title="Leaders"
        sub="Our Visionaries"
        // head="We Empower Your Business with Our Trailblazers and Drive Innovation Across Industries."
      />

      <div className="grid md:grid-cols-3">
        {cardData?.map((item, key) => {
          return (
            <div className="cardBox" key={key}>
              <div className="">
                <div className="front">
                  <div className="flex flex-col items-center justify-center pt-8">
                    <div>
                      <img
                        src={item.img}
                        alt=""
                        className="flex justify-center object-cover w-40 h-40 rounded-full"
                      />
                    </div>
                    <p className="pt-5 text-lg font-semibold text-black">
                      {item.name}
                    </p>
                    <p className="text-base text-textcolor">{item.role}</p>
                    <p className="text-sm text-textcolor">{item.exp}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Leaders;
