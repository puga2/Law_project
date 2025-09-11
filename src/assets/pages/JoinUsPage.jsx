import React from "react";

const JoinUsPage = () => {
  return (
    <>
      <div
        className="hero h-[60vh] "
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold">Join Us</h1>
            <p className="mb-5 text-2xl">Here is our Team</p>
          </div>
        </div>
      </div>
      {/* feature  */}
     <div  className="h-auto py-13 object-cover no-repeat bg-cover" style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}>
       <div className=" mx-auto max-w-7xl ">
        <div className="flex flex-col-reverse lg:flex-row-reverse  justify-between items-stretch   w-full px-0">
          {/* <img src={home} className="sm:max-w-[50px]  md:max-w-xl  shadow-2xl mx-auto" /> */}
         
          {/* box left  */}
          <div className="bg-[#016241] md:w-[35%]  text-white pt-15 pb-15 h-auto ">

              <h2 className="text-center text-xl   tracking-wide ">This course include:</h2>
            <ul className="py-6 tracking-wider font-normal text-lg leading-loose mx-10 list-disc">
              <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, exercitationem.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, exercitationem.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, exercitationem.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, exercitationem.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, exercitationem.</li>
            </ul>
          </div>
          <div className="bg-white/80 shadow-lg md:w-[65%] p-15">
            <h2 className="text-2xl md:text-3xl font-bold text-[#016241] tracking-wide">
              Training Course
            </h2>
            <p className="py-6 tracking-wider text-black text-xl leading-loose">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <button className="btn btn-lg bg-[#016241] font-normal border-none">Register Now</button>
          </div>
        </div>
      </div>
     </div>
    </>
  );
};

export default JoinUsPage;
