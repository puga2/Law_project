import React from "react";
import { useNavigate } from "react-router-dom";

// import phnom from "/images/phnom.jpg";
import temple from "/images/temple.jpg";
import herobanner from "/images/herobanner.jpg";
const JoinUsPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="hero h-[60vh] "
        style={{
           backgroundImage: `url(${herobanner})`
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center mt-25">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold">Join Us</h1>
            <p className="mb-5 text-2xl">Here is our Team</p>
          </div>
        </div>
      </div>
      {/* feature  */}
     <div  className="h-auto py-13 bg-[70%] no-repeat bg-cover" style={{
          backgroundImage:
           `url(${temple})`
       }}>
       <div className=" mx-auto max-w-7xl ">
        <div className="flex flex-col-reverse md:flex-row-reverse  justify-between items-stretch   w-full px-0">
          {/* <img src={home} className="sm:max-w-[50px]  md:max-w-xl  shadow-2xl mx-auto" /> */}

          {/* box left  */}
          <div className="bg-[#016241] md:w-[35%]  text-white  py-6 lg:pt-15 lg:pb-15 h-auto ">

              <h2 className="text-center text-xl   tracking-wide ">We Are Hiring for:</h2>
            <ul className="py-6 tracking-wider font-normal text-lg leading-loose mx-10 list-disc">
              <li className="">corporate compliance</li>
              <li>Tax Compliance</li>
              <li>Financial Compliance</li>
            </ul>
          </div>
          <div className="bg-white/80 shadow-lg md:w-[65%]  p-6 lg:p-15">
            <h2 className="text-2xl md:text-3xl font-bold text-[#016241] tracking-wide">
              Join Our Team at Ann & Associates
            </h2>
            <p className="py-6 tracking-wider text-black text-xl leading-loose">
              At Ann & Associates, we are always eager to connect with talented professionals in law, business, and tax. We value integrity, excellence, and collaboration, and we are looking for people who share these principles.
Even if there are no current openings that match your background, we welcome your interest. We offer a supportive, high-performing environment where you can take on meaningful, challenging work.
To be considered for future opportunities, please send your CV and a brief cover letter to <a href="mailto:contact@ann-associates.com" target="_blank">contact@ann-associates.com</a>
            </p>
          <button
      className="btn btn-lg bg-[#016241] text-white font-normal border-none"
      onClick={() => navigate("/register")}
    >
      Register Now  
    </button>
          </div>
        </div>
      </div>
     </div>
    </>
  );
};

export default JoinUsPage;
