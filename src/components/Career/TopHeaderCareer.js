import Image from "next/image";
import React from "react";

export default function TopHeaderCareer() {
  return (
    <>
      <div className="container-custom  md:px-0 px-5">
        <div className="w-full relative">
         
          <div className="TopCarerBnr">
            <Image
              src="/assets/images/career-img/careerimage.png"
              alt="Carimg"
              height={400}
              width={1600}
            />
          </div>
        </div>
      </div>
    </>
  );
}
