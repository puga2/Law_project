import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom";
import AutoCarousel from '../components/CarouselMember';
// if the image is served from the public folder, use a string path instead of importing it
const herobanner = "/images/herobanner.jpg";
const AmCham  = "/images/memebership/AmCham.png";
const Certification  = "/images/memebership/Certificate.png";
const britcam  = "/images/memebership/britcam.jpg";
const BritCham = "/images/memebership/BritCham.png";
const logoAnn = "/images/memebership/logoAnn.png";
const slide1 = "/images/memebership/slide1.png";
const slide2 = "/images/memebership/slide2.png";
const slide3 = "/images/memebership/slide3.png";
const slide4 = "/images/memebership/slide4.png";
const Membership = () => {
  return (
 <main className=" bg-[30%] bg-cover bg-fixed "
  
    // style={{
    //       backgroundImage: `url(${temple})`
    //     }}
   >
       {/* <div
        className="hero h-[60vh] "
        style={{
          backgroundImage:
            `url(${herobanner})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center mt-25">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">MemberShip Programs</h1>
            <p className="mb-5 text-2xl">Learn. Grow. Lead.</p>
          </div>
        </div>
      </div> */}
<div className="max-w-7xl mx-auto px-4 py-5 mt-35">
  <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-6">
    
    {/* Left image */}
    <div className="w-full bg-white flex justify-center">
      <img src={AmCham} alt="Member left" className="w-[300px] object-cover" />
    </div>

    {/* Middle content */}
    <div className="w-full bg-white p-6 flex flex-col justify-center items-center text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
        Standard Member
      </h2>
    </div>

    {/* Right image */}
    <div className="w-full bg-white flex justify-center lg:justify-end items-center">
      <img src={Certification} alt="Cert" className="w-[300px] object-cover" />
    </div>

  </div>
</div>
<div className="max-w-7xl mx-auto px-4 py-5">
  <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-6">
    
    <div className="w-full bg-white flex justify-center items-center">
      <img src={BritCham} alt="Member left" className="w-[300px] h-[270px] object-cover" />
    </div>

    <div className="w-full bg-white p-6 flex flex-col justify-center items-center text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
        Associate Member
      </h2>
    </div>

    <div className="w-full bg-white flex justify-center lg:justify-end items-center ">
      <img src={britcam} alt="Cert" className="w-[300px] object-cover border border-gray-300" />
    </div>

  </div>
</div>

      {/* autoplay carousel (no buttons, slower) */}
      <div className='max-w-7xl mx-auto my-10 relative'>
        <AutoCarousel
        slides={[
          slide1,
          slide2,
          slide3,
          slide4,
        ]}
        interval={4500} // 4.5s per slide (adjust for slower/faster)  
      />
      <div className='w-full h-full bg-black/35 absolute top-0'></div>
      <div className='flex justify-end w-full h-full absolute top-0  z-30 '>
        <div><img src={AmCham} className='h-33' alt="" /></div>
        <div><img src={logoAnn} className='h-25 m-5' alt="" /></div>
       
        
        
      </div>
      </div>
   </main>
  )
}

export default Membership