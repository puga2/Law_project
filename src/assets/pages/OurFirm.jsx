import React from "react";
import ourfirm from "/images/OurFirm.png";
import Carousel from "../components/Carousel";
// import home from "../../../public/images/home.png";
const OurFirm = () => {
  return (
    <>
      <div
        className="relative  min-h-screen w-full flex items-center justify-center mt-27"
        style={{
          backgroundImage: `url(${ourfirm})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* White overlay for the whole background */}
        <div className="absolute  z-0"></div>

        {/* Content container */}
        <div className=" z-10 flex flex-col lg:flex-col w-full max-w-7xl mx-auto  mb-10">
          {/* Left box */}
          <div className="w-full lg:w-[to-50%] flex justify-end z-10 ">
            <div className="bg-[#016241]/30  p-10  w-full max-w-lg text-center">
              <h1 className="text-3xl font-bold mb-4 text-[#016241]">
                1. INTRODUCTION TO THE FIRM
              </h1>
              <p className="text-[#016241] text-lg md:text-xl ">
            ANN & ASSOCIATES CO., LTD. (ANN & A.) is a private limited company, duly established and incorporated under the laws of the Kingdom of Cambodia. The firm operates with three primary missions: to provide business consultation services relating to law, business, and taxation. Drawing on more than a decade of experience with prominent law firms in Cambodia and extensive service to both local and multinational corporations since 2009, ANN & A. utilises its comprehensive expertise alongside advanced digital technology to provide support for emerging businesses and digital startups. The firm is committed to guiding clients confidently through the complexities of today's regulatory landscape.                 
              </p>
            </div>
          </div>
          {/* Right box */}
          <div className="w-full lg:w-[to-50%] flex   z-10">
            <div className="bg-[#016241]  p-10 w-full max-w-lg text-center">
              <h1 className="text-3xl font-bold mb-4 text-white">
              2. OUR EXPERIENCES
              </h1>
              <p className="text-white text-lg md:text-xl">
                Since its inception, our firm has provided guidance on numerous major projects, supported by a highly experienced, multilingual, and multidisciplinary team. We have cultivated strong relationships with key public and local authorities, international organizations, and industry leaders. Leveraging a robust regional network, we are well-positioned to advance our clients’ interests. Our extensive professional expertise and experience have enabled us to contribute to a wide range of significant projects.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* feature  */}
      <div className="hero bg-[#ECF9FF] mx-auto max-w-7xl mb-10">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse justify-center items-start p-4 md:p-8 lg:p-12 w-full">
   <Carousel />

          <div className=" md:w-50% lg:w-1/2  ">
            <h1 className="text-4xl font-bold text-black tracking-wide">
              Here are our team 
            </h1>
            <hr className="w-[300px] border-t-1 border-black my-4" />
            <p className="py-6 tracking-wider text-black text-lg leading-loose">
              Bun and Anant Associates partners, lawyers and tax specialists are
              committed to helping you succeed. We regularly work with
              Cambodian, regional and multinational corporates, governments and
              government agencies and supranational organisations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFirm;
