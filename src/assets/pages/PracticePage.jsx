import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import pheak from "/images/pheak.png";
import herobanner from "/images/herobanner.jpg";
const PracticePage = () => {
  return (
    <>
      <div>
        <div
          className="hero h-[60vh]     lg:mb-50 relative"
          style={{
           backgroundImage: `url(${herobanner})`
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-6xl font-bold tracking-wide">
                What We Solve
              </h1>
              <p className="mb-5 text-2xl">
                You can explore all the cases below
              </p>
            </div>
          </div>
        </div>
        {/* contact */}
        <div className="hidden lg:block max-w-7xl mx-auto px-4  bg-[#016241] absolute  left-1/2    lg:top-9/10 -translate-x-1/2 -translate-y-1/2 w-full ">
          {/* big screen show only */}
          <div className="">
            <div className="flex justify-between flex-wrap">
              <div className="w-1/2 px-4 py-10 text-white ">
                <div className="flex flex-col md:flex-row justify-around ">
                  <ul className="space-y-2 text-xl">
                    <li>Dispute Resolution & Arbitration</li>
                    <li>Intellectual Property</li>
                    <li>Real Estate & Construction</li>
                    <li>Corporate & Commercial</li>
                    <li>Banking & Finance</li>
                    <li>Energy & Environment</li>
                  </ul>
                </div>
              </div>

              <div className="w-1/2 px-4 py-10 text-white ">
                <div className="flex flex-col md:flex-row justify-around ">
                  <ul className="space-y-2 text-xl">
                    <li>Dispute Resolution & Arbitration</li>
                    <li>Intellectual Property</li>
                    <li>Real Estate & Construction</li>
                    <li>Corporate & Commercial</li>
                    <li>Banking & Finance</li>
                    <li>Telecommunications, Media & Tech</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* small screen show */}
        <div className=" flex lg:hidden bg-[#016241] flex-col md:flex-row justify-center items-stretch gap-6 py-8">
          {/* Address */}
          <div className="w-full md:w-1/2 px-4 flex flex-col items-center text-center text-white">
            <ul className="space-y-2 text-lg lg:text-xl">
              <li>Dispute Resolution & Arbitration</li>
              <li>Intellectual Property</li>
              <li>Real Estate & Construction</li>
              <li>Corporate & Commercial</li>
              <li>Banking & Finance</li>
              <li>Telecommunications, Media & Tech</li>
            </ul>
          </div>
          {/* Phone */}
          <div className="w-full md:w-1/2 px-4 flex flex-col items-center text-center text-white">
            <ul className="space-y-2 text-lg md:text-xl">
              <li>Dispute Resolution & Arbitration</li>
              <li>Intellectual Property</li>
              <li>Real Estate & Construction</li>
              <li>Corporate & Commercial</li>
              <li>Banking & Finance</li>
              <li>Telecommunications, Media & Tech</li>
            </ul>
          </div>
        </div>
      </div>

      {/* handler  */}
      <div className=" mx-auto max-w-7xl ">
        <div className="flex flex-col-reverse  lg:flex-row flex-wrap  justify-between items-center   w-full px-0 ">
          {/* <img src={home} className="sm:max-w-[50px]  md:max-w-xl  shadow-2xl mx-auto" /> */}

          {/* box left  */}
          <div className="  w-full lg:w-[55%] text-center order-1 p-3 lg:p-5 mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#016241] tracking-wide ">
              Banking, Finance
            </h2>
            <p className="py-6 tracking-wider text-black text-lg leading-loose">
              Our team has extensive experience in the full banking business
              cycle and complex financing transactions, both onshore and
              offshore, as well as advising banks, financial institutions,
              insurance companies, investments funds and corporate clients on
              their market entry and operations, such as regulatory compliance,
              licensing and financing documentation. We also advise banks and
              financial institutions on market entry, licensing and (re)shaping
              financial products complying with the applicable laws and
              regulations.
            </p>
          </div>
          <div className=" lg:w-[45%]   text-white   order-2   py-6 lg:pt-15 lg:pb-15 w-full">
            <div className="card card-side  rounded-none bg-base-100  py-5 pl-4">
              <figure>
                <img
                  src={pheak} className="h-60"
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title tracking-wide font-normal">Saom Sopheak</h2>
                <p className="text-md text-[#016241] font-bold">Partner</p>
                  <div className="grid grid-flow-row gap-4 justify-items-start w-full ">
                  <span className="link link-hover inline-flex items-center   text-lg">
                    <IoLocation className="size-6  " />
                     <p className='ps-3 textarea-md md:text-lg'>sopheak.saom</p>
                  </span>
                  <span className="link link-hover inline-flex items-center gap-2 text-lg">
                    <FaPhoneAlt className="size-5" />
                    <p className='ps-3 textarea-md md:text-lg'>    087 271 888
                </p>
                  </span>
                  <span className="link link-hover inline-flex items-center gap-2 text-lg">
                    <MdEmail className="size-5" />
                    <p className='ps-3 textarea-md md:text-lg'>    ann@ann-associates.com
                </p>
                  </span>
                </div>
              <div>
              </div>
              </div>
            </div>
          </div>
          
           {/* box 2 */}
            <div className=" lg:w-[45%]  text-white order-4  lg:order-3   py-6 lg:pt-15 lg:pb-15 w-full">
            <div className="card card-side  rounded-none bg-base-100  py-5 pl-4">
              <figure>
                <img
                  src={pheak} className="h-60"
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title tracking-wide font-normal">Saom Sopheak</h2>
                <p className="text-md text-[#016241] font-bold">Partner</p>
                  <div className="grid grid-flow-row gap-4 justify-items-start w-full ">
                  <span className="link link-hover inline-flex items-center   text-lg">
                    <IoLocation className="size-6  " />
                     <p className='ps-3 textarea-md md:text-lg'>sopheak.saom</p>
                  </span>
                  <span className="link link-hover inline-flex items-center gap-2 text-lg">
                    <FaPhoneAlt className="size-5" />
                    <p className='ps-3 textarea-md md:text-lg'>    087 271 888
                </p>
                  </span>
                  <span className="link link-hover inline-flex items-center gap-2 text-lg">
                    <MdEmail className="size-5" />
                    <p className='ps-3 textarea-md md:text-lg'>    ann@ann-associates.com
                </p>
                  </span>
                </div>
              <div>
              </div>
              </div>
            </div>
           
          </div>
           <div className="  w-full lg:w-[55%] text-center order-3 lg:order-4  p-6 lg:p-5">
            <h2 className="text-2xl md:text-3xl font-bold text-[#016241] tracking-wide">
              Banking, Finance
            </h2>
            <p className="py-6 tracking-wider  text-black text-lg leading-loose">
              Our team has extensive experience in the full banking business
              cycle and complex financing transactions, both onshore and
              offshore, as well as advising banks, financial institutions,
              insurance companies, investments funds and corporate clients on
              their market entry and operations, such as regulatory compliance,
              licensing and financing documentation. We also advise banks and
              financial institutions on market entry, licensing and (re)shaping
              financial products complying with the applicable laws and
              regulations.
            </p>
          </div>
         
           {/* box 3 */}
              <div className="  w-full lg:w-[55%] text-center order-5  p-3 lg:p-5">
            <h2 className="text-2xl md:text-3xl font-bold text-[#016241] tracking-wide">
              Banking, Finance
            </h2>
            <p className="py-6 tracking-wider text-black text-lg leading-loose">
              Our team has extensive experience in the full banking business
              cycle and complex financing transactions, both onshore and
              offshore, as well as advising banks, financial institutions,
              insurance companies, investments funds and corporate clients on
              their market entry and operations, such as regulatory compliance,
              licensing and financing documentation. We also advise banks and
              financial institutions on market entry, licensing and (re)shaping
              financial products complying with the applicable laws and
              regulations.
            </p>
          </div>
                <div className=" lg:w-[45%]  text-white  order-6   py-6 lg:pt-15 lg:pb-15 w-full">
            <div className="card card-side  rounded-none bg-base-100  py-5 pl-4">
              <figure>
                <img
                  src={pheak} className="h-60"
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title tracking-wide font-normal">Saom Sopheak</h2>
                <p className="text-md text-[#016241] font-bold">Partner</p>
                  <div className="grid grid-flow-row gap-4 justify-items-start w-full ">
                  <span className="link link-hover inline-flex items-center   text-lg">
                    <IoLocation className="size-6  " />
                     <p className='ps-3 textarea-md md:text-lg'>sopheak.saom</p>
                  </span>
                  <span className="link link-hover inline-flex items-center gap-2 text-lg">
                    <FaPhoneAlt className="size-5" />
                    <p className='ps-3 textarea-md md:text-lg'>    087 271 888
                </p>
                  </span>
                  <span className="link link-hover inline-flex items-center gap-2 text-lg">
                    <MdEmail className="size-5" />
                    <p className='ps-3 textarea-md md:text-lg'>    ann@ann-associates.com
                </p>
                  </span>
                </div>
              <div>
              </div>
              </div>
            </div>
          </div>
         
       
        </div>
      </div>
    </>
  );
};

export default PracticePage;
