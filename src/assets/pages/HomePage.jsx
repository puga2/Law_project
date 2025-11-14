import React from "react";
import home from "/images/home.png";
import heroHome from "/images/heroHome.jpg";
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
      {/* feature  */}
      <div className="hero bg-[#ECF9FF] mx-auto max-w-7xl mb-10">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse justify-center items-start p-4 md:p-8 lg:p-12 w-full">
          <img src={home} className="sm:max-w-[50px]  md:max-w-xl  shadow-2xl mx-auto" />
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
