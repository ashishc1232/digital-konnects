import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="container-ack">
      <div className="md:grid grid-cols-3 gap-8 md:space-y-0 space-y-4 md:px-0 px-5 pb-10">
        <div className="shadow-lg  rounded-lg">
          <Image src="/assets/images/memories/mom15.png" height={300} width={500} />
        </div>
        <div className="flex flex-col justify-between row-span-2">
          <Image
            src="/assets/images/memories/mom12.png" height={300} width={500}
            className="shadow-lg rounded-lg"
          />
          <Image
            src="/assets/images/memories/mom14.png" height={300} width={500}
            className="h-56 w-full object-cover shadow-lg rounded-lg"
          />
        </div>
        <div className="shadow-lg rounded-lg">
          <Image src="/assets/images/memories/mom4.png" height={300} width={500} />
        </div>
        <div className="shadow-lg rounded-lg">
          <Image src="/assets/images/memories/mom13.png" height={300} width={500} />
        </div>
        <div className="shadow-lg rounded-lg">
          <Image src="/assets/images/memories/mom3.png" height={300} width={500} />
        </div>
        <div className="rounded-lg col-span-2 ">
          <Image className="w-full" src="/assets/images/memories/mom9n.png" height={300} width={500}/>
        </div>

        <div className="shadow-lg rounded-lg">
          <Image className="h-full" src="/assets/images/memories/mom5.png" height={300} width={500} />
        </div>
        <div className="shadow-lg rounded-lg row-span-2">
          <Image src="/assets/images/memories/mom10.png" height={300} width={500} className="h-full" />
        </div>
        <div className="flex flex-col justify-between row-span-2 space-y-4">
          <Image
            src="/assets/images/memories/mom8.png" height={300} width={500}
            className="shadow-lg rounded-lg h-96"
          />
          <Image
            src="/assets/images/memories/mom7.png" height={300} width={500}
            className="h-40 w-full object-cover shadow-lg rounded-lg"
          />
        </div>
        <div className="shadow-lg rounded-lg row-span-2">
          <Image src="/assets/images/memories/mom6.png" height={300} width={500} className="h-full" />
        </div>
      </div>
     
    </div>
  );
};

export default Gallery;
