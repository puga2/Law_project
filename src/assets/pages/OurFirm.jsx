import React from "react";
import ourfirm from "/images/OurFirm.png";
import Carousel from "../components/Carousel";
// import home from "../../../public/images/home.png";
const OurFirm = () => {
  return (
    <>
      <div
        className="relative  min-h-screen w-full flex items-center justify-center"
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
                Our Firm
              </h1>
              <p className="text-[#016241] text-lg md:text-xl ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          {/* Right box */}
          <div className="w-full lg:w-[to-50%] flex   z-10">
            <div className="bg-[#016241]  p-10 w-full max-w-lg text-center">
              <h1 className="text-3xl font-bold mb-4 text-white">
                Diversity & Inclusivity
              </h1>
              <p className="text-white text-lg md:text-xl">
                Our approach to diversity and inclusivity is founded on the
                principles of acceptance and trust. Diversity of age, gender,
                nationality and sexual orientation are at the centre of our
                business. Diversity is the key to collaboration. We recruit the
                best and brightest talent to create a vibrant workplace with
                high performance teams. This encourages everyone to reach their
                full potential.  Our inclusive workplace deliver benefit to our
                clients who receive the highest standards of service and
                support. Bun & Associates is a modern, progressive business that
                is committed to diversity and inclusivity.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* feature  */}
      <div className="hero bg-base-content mx-auto max-w-7xl mb-10">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse justify-center items-start p-4 md:p-8 lg:p-12 w-full">
   <Carousel />

          <div className=" md:w-50% lg:w-1/2  ">
            <h1 className="text-4xl font-bold text-black tracking-wide">
              Here are our team 
            </h1>
            <hr className="w-[300px] border-t-1 border-black my-4" />
            <p className="py-6 tracking-wider text-black text-lg leading-loose">
              Bun & Associates partners, lawyers and tax specialists are
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
