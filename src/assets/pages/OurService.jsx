import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
// import pheak from "/images/pheak.png";
import herobanner from "/images/herobanner.jpg";
const OurService = () => {
  return (
     <main className=" bg-[30%] bg-cover bg-fixed "
  
    // style={{
    //       backgroundImage: `url(${temple})`
    //     }}
   >
       <div
        className="hero h-[60vh] "
        style={{
          backgroundImage:
            `url(${herobanner})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center mt-25">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">Our Service Programs</h1>
            <p className="mb-5 text-2xl">Learn. Grow. Lead.</p>
          </div>
        </div>
      </div>


   </main>
  );
};

export default OurService;
