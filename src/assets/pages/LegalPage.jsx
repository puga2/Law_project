import React from "react";
// import { useNavigate } from "react-router-dom";

import join from "/images/join.jpg";
import logoAnnn from "/images/logoAnnn.png";
// import joinBack from "/images/joinBack.jpg";
const LegalPage = () => {
  return (
    <>
      <div
        className="hero h-[60vh] "
        style={{
          backgroundImage: `url(${join})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center mt-25">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold">Legal Service</h1>
            <p className="mb-5 text-2xl">You can explore all the cases below</p>
          </div>
        </div>
      </div>
      {/* feature  */}

      <div className=" ">
        <div className="flex flex-col-reverse md:flex-row-reverse  justify-between items-stretch   w-full px-0">
          {/* box left  */}

          <div className="bg-white/80 shadow-lg md:w-[60%] lg:w-[55%] px-15 pt-15 pb-10">

            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#016241] tracking-wide">
                Commercial Contract Drafting & Review
              </h2>
              <p className="py-3 tracking-wider text-[#016241] pe-15 text-xl leading-loose">
                Crafting clear, precise contracts and conducting thorough
                reviews to ensure enforceable and risk-mitigated agreements.
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#016241] tracking-wide">
                Corporate Advisory
              </h2>
              <p className="py-3 tracking-wider text-[#016241] pe-15 text-xl leading-loose">
                Providing expert corporate guidance to strengthen compliance and
                support sustainable business growth.
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#016241] tracking-wide">
                Compliance Health Check, Guidance
              </h2>
              <p className="py-3 tracking-wider text-[#016241] pe-15 text-xl leading-loose">
                Advising clients on meeting legal and regulatory requirements
                with efficiency and accuracy.
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#016241] tracking-wide">
                Business Licensing
              </h2>
              <p className="py-3 tracking-wider text-[#016241] pe-15 text-xl leading-loose">
                Advising clients on meeting legal and regulatory requirements
                with efficiency and accuracy.Assisting clients in securing
                proper licenses, permits, and authorizations swiftly and
                effectively.
              </p>
            </div>
            <div className="">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#016241] tracking-wide">
                Dispute Resolution & IP Protection
              </h2>
              <p className="py-3 tracking-wider text-[#016241] pe-15 text-xl leading-loose">
                Delivering efficient dispute resolution strategies and
                safeguarding intellectual property rights tailored to client
                objectives
              </p>
            </div>
          </div>

          <div className="bg-[#016241] md:w-[40%] lg:w-[45%] relative overflow-hidden  text-white  p-10 lg:pt-15 lg:pb-15 h-auto ">
            <div className="flex flex-col justify-center items-center  w-full">
              <div className="">
                <h2 className="text-[40px] lg:text-[65px]  font-semibold leading-tighter  tracking-wider ">
                  COMPREHENSIVE
                </h2>
                <h2 className="text-[40px] lg:text-[65px]  font-semibold leading-tighter  tracking-wider  ">
                  PROFESSIONAL
                </h2>
                <h2 className="text-[40px] lg:text-[65px]  font-semibold leading-tighter  tracking-wider  ">
                  SUPPORT &
                </h2>
                <h2 className="text-[40px] lg:text-[65px]  font-semibold leading-tighter  tracking-wider  ">
                  ADVISORY
                </h2>
                <h2 className="text-[40px] lg:text-[65px]  font-semibold leading-tighter  tracking-wider  ">
                  SERVICES
                </h2>
              </div>
            </div>
           <div className="absolute bottom-[-100px] left-[-100px] rotate-90 mix-blend-lighten opacity-10">
            <img src={logoAnnn}  width="580px" className="" alt="" />
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalPage;
