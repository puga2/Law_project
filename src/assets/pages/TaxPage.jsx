import React from "react";
// import { useNavigate } from "react-router-dom";

import join from "/images/join.jpg";
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
        <div className="flex flex-col-reverse md:flex-row-reverse  justify-between items-stretch   w-full px-0">
          {/* <img src={home} className="sm:max-w-[50px]  md:max-w-xl  shadow-2xl mx-auto" /> */}

          {/* box left  */}

          <div className="bg-white/80 shadow-lg md:w-[60%] lg:w-[55%] p-6 lg:p-15">

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
                effectively.    </p>
            </div>
            <div className="mb-6">
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
  
          <div className="bg-[#016241] md:w-[40%] lg:w-[45%]   text-white  pt py-15 lg:pt-15 lg:pb-15 h-auto ">
            <h2 className=" ps-20 text-[60px]  font-semibold leading-tighter  tracking-wider ">
              STRATEGIC TAX
            </h2>
            <h2 className=" ps-20 text-[60px]  font-semibold leading-tighter  tracking-wider  ">
              CONSULTING &
            </h2>
            <h2 className=" ps-20 text-[60px]  font-semibold leading-tighter  tracking-wider  ">
              SUPPORT &
            </h2>
            <h2 className=" ps-20 text-[60px]  font-semibold leading-tighter  tracking-wider  ">
              SOLUTIONS
            </h2>
         
          </div>
        </div>
      </div>
    </>
  );
};

export default TaxPage;
