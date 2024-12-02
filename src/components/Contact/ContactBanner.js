import React from 'react';
import RequestForm from './RequestForm';


const ContactBanner = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center min-h-[70vh] flex flex-col lg:flex-row items-center lg:items-start justify-between pt-24 md:pt-36"
      style={{ backgroundImage: "url('/assets/images/contact/Untitled design (20).png')" }}
    >
     
      <div className="relative max-w-full mx-auto flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8 w-full z-10 py-8 xl:w-[85%]">
       
        <div className="flex-1 text-white space-y-6 px-4 md:px-6 lg:px-6 xl:px-0">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
           Start Your Digital Journey Today
          </h1>
          <p className="text-base md:text-lg lg:text-xl">
            Get all your questions answered by our business development team.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="bg-yellow-400 text-sm text-black px-6 py-2 rounded-lg">
              For Business
            </button>
            <button className="bg-white text-sm text-black px-6 py-2 rounded-lg">
              For Career
            </button>
          </div>
        </div>

       
        <div className="relative flex-1 w-full lg:w-1/2">
          <div className="relative lg:absolute right-0 top-0  p-6 lg:p-8 w-full lg:w-[500px] xl:w-[565px] 2xl:w-[650px]">
         <RequestForm/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
