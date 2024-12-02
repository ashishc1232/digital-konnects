import React from 'react';
import Image from 'next/image';
import bannerImage from '../../../public/assets/Home/Banner/services-banner.png';
import Link from 'next/link';

const ContentSection = ({ content }) => {
  return (
    <div className="mb-6">
      {content.link ? (
        <Link href={content.link} passHref>
          <h4 className="font-bold mb-1 text-sm xl:text-xl cursor-pointer text-gray-800 hover:text-blue-500 hover:underline">
            {content.title}
          </h4>
        </Link>
      ) : (
        <h4 className="font-bold mb-1 text-sm xl:text-2xl">{content.title}</h4>
      )}
      {content.text && <p className="mb-1 text-[12px] xl:text-sm space-y-8">{content.text}</p>}
      {content.subPoints && (
        <ul className="  text-[12px] xl:text-lg  space-y-4 pt-3">
          {content.subPoints.map((point, index) => (
            <li key={index}>
              {point.link ? (
                <Link href={point.link} passHref>
                  <span className="text-black hover:text-blue-600 hover:underline cursor-pointer">
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

const ServicesModal = () => {
  const contentData = [
    [
      {
        title: 'Product  Conceptualization',
        subPoints: [
          { text: 'UI Designing Company', link: '/ui-designing-company' },
          { text: 'UX Design Company', link: '/ux-design-company' },
          { text: 'Prototyping Design Company', link: '/prototyping-design-company' },
          { text: 'User Research Company', link: '/user-research-company' },
        ],
       
      },
    ],
    [
      {
        title: 'Product Development',
       
        subPoints: [
          { text: 'Web Development Company', link: '/website-development-company' },
          { text: 'Mobile App Development Company', link: '/app-modernization-company' },
          { text: 'Software Development Company', link: '/software-development-company' },
          { text: 'Ecommerce Development Company', link: '/ecommerce-developement-company' },
         
        ],
        
      },
    
    ],
    
    [
      // empty array for left div
    ],
  ];

return (
    <div
        className="fixed  left-1/2 transform -translate-x-1/2 mt-2 w-[60vw] xl:w-[60vw] max-h-[90vh] xl:max-h-[80vh] bg-white shadow-lg rounded-lg p-4 overflow-auto z-50 border"
        role="dialog"
        aria-labelledby="services-modal-title"
        aria-describedby="services-modal-description"
    >
        <div className="grid grid-cols-3 gap-12 px-3 h-full">
            <div className="flex flex-col justify-start h-full col-span-1">
                <h2 id="services-modal-title" className="text-2xl xl:text-3xl py-2 pb-6 font-bold">
                    Ready to <span className="text-yellow-500 font-bold">Explore</span>
                </h2>
                <div className="relative mb-4 h-24 overflow-hidden">
                    <Image
                        src={bannerImage}
                        alt="Services Modal Image"
                        className="rounded-md w-full h-full object-cover"
                        height={128}
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-2">
                        <p className="text-white text-center text-sm font-semibold line-clamp-2">
                            Discover how our innovative solutions can transform your business.
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

export default ServicesModal;
