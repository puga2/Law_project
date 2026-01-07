import React from "react";
// import home from "/images/home.png";
import heroHome from "/images/heroHome.jpg";
import homeImage from "/images/HomeImage.jpg";
import newyear from "/images/newyear.jpg";
import newyearkh from "/images/newyearkh.jpg";
const HomePage = () => {
  return (
    <>
      <div className="hero  mx-auto h-[337px]  max-w-7xl rounded-b-3xl mb-15 mt-25 " style={{ backgroundImage: `url(${heroHome})` }}>
        <div className="hero-content px-5 md:px-25 py-20  justify-start items-start ">
          <div className="mx-0 ">
            <h1 className="text-2xl text-white md:text-6xl font-bold text-start tracking-wide">
              ANN & ASSOCIATES CO., LTD.
            </h1>
            <p className="py-6 text-sm md:text-lg text-white font-normal tracking-wide">
              ANN & ASSOCIATES CO., LTD. (ANN & A.) is a private limited company,<br /> duly established and incorporated under the laws of the Kingdom of Cambodia.
            </p>
          </div>
        </div>
      </div>
      <div className="text-[#016241] text-center font-bold  mx-auto w-[70%] lg:w-40%] tracking-wider mt-10 mb-10">
        <h1 className="text-xl sm:text-2xl md:text-5xl ">HAPPY NEW YEAR 2026</h1>
       <hr className="w-[150px] md:w-[295px] mx-auto border-t-2 border-[#016241] my-4" />
      </div>
<div className="mx-auto max-w-7xl mb-10 px-4">
  <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[1000px] justify-around gap-10">
    <div className="flex items-start justify-center lg:justify-start">
      <img src={newyearkh} className="w-full sm:max-w-[300px] md:max-w-xl object-cover shadow-2xl" />
    </div>
    <div className="flex items-end justify-center lg:justify-start">
      <img src={newyear} className="w-full  sm:max-w-[300px] md:max-w-xl object-cover shadow-2xl" />
    </div>
  </div>
</div>
      {/* feature  */}
      <div className="hero bg-[#ECF9FF] mx-auto max-w-7xl mb-10">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse justify-center items-start p-4 md:p-8 lg:p-12 w-full">
          <img src={homeImage} className="sm:max-w-[50px] object-cover   md:max-w-xl lg:max-w-md shadow-2xl mx-auto" />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#016241] tracking-wide">
            Your Trusted Partner 
            </h1>
            <hr className="w-[280px] md:w-[480px] border-t-8 border-[#016241] my-4" />
            <p className="py-6 tracking-wider text-black text-lg leading-loose">
             At Ann & Associates Co., Ltd., a locally incorporated private limited company, we view our clients not merely as businesses but as longterm partners—this is the foundation for mutual growth. Our mission is to serve as your strategic ally, safeguarding your interests and empowering your ambitions within the vibrant Cambodian market, “Glocalization”. We don’t merely manage cases and projects; we collaborate with you to build, secure, and expand your endeavors. <br /> <br /> We are committed to delivering not just exceptional business, legal and tax consultation, but also the clarity and confidence you need to progress.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
