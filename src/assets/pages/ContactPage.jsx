import React from "react";
import { Link } from "react-router";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
const ContactPage = () => {
  return (
    <>
      <div>
        <div
          className="hero h-[60vh]   lg:mb-40 relative"
          style={{
            backgroundImage:
              "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-6xl font-bold tracking-wide">
                Contact Us
              </h1>
              <p className="mb-5 text-2xl">Here is our team.</p>
            </div>
          </div>
        </div>
        {/* contact */}
        <div className="hidden lg:block max-w-7xl mx-auto px-4  bg-gray-700  absolute  left-1/2   lg:top-9/11 -translate-x-1/2 -translate-y-1/2 w-full ">
        {/* big screen show only */}
          <div className="">
            <div className="flex justify-between flex-wrap">
              <div className="w-1/3 px-4 pt-20 pb-20 text-white ">
                <div className="flex flex-col md:flex-row justify-center item-center text-center">
                  <div className="bg-[#016241] w-10 h-10  md:w-18 md:h-18 flex justify-center items-center rounded-full absolute top-[-2.5rem]">
                    <IoLocation className="size-4 md:size-10 icon " />
                  </div>

                  <h2 className="text-sm md:text-lg   tracking-wider">
                    No. 356, Street Boeng Totueng Thngai, OCIC Chroy Changvar,
                    Phnom Penh Cambodia
                  </h2>
                </div>
              </div>
              <div className="w-1/3 px-4 pt-20 pb-20 text-white ">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#016241]  w-10 h-10   md:w-18 md:h-18 flex justify-center items-center rounded-full absolute top-[-2.5rem]">
                    <FaPhoneAlt className="size-4 md:size-10 icon " />
                  </div>

                  <h2 className="text-lg   tracking-wider">096 37 77 172</h2>
                </div>
              </div>
              <div className="w-1/3 px-4 pt-20 pb-20 text-white ">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#016241]  w-10 h-10   md:w-18 md:h-18 flex justify-center items-center rounded-full absolute top-[-2.5rem]">
                    <MdEmail className="size-4 md:size-10 icon " />
                  </div>

                  <h2 className="text-lg   tracking-wider">
                    ann@ann-associates.com
                  </h2>
                </div>
              </div>
            </div>
          </div>
     

        </div>
      </div>


         
      <div className="max-w-7xl mx-auto">
          {/* small screen show */}
            <div className=" flex lg:hidden bg-gray-700  flex-col md:flex-row justify-center items-stretch gap-6 py-8">
        {/* Address */}
        <div className="w-full md:w-1/3 px-4 flex flex-col items-center text-center text-white">
          <div className="bg-[#016241] w-10 h-10 flex justify-center items-center rounded-full mb-6">
            <IoLocation className="size-5" />
          </div>
          <h2 className="text-base md:text-lg tracking-wider">
            No. 356, Street Boeng Totueng Thngai, OCIC Chroy Changvar, Phnom Penh Cambodia
          </h2>
        </div>
        {/* Phone */}
        <div className="w-full md:w-1/3 px-4 flex flex-col items-center text-center text-white">
          <div className="bg-[#016241] w-10 h-10 flex justify-center items-center rounded-full mb-6">
            <FaPhoneAlt className="size-5 " />
          </div>
          <h2 className="text-base md:text-lg tracking-wider">096 37 77 172</h2>
        </div>
        {/* Email */}
        <div className="w-full md:w-1/3 px-4 flex flex-col items-center text-center text-white">
          <div className="bg-[#016241] w-10 h-10 flex justify-center items-center rounded-full mb-6">
            <MdEmail className="size-5" />
          </div>
          <h2 className="text-base md:text-lg tracking-wider">ann@ann-associates.com</h2>
        </div>
      </div>
 <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086284573629!2d-122.41941528468133!3d37.77492977975967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2b0f7c4d%3A0x8b37a3cbd82adf4!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1632952726950!5m2!1sen!2sus"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
      </div>
    </>
  );
};

export default ContactPage;
