import React from "react";
import m1 from "../../../public/images/m1.png";

const OurTeam = () => {
  return (
    <>
      <div
        className="hero h-[60vh] mb-15"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold">Our Team</h1>
            <p className="mb-5 text-2xl">Here is our Team</p>
          </div>
        </div>
      </div>

      {/* Team Section Title */}
      <div className="bg-[#016241] text-white text-center font-bold py-3 mx-auto w-[70%] lg:w-[25%] tracking-wider mb-10">
        <h1>Our Team</h1>
      </div>

      {/* Responsive Team Cards */}
      <div className="max-w-7xl mx-auto px-4 py-10">
     <div className="flex flex-wrap justify-center gap-6">
  {/* Card 1 */}
  <div className="relative w-full max-w-[342px] h-[447px]">
    <img
      src={m1}
      alt="Heng Chandarith - Associates"
      className="w-full h-full object-cover rounded-tl-3xl rounded-br-3xl"
    />
    <div className="absolute bottom-8 right-8 bg-[#016241] w-[80%] mx-auto py-3 flex items-center justify-center">
      <div className="text-center text-white">
        <h2 className="text-xl font-bold tracking-wide">Heng Chandarith</h2>
        <p>Associates</p>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="relative w-full max-w-[342px] h-[447px]">
    <img
      src={m1}
      alt="Heng Chandarith - Associates"
      className="w-full h-full object-cover rounded-tl-3xl rounded-br-3xl"
    />
    <div className="absolute bottom-8 right-8 bg-[#016241] w-[80%] mx-auto py-3 flex items-center justify-center">
      <div className="text-center text-white">
        <h2 className="text-xl font-bold tracking-wide">Heng Chandarith</h2>
        <p>Associates</p>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="relative w-full max-w-[342px] h-[447px]">
    <img
      src={m1}
      alt="Heng Chandarith - Associates"
      className="w-full h-full object-cover rounded-tl-3xl rounded-br-3xl"
    />
    <div className="absolute bottom-8 right-8 bg-[#016241] w-[80%] mx-auto py-3 flex items-center justify-center">
      <div className="text-center text-white">
        <h2 className="text-xl font-bold tracking-wide">Heng Chandarith</h2>
        <p>Associates</p>
      </div>
    </div>
  </div>

  {/* Card 4 */}
  <div className="relative w-full max-w-[342px] h-[447px]">
    <img
      src={m1}
      alt="New Member - Position"
      className="w-full h-full object-cover rounded-tl-3xl rounded-br-3xl"
    />
    <div className="absolute bottom-8 right-8 bg-[#016241] w-[80%] mx-auto py-3 flex items-center justify-center">
      <div className="text-center text-white">
        <h2 className="text-xl font-bold tracking-wide">New Member</h2>
        <p>Position</p>
      </div>
    </div>
  </div>

  {/* Card 5 */}
  <div className="relative w-full max-w-[342px] h-[447px]">
    <img
      src={m1}
      alt="New Member - Position"
      className="w-full h-full object-cover rounded-tl-3xl rounded-br-3xl"
    />
    <div className="absolute bottom-8 right-8 bg-[#016241] w-[80%] mx-auto py-3 flex items-center justify-center">
      <div className="text-center text-white">
        <h2 className="text-xl font-bold tracking-wide">New Member</h2>
        <p>Position</p>
      </div>
    </div>
  </div>
</div>
      </div>
    </>
  );
};

export default OurTeam;
