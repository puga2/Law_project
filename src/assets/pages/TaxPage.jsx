import React from "react";
// import { useNavigate } from "react-router-dom";

import join from "/images/join.jpg";
import logoAnnn from "/images/logoAnnn.png";
// import joinBack from "/images/joinBack.jpg";
const TaxPage = () => {
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
            <h1 className="mb-5 text-6xl font-bold">Tax Service</h1>
            <p className="mb-5 text-2xl">You can explore all the cases below</p>
          </div>
        </div>
      </div>
      {/* feature  */}

      <div className=" ">
        <div className="flex flex-col md:flex-row-reverse  justify-between items-stretch   w-full px-0">
           <div className="bg-[#016241] md:w-[40%] lg:w-[45%] relative overflow-hidden  text-white p-10  lg:pt-15 lg:pb-15 h-auto ">
            <div className="flex flex-col justify-center items-center  w-full">
              <div className="">
                <h2 className="text-[40px] lg:text-[65px]  font-semibold leading-tighter  tracking-wider ">
                  STRATEGIC TAX
                </h2>
                <h2 className="text-[40px] lg:text-[65px]  font-semibold leading-tighter  tracking-wider  ">
                  CONSULTING &
                </h2>
                <h2 className="text-[40px] lg:text-[65px]  font-semibold leading-tighter  tracking-wider  ">
                  COMPLIANCE
                </h2>
                <h2 className="text-[40px] lg:text-[65px]  font-semibold leading-tighter  tracking-wider  ">
                  SOLUTIONS
                </h2>
              </div>
            </div>
            <div className="absolute bottom-[-100px] left-[-100px] rotate-90 mix-blend-lighten opacity-10">
              <img src={logoAnnn} width="580px" className="" alt="" />
            </div>
          </div>
          <div className="bg-white/80 shadow-lg md:w-[60%] lg:w-[55%] p-6 lg:p-15">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#016241] tracking-wide">
                  Comprehensive Tax Services
              </h2>
              <p className="py-3 tracking-wider text-[#016241] pe-15 text-xl leading-loose">
                Planning, filing, and audit support to ensure seamless compliance and efficiency.
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#016241] tracking-wide">
                Minimizing Tax Liabilities
              </h2>
              <p className="py-3 tracking-wider text-[#016241] pe-15 text-xl leading-loose">
                Developing smart strategies to reduce tax burdens while meeting all regulatory requirements.
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#016241] tracking-wide">
                Tax Dispute Advisory
              </h2>
              <p className="py-3 tracking-wider text-[#016241] pe-15 text-xl leading-loose">
                Providing expert counsel and strategic solutions for effective dispute resolution.
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#016241] tracking-wide">
                Regulatory Compliance
              </h2>
              <p className="py-3 tracking-wider text-[#016241] pe-15 text-xl leading-loose">
                Ensuring full adherence to tax regulations to protect clients from risks and penalties.
              </p>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default TaxPage;
