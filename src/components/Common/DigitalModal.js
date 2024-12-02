import React from 'react';
import Image from 'next/image';
import bannerImage from '../../../public/assets/Home/Banner/digital-banner.png';
import Link from 'next/link';

const ContentSection = ({ content }) => {
  return (
    <div className="">
      {content.link ? (
        <Link href={content.link} passHref>
          <h4 className="  text-sm xl:text-xl cursor-pointer text-gray-800 hover:text-blue-500 hover:underline">
            {content.title}
          </h4>
        </Link>
      ) : (
        <h4 className=" mb-1 text-sm xl:text-2xl">{content.title}</h4>
      )}
      {content.text && <p className="mb-1 text-[12px] xl:text-sm space-y-8">{content.text}</p>}
      {content.subPoints && (
        <ul className="  text-[12px] xl:text-lg  space-y-4 ">
          {content.subPoints.map((point, index) => (
            <li key={index}>
              {point.link ? (
                <Link href={point.link} passHref>
                  <span className="text-blue-900 hover:text-blue-600 hover:underline cursor-pointer">
                    {point.text}
                  </span>
                </Link>
              ) : (
                <span>{point.text}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const DigitalModal = () => {
  const contentData = [
    [
      {
        title: 'Digital Marketing Company',
        link: '/digital-marketing-company',
      },
      {
        title: 'Social Media Marketing Company',
        link: '/social-media-marketing-company',
      },
      {
        title: 'Search Engine Marketing Company',
        link: '/sem-company',
      },
      {
        title: 'SEO Company ',
        link: '/seo-company',
      },
      {
        title: 'PR Agency',
        link: '/pr-agency',
      },
      {
        title: 'Media Buying Company',
        link: '/media-buying-company',
      },
   
    ],
   
    [
      // empty array for left div
    ],
  ];

  return (
    <div
      className="fixed  left-1/2 transform -translate-x-1/2 mt-2  xl:w-[50vw] max-h-[90vh] xl:max-h-[80vh] bg-white shadow-lg rounded-lg p-4 overflow-auto z-50 border"
      role="dialog"
      aria-labelledby="services-modal-title"
      aria-describedby="services-modal-description"
    >
      <div className="grid grid-cols-2 gap-12 px-3 h-full">
        <div className="flex flex-col justify-start h-full col-span-1">
          <h2 id="services-modal-title" className="text-2xl xl:text-3xl py-2 pb-8 font-bold">
            Ready to <span className="text-yellow-500 font-bold">Digital</span>
          </h2>
          {/* <p id="services-modal-description" className="py-1 text-base xl:text-xl">
            Innovative IT solutions structured to adapt and grow alongside your business needs.
          </p> */}
          <div className="relative mb-4 h-24 overflow-hidden">
            <Image
              src={bannerImage}
              alt="Digital Modal Image"
              className="rounded-md w-full h-full object-cover"
              height={128}
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-2">
              <p className="text-white text-center text-sm font-semibold line-clamp-2">
               Ready to inspire, energize, through digital evoluation.
              </p>
            </div>
          </div>
        </div>

        {contentData.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col space-y-2">
            {column.map((content, index) => (
              <ContentSection content={content} key={index} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalModal;
