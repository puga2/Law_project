import React from "react";
import home from "../../../public/images/home.png";
const HomePage = () => {
  return (
    <>
      <div className=" bg-[#016241]  mx-auto h-[337px]  max-w-7xl rounded-b-3xl mb-15">
        <div className="hero-content px-10 md:px-25 py-20  justify-start items-start ">
          <div className="mx-0 ">
            <h1 className="text-3xl md:text-6xl font-bold text-start tracking-wide">
              ANN Law Office
            </h1>
            <p className="py-6 text-lg font-normal tracking-wide">
              leading full-service law firm <br />
              operation in Cambodia
            </p>
          </div>
        </div>
      </div>
      {/* feature  */}
      <div className="hero bg-base-content mx-auto max-w-7xl mb-10">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse justify-center items-start p-4 md:p-8 lg:p-12 w-full">
          <img src={home} className="sm:max-w-[50px]  md:max-w-xl  shadow-2xl mx-auto" />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#016241] tracking-wide">
              ANN Law Office is a <br /> leading full-service law firm <br />{" "}
              operating in Cambodia.
            </h1>
            <hr className="w-[280px] md:w-[480px] border-t-8 border-[#016241] my-4" />
            <p className="py-6 tracking-wider text-black text-lg leading-loose">
              ANN is a term derived from Sanskrit meaning limitless, infinite.
              This concept is deeply rooted in Khmer culture. ANANT Law Firm was
              established by four Partners, <span className=" underline underline-offset-4">Sophealeak ING</span>, <span className=" underline underline-offset-4">Antoine
              FONTAINE</span>, <span className=" underline underline-offset-4">Tongkin HUOY</span> and <span className=" underline underline-offset-4">Ratana NEM</span>. Our success and reputation
              were built up over the years. We have a clear understanding of
              business culture and a firm grasp of the Cambodian sophisticated
              context. We are committed to deliver high value-added and
              innovative legal solutions. In particular, <span className=" underline underline-offset-4">Sophealeak
              ING</span> and <span className=" underline underline-offset-4">Antoine FONTAINE</span> are ranked as top individual lawyers in
              Cambodia in <span>Chambers & Partners</span> and <span>IFRL1000</span>. Our team is
              dedicated to specific practice areas and specialized in industry
              sectors. We profoundly believe that “Together We Can Deliver New
              Possibilities.”
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
